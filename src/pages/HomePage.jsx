import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import DropZone from '../components/DropZone';
import FileList from '../components/FileList';
import { convertHeicToPng } from '../utils/converter';
import { downloadZip } from '../utils/zip';

function HomePage() {
    const [files, setFiles] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFilesAdded = (newFiles) => {
        const fileObjs = newFiles.map(f => ({
            id: Math.random().toString(36).substr(2, 9),
            originalFile: f,
            status: 'pending',
            result: null,
            error: null
        }));

        setFiles(prev => [...prev, ...fileObjs]);
    };

    useEffect(() => {
        const pendingFiles = files.filter(f => f.status === 'pending');

        if (pendingFiles.length > 0 && !isProcessing) {
            processQueue();
        }
    }, [files, isProcessing]);

    const processQueue = async () => {
        setIsProcessing(true);

        const idx = files.findIndex(f => f.status === 'pending');
        if (idx === -1) {
            setIsProcessing(false);
            return;
        }

        const fileObj = files[idx];

        setFiles(prev => {
            const newFiles = [...prev];
            newFiles[idx] = { ...newFiles[idx], status: 'converting' };
            return newFiles;
        });

        try {
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
        <>
            <Helmet>
                <title>Free HEIC to PNG Converter - Convert HEIC Images Online Instantly | Naul</title>
                <meta name="description" content="Convert HEIC to PNG for free online. Fast, secure, and 100% private HEIC to PNG converter that works in your browser. No upload, no registration required. Batch conversion supported." />
                <meta name="keywords" content="free heic to png converter, heic to png, convert heic to png, heic converter, image converter, online converter, batch converter" />
                <link rel="canonical" href="https://heic-to-png.naul.dev/" />

                {/* Open Graph */}
                <meta property="og:title" content="Free HEIC to PNG Converter - Convert Images Instantly" />
                <meta property="og:description" content="Convert HEIC to PNG for free online. Fast, secure, and 100% private conversion in your browser." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://heic-to-png.naul.dev/" />
                <meta property="og:image" content="https://heic-to-png.naul.dev/og-image.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Free HEIC to PNG Converter" />
                <meta name="twitter:description" content="Convert HEIC to PNG for free online. Fast, secure, and 100% private." />
                <meta name="twitter:image" content="https://heic-to-png.naul.dev/og-image.png" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Naul HEIC to PNG Converter",
                        "applicationCategory": "MultimediaApplication",
                        "operatingSystem": "Web Browser",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "description": "Free HEIC to PNG converter that works entirely in your browser. Convert images instantly with no upload required.",
                        "featureList": [
                            "Free HEIC to PNG conversion",
                            "100% private and secure",
                            "Batch conversion support",
                            "No file size limits",
                            "Works offline",
                            "Lossless quality"
                        ],
                        "author": {
                            "@type": "Person",
                            "name": "Khalilullah Naul",
                            "url": "https://github.com/khalilullahnaul"
                        }
                    })}
                </script>
            </Helmet>

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
            </div>
        </>
    );
}

export default HomePage;
