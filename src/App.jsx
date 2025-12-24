import React, { useState, useEffect } from 'react';
import DropZone from './components/DropZone';
import FileList from './components/FileList';
import { convertHeicToPng } from './utils/converter';
import { downloadZip } from './utils/zip';

function App() {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFilesAdded = (newFiles) => {
    const fileObjs = newFiles.map(f => ({
      id: Math.random().toString(36).substr(2, 9),
      originalFile: f,
      status: 'pending', // pending, converting, done, error
      result: null,
      error: null
    }));

    setFiles(prev => [...prev, ...fileObjs]);
  };

  // Process queue
  useEffect(() => {
    const pendingFiles = files.filter(f => f.status === 'pending');

    if (pendingFiles.length > 0 && !isProcessing) {
      processQueue();
    }
  }, [files, isProcessing]);

  const processQueue = async () => {
    setIsProcessing(true);

    // Find first pending
    const idx = files.findIndex(f => f.status === 'pending');
    if (idx === -1) {
      setIsProcessing(false);
      return;
    }

    const fileObj = files[idx];

    // Update status to converting
    setFiles(prev => {
      const newFiles = [...prev];
      newFiles[idx] = { ...newFiles[idx], status: 'converting' };
      return newFiles;
    });

    try {
      // Small delay to let UI render the 'converting' state
      await new Promise(r => setTimeout(r, 100));

      const converted = await convertHeicToPng(fileObj.originalFile);
      const result = converted[0];

      setFiles(prev => {
        const newFiles = [...prev];
        newFiles[idx] = {
          ...newFiles[idx],
          status: 'done',
          result: result
        };
        return newFiles;
      });

    } catch (err) {
      console.error(err);
      setFiles(prev => {
        const newFiles = [...prev];
        newFiles[idx] = {
          ...newFiles[idx],
          status: 'error',
          error: err.message
        };
        return newFiles;
      });
    }

    setIsProcessing(false);
  };

  const handleDownloadAll = () => {
    downloadZip(files);
  };

  return (
    <div className="App">
      <header style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '1rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>
          <i className="fa-solid fa-terminal"></i>
        </div>
        <h1 style={{
          fontSize: '3rem',
          background: 'linear-gradient(to right, #60A5FA, #A855F7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          Naul HEIC to PNG
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Convert HEIC to PNG instantly for free.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span><i className="fa-solid fa-bolt" style={{ color: '#EAB308' }}></i> Blazing Fast</span>
          <span><i className="fa-solid fa-shield-halved" style={{ color: '#10B981' }}></i> Local & Secure</span>
          <span><i className="fa-solid fa-image" style={{ color: '#3B82F6' }}></i> Lossless Quality</span>
        </div>
      </header>

      <DropZone onFilesAdded={handleFilesAdded} />

      {files.length > 0 && (
        <div className="card" style={{ marginTop: '2rem', animation: 'fadeIn 0.5s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0 }}>Processing Queue</h3>
            {files.some(f => f.status === 'done') && (
              <button onClick={handleDownloadAll} className="btn-primary">
                <i className="fa-solid fa-file-zipper" style={{ marginRight: '0.5rem' }}></i>
                Download ZIP
              </button>
            )}
          </div>
          <FileList files={files} />
        </div>
      )}

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', paddingBottom: '2rem' }}>
        <p>
          <i className="fa-brands fa-github"></i> <a href="https://github.com/khalilullahnaul" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted' }}>Khalilullah Naul</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
