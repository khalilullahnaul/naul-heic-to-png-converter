import React, { useCallback, useState } from 'react';

export default function DropZone({ onFilesAdded }) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFilesAdded(Array.from(e.dataTransfer.files));
        }
    }, [onFilesAdded]);

    const handleFileInput = useCallback((e) => {
        if (e.target.files && e.target.files.length > 0) {
            onFilesAdded(Array.from(e.target.files));
        }
    }, [onFilesAdded]);

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`card dropzone ${isDragging ? 'dragging' : ''}`}
            style={{
                border: '2px dashed ' + (isDragging ? 'var(--accent-color)' : 'var(--text-secondary)'),
                textAlign: 'center',
                padding: '3rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '2rem'
            }}
            onClick={() => document.getElementById('fileInput').click()}
        >
            <input
                type="file"
                id="fileInput"
                multiple
                accept=".heic,.heif"
                onChange={handleFileInput}
                style={{ display: 'none' }}
            />
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                🖼️
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: isDragging ? 'var(--accent-color)' : 'var(--text-primary)' }}>
                Drag & Drop HEIC images
            </h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                or click to browse
            </p>
        </div>
    );
}
