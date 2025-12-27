import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">
                        <i className="fa-solid fa-terminal"></i>
                        Naul HEIC Converter
                    </h3>
                    <p className="footer-description">
                        Free, fast, and secure HEIC to PNG conversion. All processing happens locally in your browser - your files never leave your device.
                    </p>
                    <div className="social-links">
                        <a
                            href="https://github.com/khalilullahnaul"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <nav className="footer-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </nav>
                </div>

                <div className="footer-section">
                    <h4>Features</h4>
                    <ul className="feature-list">
                        <li><i className="fa-solid fa-bolt"></i> Blazing Fast</li>
                        <li><i className="fa-solid fa-shield-halved"></i> 100% Private</li>
                        <li><i className="fa-solid fa-image"></i> Lossless Quality</li>
                        <li><i className="fa-solid fa-download"></i> Batch Download</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} Naul HEIC Converter. Made by <a href="https://github.com/khalilullahnaul" target="_blank" rel="noopener noreferrer">Khalilullah Naul</a></p>
            </div>

            {/* Structured Data for Organization */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Naul HEIC Converter",
                    "description": "Free HEIC to PNG converter - Convert images online instantly",
                    "url": "https://heic-to-png.naul.dev",
                    "logo": "https://heic-to-png.naul.dev/favicon.svg",
                    "founder": {
                        "@type": "Person",
                        "name": "Khalilullah Naul",
                        "url": "https://github.com/khalilullahnaul"
                    },
                    "sameAs": [
                        "https://github.com/khalilullahnaul"
                    ]
                })}
            </script>
        </footer>
    );
}

export default Footer;
