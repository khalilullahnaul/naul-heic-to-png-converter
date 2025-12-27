import React from 'react';
import { Helmet } from 'react-helmet-async';
import './PrivacyPage.css';

function PrivacyPage() {
    const lastUpdated = "December 27, 2025";

    return (
        <>
            <Helmet>
                <title>Privacy Policy - Free HEIC to PNG Converter | Naul</title>
                <meta name="description" content="Privacy policy for Naul HEIC to PNG Converter. Learn how we protect your privacy with 100% client-side processing. No data collection, no tracking, no storage." />
                <meta name="keywords" content="privacy policy, heic to png converter privacy, secure converter, private image conversion" />
                <link rel="canonical" href="https://heic-to-png.naul.dev/privacy" />

                <meta property="og:title" content="Privacy Policy - Free HEIC to PNG Converter" />
                <meta property="og:description" content="Our commitment to your privacy. All conversions happen locally in your browser." />
                <meta property="og:url" content="https://heic-to-png.naul.dev/privacy" />
            </Helmet>

            <div className="page-container">
                <div className="page-header">
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: {lastUpdated}</p>
                </div>

                <div className="content-section card">
                    <h2>Overview</h2>
                    <p>
                        At Naul HEIC to PNG Converter, your privacy is our top priority. This privacy policy explains how our <strong>free HEIC to PNG converter</strong> handles your data (spoiler: we don't handle it at all).
                    </p>
                    <div className="highlight-box">
                        <i className="fa-solid fa-shield-halved"></i>
                        <p><strong>Key Point:</strong> All conversions happen entirely in your browser. Your images never leave your device, and we never see, store, or have access to your files.</p>
                    </div>
                </div>

                <div className="content-section card">
                    <h2>1. Data Collection and Processing</h2>

                    <h3>Your Images</h3>
                    <ul>
                        <li>All HEIC to PNG conversions are performed <strong>locally in your web browser</strong> using JavaScript</li>
                        <li>Your images are <strong>never uploaded</strong> to our servers</li>
                        <li>We have <strong>no access</strong> to your files</li>
                        <li>Files are processed in your device's memory and are <strong>automatically cleared</strong> when you close the application</li>
                        <li>No files are stored on our servers, in cookies, or in local storage</li>
                    </ul>

                    <h3>Website Analytics</h3>
                    <p>
                        We may use basic analytics tools to understand how visitors use our site. This may include:
                    </p>
                    <ul>
                        <li>Anonymous page visit statistics</li>
                        <li>Browser type and version</li>
                        <li>Device type (desktop, mobile, tablet)</li>
                        <li>Approximate geographic location (country/city level)</li>
                        <li>Referral source (how you found our site)</li>
                    </ul>
                    <p><strong>Important:</strong> Analytics data is completely anonymous and cannot be used to identify individual users. No connection is made between analytics data and your converted files.</p>
                </div>

                <div className="content-section card">
                    <h2>2. How the Free HEIC to PNG Converter Works</h2>
                    <p>
                        Understanding our technology helps you understand why your privacy is guaranteed:
                    </p>
                    <ol>
                        <li>You select HEIC files from your device</li>
                        <li>Files are loaded into your browser's memory</li>
                        <li>Conversion happens using client-side JavaScript (the heic2any library)</li>
                        <li>Converted PNG files are created in your browser</li>
                        <li>You download the PNG files directly from your browser</li>
                        <li>All data is cleared from memory when you close the page</li>
                    </ol>
                    <p>
                        <strong>No server upload or processing occurs at any point.</strong> Your files stay on your device from start to finish.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>3. Cookies and Local Storage</h2>
                    <p>
                        Our HEIC to PNG converter does not use cookies to store your images or personal data. We may use:
                    </p>
                    <ul>
                        <li><strong>Essential cookies:</strong> For basic website functionality</li>
                        <li><strong>Analytics cookies:</strong> To understand website usage (anonymous only)</li>
                    </ul>
                    <p>
                        No personally identifiable information is stored in cookies. Your converted images are never stored in cookies or local storage.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>4. Third-Party Services</h2>
                    <p>
                        Our free HEIC to PNG converter may use the following third-party services:
                    </p>
                    <ul>
                        <li><strong>Hosting Provider:</strong> To serve the website files</li>
                        <li><strong>Analytics:</strong> To collect anonymous usage statistics</li>
                        <li><strong>CDN (Content Delivery Network):</strong> To deliver website assets faster</li>
                    </ul>
                    <p>
                        <strong>Important:</strong> None of these services have access to your HEIC or PNG files because all conversion happens in your browser.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>5. Data Security</h2>
                    <p>
                        Since your files never leave your device, they are as secure as your own computer or phone. We implement industry-standard security measures for:
                    </p>
                    <ul>
                        <li>Secure HTTPS connection for all website traffic</li>
                        <li>Regular security updates to our codebase</li>
                        <li>No server-side file storage or processing</li>
                    </ul>
                    <div className="highlight-box">
                        <i className="fa-solid fa-lock"></i>
                        <p><strong>Maximum Security:</strong> The most secure way to convert files is to process them locally, which is exactly what our converter does.</p>
                    </div>
                </div>

                <div className="content-section card">
                    <h2>6. Children's Privacy</h2>
                    <p>
                        Our free HEIC to PNG converter is suitable for all ages. Since we don't collect any personal information or images, there are no special considerations for children's use of the service.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>7. Your Rights</h2>
                    <p>
                        Since we don't collect or store your data:
                    </p>
                    <ul>
                        <li>There is no data for you to access, modify, or delete</li>
                        <li>You have complete control over your files at all times</li>
                        <li>You can use our converter with confidence knowing your privacy is protected</li>
                    </ul>
                </div>

                <div className="content-section card">
                    <h2>8. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>9. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our free HEIC to PNG converter, please contact us:
                    </p>
                    <ul>
                        <li>GitHub: <a href="https://github.com/khalilullahnaul" target="_blank" rel="noopener noreferrer">@khalilullahnaul</a></li>
                    </ul>
                </div>

                <div className="content-section card highlight-section">
                    <h2>Summary</h2>
                    <p><strong>TL;DR:</strong> Your HEIC files are converted to PNG entirely in your browser. We never see, store, or have access to your images. Your privacy is 100% guaranteed because we physically cannot access your files.</p>
                    <a href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '1rem' }}>
                        Start Converting Securely
                    </a>
                </div>
            </div>
        </>
    );
}

export default PrivacyPage;
