import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import DropZone from '../components/DropZone';
import FileList from '../components/FileList';
import { convertHeicToPng } from '../utils/converter';
import { downloadZip } from '../utils/zip';
import './HomePage.css';

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

                {/* Software Application Structured Data */}
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

                {/* HowTo Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Convert HEIC to PNG Free",
                        "description": "Step-by-step guide to convert HEIC files to PNG format for free using our online converter",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Upload HEIC Files",
                                "text": "Drag and drop your HEIC images or click to select files from your device"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Automatic Conversion",
                                "text": "Our converter instantly processes your HEIC files to PNG format in your browser"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Download PNG Files",
                                "text": "Download individual PNG images or get all of them in a single ZIP file"
                            }
                        ]
                    })}
                </script>

                {/* FAQ Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is HEIC format and why convert to PNG?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "HEIC (High Efficiency Image Container) is Apple's default photo format since iOS 11. While it offers better compression, it's not universally supported. Converting to PNG ensures compatibility across all devices, platforms, and software while maintaining image quality and adding support for transparency."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is this HEIC to PNG converter really free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! Our HEIC to PNG converter is 100% free with no hidden costs, subscriptions, watermarks, or limitations. Convert unlimited files forever without any restrictions."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are my images safe? Do you store my files?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Your images are completely safe. All conversions happen locally in your browser using JavaScript. Your HEIC files never leave your device - they are not uploaded to any server, ensuring complete privacy and security."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I convert multiple HEIC files at once?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely! Our batch conversion feature allows you to upload and convert multiple HEIC images to PNG simultaneously. You can then download all converted files as a single ZIP file for convenience."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Will converting HEIC to PNG lose quality?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No! Our converter maintains the original image quality during the HEIC to PNG conversion process. PNG is a lossless format, meaning your images will retain all their detail and quality."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need to install any software?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No installation required! Our HEIC to PNG converter works entirely in your web browser. Just visit the site and start converting immediately on any device - desktop, laptop, tablet, or smartphone."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I convert HEIC to PNG on Windows?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Simply visit our free online HEIC to PNG converter, drag and drop your HEIC files from your Windows PC, and they'll be instantly converted to PNG format. No special software or Windows apps needed."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What's the difference between HEIC and PNG?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "HEIC offers better compression (smaller file sizes) but limited compatibility. PNG provides universal compatibility across all devices and platforms, supports transparency, uses lossless compression, and is ideal for web use, editing, and sharing."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <div className="homepage-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="icon-large">
                            <i className="fa-solid fa-terminal"></i>
                        </div>
                        <h1 className="hero-title">
                            Free HEIC to PNG Converter
                        </h1>
                        <p className="hero-subtitle">
                            Convert HEIC images to PNG format instantly for free. Fast, secure, and 100% private - all processing happens in your browser.
                        </p>
                        <div className="trust-badges">
                            <span className="badge"><i className="fa-solid fa-bolt"></i> Instant Conversion</span>
                            <span className="badge"><i className="fa-solid fa-shield-halved"></i> 100% Private</span>
                            <span className="badge"><i className="fa-solid fa-infinity"></i> Unlimited & Free</span>
                        </div>
                    </div>

                    <DropZone onFilesAdded={handleFilesAdded} />

                    {files.length > 0 && (
                        <div className="card conversion-queue">
                            <div className="queue-header">
                                <h3>Processing Queue</h3>
                                {files.some(f => f.status === 'done') && (
                                    <button onClick={handleDownloadAll} className="btn-primary">
                                        <i className="fa-solid fa-file-zipper"></i>
                                        Download ZIP
                                    </button>
                                )}
                            </div>
                            <FileList files={files} />
                        </div>
                    )}
                </section>

                {/* Why Convert Section */}
                <section className="content-section why-convert-section" id="why-convert">
                    <h2>Why Convert HEIC to PNG?</h2>
                    <p className="section-intro">
                        HEIC (High Efficiency Image Container) is Apple's innovative image format introduced in iOS 11. While it offers excellent compression, converting HEIC to PNG provides universal compatibility and additional benefits for sharing and editing your photos.
                    </p>

                    <div className="comparison-grid">
                        <div className="format-card heic-card">
                            <h3><i className="fa-brands fa-apple"></i> HEIC Format</h3>
                            <ul>
                                <li><i className="fa-solid fa-check"></i> Smaller file sizes</li>
                                <li><i className="fa-solid fa-check"></i> Better compression</li>
                                <li><i className="fa-solid fa-xmark"></i> Limited compatibility</li>
                                <li><i className="fa-solid fa-xmark"></i> Not widely supported</li>
                                <li><i className="fa-solid fa-xmark"></i> Issues on Windows/Android</li>
                            </ul>
                        </div>

                        <div className="format-card png-card highlight">
                            <h3><i className="fa-solid fa-image"></i> PNG Format</h3>
                            <ul>
                                <li><i className="fa-solid fa-check"></i> Universal compatibility</li>
                                <li><i className="fa-solid fa-check"></i> Works everywhere</li>
                                <li><i className="fa-solid fa-check"></i> Lossless quality</li>
                                <li><i className="fa-solid fa-check"></i> Transparency support</li>
                                <li><i className="fa-solid fa-check"></i> Perfect for web use</li>
                            </ul>
                        </div>
                    </div>

                    <div className="benefits-list">
                        <div className="benefit-item">
                            <i className="fa-solid fa-globe"></i>
                            <div>
                                <h4>Universal Compatibility</h4>
                                <p>PNG files work on all devices, operating systems, and image editing software without any compatibility issues.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <i className="fa-solid fa-share-nodes"></i>
                            <div>
                                <h4>Easy Sharing</h4>
                                <p>Share your iPhone photos with anyone on any platform without worrying about format support.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <i className="fa-solid fa-palette"></i>
                            <div>
                                <h4>Transparency Support</h4>
                                <p>PNG supports transparent backgrounds, making it perfect for logos, graphics, and web design.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <i className="fa-solid fa-desktop"></i>
                            <div>
                                <h4>Windows & Android Friendly</h4>
                                <p>HEIC files often don't open on Windows or Android devices. PNG ensures your photos work everywhere.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="content-section how-it-works-section" id="how-it-works">
                    <h2>How to Convert HEIC to PNG - 3 Simple Steps</h2>
                    <p className="section-intro">
                        Our free HEIC to PNG converter makes image conversion effortless. Follow these three simple steps to convert your Apple photos to PNG format in seconds.
                    </p>

                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <div className="step-icon"><i className="fa-solid fa-upload"></i></div>
                            <h3>Upload Your HEIC Files</h3>
                            <p>Drag and drop your HEIC images into the converter, or click to select files from your device. You can upload multiple files at once for batch conversion.</p>
                        </div>

                        <div className="step-arrow">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>

                        <div className="step-card">
                            <div className="step-number">2</div>
                            <div className="step-icon"><i className="fa-solid fa-gear"></i></div>
                            <h3>Automatic Conversion</h3>
                            <p>Our converter instantly processes your HEIC files to PNG format right in your browser. No waiting, no server uploads - everything happens locally on your device.</p>
                        </div>

                        <div className="step-arrow">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>

                        <div className="step-card">
                            <div className="step-number">3</div>
                            <div className="step-icon"><i className="fa-solid fa-download"></i></div>
                            <h3>Download Your PNG Images</h3>
                            <p>Download individual PNG files or use the "Download ZIP" button to get all converted images in a single compressed file. It's that easy!</p>
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="content-section features-section" id="features">
                    <h2>Why Choose Our Free HEIC to PNG Converter?</h2>
                    <p className="section-intro">
                        Experience the best free online HEIC to PNG converter with features designed for speed, privacy, and convenience.
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <h3>100% Private & Secure</h3>
                            <p>All conversions happen locally in your browser using JavaScript. Your HEIC files never leave your device, never get uploaded to any server, and we never see or store your images. Complete privacy guaranteed.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h3>Lightning Fast Conversion</h3>
                            <p>Convert HEIC to PNG instantly without waiting for uploads or downloads. Our client-side processing ensures blazing-fast conversions limited only by your device's speed, not internet bandwidth.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-infinity"></i>
                            </div>
                            <h3>Unlimited & Forever Free</h3>
                            <p>No file limits, no watermarks, no hidden fees, no subscriptions. Convert as many HEIC images to PNG as you need, completely free forever. No registration or account required.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-layer-group"></i>
                            </div>
                            <h3>Batch Conversion</h3>
                            <p>Upload and convert multiple HEIC files simultaneously. Save time by processing dozens of images at once, then download them all as a convenient ZIP file.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-image"></i>
                            </div>
                            <h3>Lossless Quality</h3>
                            <p>Maintain your original image quality. PNG is a lossless format, ensuring your converted images retain all their detail, color accuracy, and clarity without compression artifacts.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-mobile-screen"></i>
                            </div>
                            <h3>Works on All Devices</h3>
                            <p>Access our HEIC to PNG converter on any device - desktop computer, laptop, tablet, or smartphone. Fully responsive design ensures a seamless experience on all screen sizes.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-wifi"></i>
                            </div>
                            <h3>Works Offline</h3>
                            <p>Once the page loads, our converter continues working even without an internet connection. Perfect for converting photos on the go or in areas with poor connectivity.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fa-solid fa-download"></i>
                            </div>
                            <h3>No Software Installation</h3>
                            <p>No downloads, no installations, no software to update. Just open your browser and start converting HEIC files to PNG immediately. Works on Windows, Mac, Linux, iOS, and Android.</p>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="content-section use-cases-section" id="use-cases">
                    <h2>Common Use Cases for HEIC to PNG Conversion</h2>
                    <p className="section-intro">
                        Discover when and why you might need to convert your HEIC images to PNG format.
                    </p>

                    <div className="use-cases-grid">
                        <div className="use-case-card">
                            <div className="use-case-icon"><i className="fa-solid fa-mobile-alt"></i></div>
                            <h3>iPhone Photos to Windows</h3>
                            <p>Transfer and view your iPhone photos on Windows PCs by converting HEIC to the universally compatible PNG format.</p>
                        </div>

                        <div className="use-case-card">
                            <div className="use-case-icon"><i className="fa-solid fa-share-alt"></i></div>
                            <h3>Social Media Sharing</h3>
                            <p>Some social media platforms and messaging apps don't support HEIC. Convert to PNG for seamless sharing across all platforms.</p>
                        </div>

                        <div className="use-case-card">
                            <div className="use-case-icon"><i className="fa-solid fa-edit"></i></div>
                            <h3>Photo Editing</h3>
                            <p>Many photo editing software programs don't support HEIC. Convert to PNG to edit your images in Photoshop, GIMP, or any editor.</p>
                        </div>

                        <div className="use-case-card">
                            <div className="use-case-icon"><i className="fa-solid fa-globe"></i></div>
                            <h3>Website Use</h3>
                            <p>Upload product images, blog photos, or portfolio pictures in PNG format for maximum browser compatibility and transparency support.</p>
                        </div>

                        <div className="use-case-card">
                            <div className="use-case-icon"><i className="fa-solid fa-print"></i></div>
                            <h3>Printing Services</h3>
                            <p>Most online printing services require PNG or JPEG formats. Convert HEIC to PNG to order prints of your iPhone photos.</p>
                        </div>

                        <div className="use-case-card">
                            <div className="use-case-icon"><i className="fa-solid fa-envelope"></i></div>
                            <h3>Email Attachments</h3>
                            <p>Send photos via email without compatibility issues. PNG ensures recipients can view your images regardless of their device or email client.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="content-section faq-section" id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <p className="section-intro">
                        Everything you need to know about converting HEIC to PNG for free.
                    </p>

                    <div className="faq-container">
                        <details className="faq-item">
                            <summary>
                                <h3>What is HEIC format and why convert to PNG?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>HEIC (High Efficiency Image Container) is Apple's default photo format introduced in iOS 11 and macOS High Sierra. It uses advanced compression to create smaller file sizes while maintaining image quality. However, HEIC has limited compatibility outside the Apple ecosystem.</p>
                                <p>Converting HEIC to PNG gives you:</p>
                                <ul>
                                    <li>Universal compatibility across all devices and platforms</li>
                                    <li>Support for transparency (alpha channel)</li>
                                    <li>Lossless compression maintaining image quality</li>
                                    <li>Ability to open files on Windows, Android, and older systems</li>
                                    <li>Compatibility with all image editing software and websites</li>
                                </ul>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Is this HEIC to PNG converter completely free?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>Yes! Our HEIC to PNG converter is 100% free with absolutely no hidden costs, subscriptions, or premium tiers. You can convert unlimited files without any restrictions, watermarks, or file size limits. It's free now and will remain free forever.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Are my images safe? Do you store my HEIC files?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>Your images are completely safe and private. All HEIC to PNG conversions happen entirely in your web browser using JavaScript. Your files are:</p>
                                <ul>
                                    <li><strong>Never uploaded</strong> to our servers or any server</li>
                                    <li><strong>Never stored</strong> in any database or cloud storage</li>
                                    <li><strong>Never seen</strong> by us or anyone else</li>
                                    <li><strong>Processed locally</strong> on your device only</li>
                                    <li><strong>Automatically deleted</strong> from browser memory when you close the page</li>
                                </ul>
                                <p>This client-side processing approach ensures maximum privacy and security for your personal photos.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Can I convert multiple HEIC files to PNG at once?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>Absolutely! Our free HEIC to PNG converter supports batch conversion. You can upload and convert multiple HEIC files simultaneously - whether it's 5 files or 500 files. Once all conversions are complete, use the "Download ZIP" button to get all your PNG images in a single compressed ZIP file, making it easy to download and organize your converted photos.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Will converting HEIC to PNG reduce image quality?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>No! PNG is a lossless image format, meaning your converted images will retain 100% of their original quality. Unlike JPEG which uses lossy compression, PNG preserves all image data including color accuracy, detail, and sharpness. Your converted PNG files will look identical to the original HEIC images, just in a more compatible format.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>What's the maximum file size I can convert?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>There's no strict file size limit! Since all processing happens on your device (not our servers), the only limitation is your browser's available memory. Modern browsers can easily handle HEIC files from smartphones, including high-resolution images from the latest iPhones. Most users can convert files up to 50-100MB without any issues.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Do I need to install software or create an account?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>No software installation or user account is required! Our HEIC to PNG converter works entirely in your web browser. Simply visit this website and start converting immediately. No downloads, no installations, no sign-ups, and no personal information needed. It works on any device with a modern web browser.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>How do I convert HEIC to PNG on Windows 10 or Windows 11?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>Converting HEIC to PNG on Windows is easy:</p>
                                <ol>
                                    <li>Open this website in any browser (Chrome, Edge, Firefox)</li>
                                    <li>Drag and drop your HEIC files from Windows File Explorer into the converter</li>
                                    <li>Wait for instant conversion (happens automatically)</li>
                                    <li>Download your PNG files individually or as a ZIP</li>
                                </ol>
                                <p>No special Windows software or Microsoft Store apps needed - it works directly in your browser!</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Can I use this converter on my iPhone or Android phone?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>Yes! Our HEIC to PNG converter is fully mobile-responsive and works perfectly on both iPhone and Android devices. Simply open this website in your mobile browser (Safari, Chrome, Firefox), tap to select HEIC files from your photo library, and download the converted PNG images directly to your phone.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>What's the difference between HEIC and PNG formats?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p><strong>HEIC (High Efficiency Image Container):</strong></p>
                                <ul>
                                    <li>Modern format by Apple (since iOS 11)</li>
                                    <li>Better compression = smaller file sizes</li>
                                    <li>Limited compatibility (mainly Apple devices)</li>
                                    <li>Not widely supported by websites and software</li>
                                </ul>
                                <p><strong>PNG (Portable Network Graphics):</strong></p>
                                <ul>
                                    <li>Universal format supported everywhere</li>
                                    <li>Lossless compression = perfect quality</li>
                                    <li>Supports transparency (alpha channel)</li>
                                    <li>Works on all devices, OS, and software</li>
                                    <li>Ideal for web use, editing, and sharing</li>
                                </ul>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Does the converter work offline?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>Yes! Once you've loaded this website, the converter will continue to work even if you lose your internet connection. Since all processing happens locally in your browser (not on a server), you can convert HEIC files to PNG without an active internet connection. This makes it perfect for use while traveling or in areas with poor connectivity.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Why are my HEIC files not opening on Windows?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>HEIC is a proprietary Apple format that Windows doesn't natively support in most versions. While newer Windows 10/11 versions can install HEIC codecs from the Microsoft Store, it's often easier to simply convert HEIC files to PNG using our free converter. PNG files will open instantly on any Windows computer without requiring additional software or codecs.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>What browsers are supported?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>Our HEIC to PNG converter works in all modern web browsers including:</p>
                                <ul>
                                    <li>Google Chrome (recommended)</li>
                                    <li>Microsoft Edge</li>
                                    <li>Mozilla Firefox</li>
                                    <li>Safari (macOS and iOS)</li>
                                    <li>Opera</li>
                                    <li>Brave</li>
                                </ul>
                                <p>We recommend using the latest version of any major browser for the best performance and security.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>Can I convert PNG back to HEIC?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>While our tool specializes in HEIC to PNG conversion, converting PNG back to HEIC typically isn't necessary since PNG is more universally compatible. However, if you need HEIC format specifically (for Apple ecosystem integration), you can use Apple Photos on Mac/iOS which automatically converts imported images to HEIC when saving to your library.</p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h3>How long does the conversion take?</h3>
                                <i className="fa-solid fa-chevron-down"></i>
                            </summary>
                            <div className="faq-answer">
                                <p>HEIC to PNG conversion is nearly instant! Since processing happens on your device, conversion speed depends on your computer/phone's processing power. Most HEIC files convert in under 1-2 seconds. Batch conversions process files sequentially, so 10 photos might take 10-20 seconds total. There's no waiting for server uploads or downloads.</p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* Security Section */}
                <section className="content-section security-section" id="security">
                    <h2>Your Privacy & Security is Our Priority</h2>
                    <p className="section-intro">
                        We take your privacy seriously. Here's how we ensure your images stay completely private and secure.
                    </p>

                    <div className="security-grid">
                        <div className="security-card">
                            <div className="security-icon">
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <h3>Client-Side Processing</h3>
                            <p>All HEIC to PNG conversions happen locally in your browser using JavaScript. Your files are processed on your device, never on our servers.</p>
                        </div>

                        <div className="security-card">
                            <div className="security-icon">
                                <i className="fa-solid fa-ban"></i>
                            </div>
                            <h3>No Server Uploads</h3>
                            <p>Your HEIC files are never uploaded to any server, cloud storage, or database. They stay on your device from start to finish.</p>
                        </div>

                        <div className="security-card">
                            <div className="security-icon">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <h3>Secure HTTPS Connection</h3>
                            <p>Our website uses 256-bit SSL encryption to ensure a secure connection, protecting you from any potential security threats.</p>
                        </div>

                        <div className="security-card">
                            <div className="security-icon">
                                <i className="fa-solid fa-trash"></i>
                            </div>
                            <h3>Automatic Deletion</h3>
                            <p>All processed files are automatically cleared from your browser's memory when you close the page or navigate away.</p>
                        </div>
                    </div>

                    <div className="privacy-statement">
                        <i className="fa-solid fa-shield-halved"></i>
                        <p>
                            <strong>We physically cannot access your files.</strong> Since conversion happens entirely in your browser, we have no technical means to see, store, or access your images. This isn't just a promise - it's how the technology works.
                        </p>
                    </div>
                </section>

                {/* Browser Compatibility Section */}
                <section className="content-section compatibility-section" id="compatibility">
                    <h2>Works in All Modern Browsers</h2>
                    <p className="section-intro">
                        Our free HEIC to PNG converter is compatible with all modern web browsers on any device.
                    </p>

                    <div className="browsers-grid">
                        <div className="browser-card">
                            <i className="fa-brands fa-chrome"></i>
                            <h3>Chrome</h3>
                            <p>Fully Supported</p>
                        </div>
                        <div className="browser-card">
                            <i className="fa-brands fa-edge"></i>
                            <h3>Edge</h3>
                            <p>Fully Supported</p>
                        </div>
                        <div className="browser-card">
                            <i className="fa-brands fa-firefox-browser"></i>
                            <h3>Firefox</h3>
                            <p>Fully Supported</p>
                        </div>
                        <div className="browser-card">
                            <i className="fa-brands fa-safari"></i>
                            <h3>Safari</h3>
                            <p>Fully Supported</p>
                        </div>
                        <div className="browser-card">
                            <i className="fa-brands fa-opera"></i>
                            <h3>Opera</h3>
                            <p>Fully Supported</p>
                        </div>
                        <div className="browser-card">
                            <i className="fa-solid fa-globe"></i>
                            <h3>Others</h3>
                            <p>Most browsers supported</p>
                        </div>
                    </div>

                    <p className="compatibility-note">
                        <i className="fa-solid fa-circle-info"></i>
                        <strong>Tip:</strong> For the best experience, we recommend using the latest version of any major browser.
                    </p>
                </section>
            </div>
        </>
    );
}

export default HomePage;
