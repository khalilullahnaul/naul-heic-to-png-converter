import React from 'react';

export default function FileList({ files, onRemove }) {
    if (files.length === 0) return null;

    return (
        <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Files ({files.length})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {files.map((fileObj, index) => (
                    <div key={fileObj.id} className="card" style={{
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(30, 41, 59, 0.4)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                background: '#334155',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                {fileObj.status === 'done' ? '✅' : '📄'}
                            </div>
                            <div style={{ minWidth: 0 }}>
                                <div style={{
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {fileObj.originalFile.name}
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                    {formatBytes(fileObj.originalFile.size)} • {fileObj.status}
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            {fileObj.status === 'converting' && <div className="spinner"></div>}

                            {fileObj.status === 'done' && fileObj.result && (
                                <a
                                    href={fileObj.result.url}
                                    download={fileObj.result.name}
                                    className="btn-primary"
                                    style={{ textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                                >
                                    Download
                                </a>
                            )}

                            {/*  <button 
                onClick={() => onRemove(fileObj.id)}
                className="btn-secondary"
                style={{ borderColor: 'var(--error-color)', color: 'var(--error-color)' }}
              >
                ×
              </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
