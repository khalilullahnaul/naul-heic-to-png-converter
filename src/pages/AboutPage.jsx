import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutPage.css';

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About - Free HEIC to PNG Converter Online | Naul</title>
                <meta name="description" content="Learn about our free HEIC to PNG converter. Convert Apple HEIC images to PNG format instantly in your browser. 100% private, secure, and free forever." />
                <meta name="keywords" content="about heic converter, heic to png converter, what is heic, convert heic to png free, image converter" />
                <link rel="canonical" href="https://heic-to-png.naul.dev/about" />

                <meta property="og:title" content="About - Free HEIC to PNG Converter" />
                <meta property="og:description" content="Learn about our free HEIC to PNG converter and why we're the best choice for converting your images." />
                <meta property="og:url" content="https://heic-to-png.naul.dev/about" />
            </Helmet>

            <div className="page-container">
                <div className="page-header">
                    <h1>About Free HEIC to PNG Converter</h1>
                    <p className="page-subtitle">The best free tool to convert HEIC images to PNG format</p>
                </div>

                <div className="content-section card">
                    <h2>What is HEIC?</h2>
                    <p>
                        HEIC (High Efficiency Image Container) is a modern image format developed by Apple. It's the default format for photos taken on iPhones and iPads running iOS 11 or later. While HEIC offers excellent compression and quality, it's not universally supported across all devices and platforms.
                    </p>
                    <p>
                        That's where our <strong>free HEIC to PNG converter</strong> comes in - making your Apple photos accessible everywhere.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>Why Convert HEIC to PNG?</h2>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <i className="fa-solid fa-globe"></i>
                            <h3>Universal Compatibility</h3>
                            <p>PNG is supported by all browsers, devices, and image editing software</p>
                        </div>
                        <div className="reason-card">
                            <i className="fa-solid fa-share-nodes"></i>
                            <h3>Easy Sharing</h3>
                            <p>Share your images without compatibility issues on any platform</p>
                        </div>
                        <div className="reason-card">
                            <i className="fa-solid fa-palette"></i>
                            <h3>Transparent Backgrounds</h3>
                            <p>PNG supports transparency, perfect for logos and graphics</p>
                        </div>
                        <div className="reason-card">
                            <i className="fa-solid fa-image"></i>
                            <h3>Lossless Quality</h3>
                            <p>Maintain your image quality without compression artifacts</p>
                        </div>
                    </div>
                </div>

                <div className="content-section card">
                    <h2>Why Choose Our Free HEIC to PNG Converter?</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <i className="fa-solid fa-shield-halved"></i>
                            <div>
                                <h3>100% Private & Secure</h3>
                                <p>All conversions happen locally in your browser. Your files never leave your device, and we never see or store your images.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i className="fa-solid fa-bolt"></i>
                            <div>
                                <h3>Lightning Fast</h3>
                                <p>Convert HEIC to PNG instantly without waiting for uploads or downloads. Our converter works at the speed of your device.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i className="fa-solid fa-infinity"></i>
                            <div>
                                <h3>Unlimited & Free</h3>
                                <p>No file limits, no watermarks, no subscriptions. Convert as many HEIC images to PNG as you need, completely free forever.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i className="fa-solid fa-layer-group"></i>
                            <div>
                                <h3>Batch Conversion</h3>
                                <p>Convert multiple HEIC files to PNG at once and download them all as a ZIP file for maximum efficiency.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i className="fa-solid fa-mobile-screen"></i>
                            <div>
                                <h3>Works Everywhere</h3>
                                <p>Use our HEIC to PNG converter on any device - desktop, laptop, tablet, or smartphone. No installation required.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i className="fa-solid fa-wifi"></i>
                            <div>
                                <h3>Works Offline</h3>
                                <p>Once loaded, our converter works without an internet connection, perfect for when you're on the go.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-section card">
                    <h2>How to Convert HEIC to PNG</h2>
                    <div className="steps-container">
                        <div className="step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Upload HEIC Files</h3>
                                <p>Drag and drop your HEIC images or click to select files from your device</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Automatic Conversion</h3>
                                <p>Our free converter instantly processes your HEIC files to PNG format</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Download PNG Files</h3>
                                <p>Download individual PNG images or get all of them in a single ZIP file</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-section card">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <h3>Is this HEIC to PNG converter really free?</h3>
                            <p>Yes! Our HEIC to PNG converter is 100% free with no hidden costs, subscriptions, or limitations. Convert unlimited files forever.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do you store my images?</h3>
                            <p>No. All conversions happen locally in your browser using JavaScript. Your HEIC files never leave your device, ensuring complete privacy.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What's the maximum file size?</h3>
                            <p>There's no strict limit! Since processing happens on your device, the only limitation is your browser's memory capacity.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can I convert multiple HEIC files at once?</h3>
                            <p>Absolutely! You can upload and convert multiple HEIC images to PNG simultaneously, then download them all as a ZIP file.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Will the quality be preserved?</h3>
                            <p>Yes! Our converter maintains the original image quality during the HEIC to PNG conversion process.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do I need to install any software?</h3>
                            <p>No installation needed! Our HEIC to PNG converter works entirely in your web browser. Just visit the site and start converting.</p>
                        </div>
                    </div>
                </div>

                <div className="content-section card cta-section">
                    <h2>Ready to Convert Your HEIC Images?</h2>
                    <p>Experience the fastest and most secure free HEIC to PNG converter available online.</p>
                    <a href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '1rem' }}>
                        Start Converting Now
                    </a>
                </div>
            </div>

            {/* FAQ Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is this HEIC to PNG converter really free?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! Our HEIC to PNG converter is 100% free with no hidden costs, subscriptions, or limitations. Convert unlimited files forever."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you store my images?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No. All conversions happen locally in your browser using JavaScript. Your HEIC files never leave your device, ensuring complete privacy."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I convert multiple HEIC files at once?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely! You can upload and convert multiple HEIC images to PNG simultaneously, then download them all as a ZIP file."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Will the quality be preserved?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! Our converter maintains the original image quality during the HEIC to PNG conversion process."
                            }
                        }
                    ]
                })}
            </script>
        </>
    );
}

export default AboutPage;
