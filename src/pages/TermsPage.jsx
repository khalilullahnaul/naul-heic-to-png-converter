import React from 'react';
import { Helmet } from 'react-helmet-async';
import './TermsPage.css';

function TermsPage() {
    const lastUpdated = "December 27, 2025";

    return (
        <>
            <Helmet>
                <title>Terms of Service - Free HEIC to PNG Converter | Naul</title>
                <meta name="description" content="Terms of service for Naul HEIC to PNG Converter. Read our usage terms and guidelines for our free online image conversion tool." />
                <meta name="keywords" content="terms of service, heic to png converter terms, usage terms, image converter policy" />
                <link rel="canonical" href="https://heic-to-png.naul.dev/terms" />

                <meta property="og:title" content="Terms of Service - Free HEIC to PNG Converter" />
                <meta property="og:description" content="Terms of service for our free HEIC to PNG converter." />
                <meta property="og:url" content="https://heic-to-png.naul.dev/terms" />
            </Helmet>

            <div className="page-container">
                <div className="page-header">
                    <h1>Terms of Service</h1>
                    <p className="last-updated">Last Updated: {lastUpdated}</p>
                </div>

                <div className="content-section card">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Naul HEIC to PNG Converter (the "Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our <strong>free HEIC to PNG converter</strong>.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>2. Description of Service</h2>
                    <p>
                        Naul HEIC to PNG Converter provides a free, web-based tool for converting HEIC image files to PNG format. Key features include:
                    </p>
                    <ul>
                        <li>Client-side conversion (all processing happens in your browser)</li>
                        <li>No file uploads to servers</li>
                        <li>Batch conversion support</li>
                        <li>ZIP download functionality</li>
                        <li>Free and unlimited usage</li>
                    </ul>
                </div>

                <div className="content-section card">
                    <h2>3. Use License</h2>

                    <h3>Permitted Use</h3>
                    <p>You are granted a non-exclusive, non-transferable license to use our free HEIC to PNG converter for:</p>
                    <ul>
                        <li>Personal use</li>
                        <li>Commercial use</li>
                        <li>Educational purposes</li>
                        <li>Any lawful purpose</li>
                    </ul>

                    <h3>Restrictions</h3>
                    <p>You agree NOT to:</p>
                    <ul>
                        <li>Attempt to reverse engineer, decompile, or disassemble the Service</li>
                        <li>Use the Service to process illegal content</li>
                        <li>Attempt to overwhelm our servers with excessive automated requests</li>
                        <li>Remove or modify any copyright, trademark, or other proprietary notices</li>
                        <li>Use the Service in any way that violates applicable laws or regulations</li>
                        <li>Claim ownership of the Service or redistribute it as your own</li>
                    </ul>
                </div>

                <div className="content-section card">
                    <h2>4. User Responsibilities</h2>
                    <p>You are responsible for:</p>
                    <ul>
                        <li>The content of files you convert using our Service</li>
                        <li>Ensuring you have the right to convert and use the images</li>
                        <li>Complying with all applicable copyright and intellectual property laws</li>
                        <li>Using the Service in accordance with these Terms</li>
                    </ul>
                    <div className="highlight-box">
                        <i className="fa-solid fa-exclamation-triangle"></i>
                        <p><strong>Important:</strong> We do not monitor the content you convert because all processing happens locally in your browser. You are solely responsible for ensuring your use complies with all applicable laws.</p>
                    </div>
                </div>

                <div className="content-section card">
                    <h2>5. Intellectual Property</h2>
                    <p>
                        The Service, including its original content, features, and functionality, is owned by Khalilullah Naul and is protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                    <p>
                        <strong>Your Content:</strong> You retain all rights to the images you convert. We claim no ownership or rights to your HEIC or PNG files.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>6. Disclaimer of Warranties</h2>
                    <p>
                        The Service is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied, including but not limited to:
                    </p>
                    <ul>
                        <li>Warranties of merchantability</li>
                        <li>Fitness for a particular purpose</li>
                        <li>Non-infringement</li>
                        <li>Uninterrupted or error-free operation</li>
                        <li>Accuracy or reliability of results</li>
                    </ul>
                    <p>
                        We do not guarantee that:
                    </p>
                    <ul>
                        <li>The Service will meet your specific requirements</li>
                        <li>All HEIC files will convert successfully</li>
                        <li>Conversion quality will meet your expectations</li>
                        <li>The Service will be available at all times</li>
                    </ul>
                </div>

                <div className="content-section card">
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Khalilullah Naul and the Service shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                    </p>
                    <ul>
                        <li>Loss of data</li>
                        <li>Loss of profits</li>
                        <li>Loss of revenue</li>
                        <li>Loss of business opportunities</li>
                        <li>Service interruptions</li>
                    </ul>
                    <p>
                        Our total liability shall not exceed the amount you paid for the Service (which is $0, as the Service is free).
                    </p>
                </div>

                <div className="content-section card">
                    <h2>8. Indemnification</h2>
                    <p>
                        You agree to indemnify and hold harmless Khalilullah Naul, the Service, and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                    </p>
                    <ul>
                        <li>Your use of the Service</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any rights of another party</li>
                        <li>The content you convert using the Service</li>
                    </ul>
                </div>

                <div className="content-section card">
                    <h2>9. Service Availability</h2>
                    <p>
                        We strive to provide continuous access to our free HEIC to PNG converter, but we do not guarantee:
                    </p>
                    <ul>
                        <li>24/7 availability</li>
                        <li>Uninterrupted service</li>
                        <li>Error-free operation</li>
                    </ul>
                    <p>
                        We reserve the right to:
                    </p>
                    <ul>
                        <li>Modify or discontinue the Service at any time</li>
                        <li>Temporarily suspend access for maintenance</li>
                        <li>Implement usage limits if necessary</li>
                    </ul>
                </div>

                <div className="content-section card">
                    <h2>10. Third-Party Libraries</h2>
                    <p>
                        Our Service uses open-source libraries, including:
                    </p>
                    <ul>
                        <li><strong>heic2any:</strong> For HEIC to PNG conversion</li>
                        <li><strong>React:</strong> For the user interface</li>
                        <li><strong>JSZip:</strong> For ZIP file creation</li>
                    </ul>
                    <p>
                        These libraries are subject to their own licenses and terms of use.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>11. Privacy</h2>
                    <p>
                        Your use of the Service is also governed by our <a href="/privacy">Privacy Policy</a>. Please review it to understand how we handle data (spoiler: we don't collect your images).
                    </p>
                </div>

                <div className="content-section card">
                    <h2>12. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page with an updated "Last Updated" date. Your continued use of the Service after changes constitutes acceptance of the new terms.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>13. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with applicable international laws, without regard to conflict of law provisions.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>14. Severability</h2>
                    <p>
                        If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                    </p>
                </div>

                <div className="content-section card">
                    <h2>15. Contact Information</h2>
                    <p>
                        If you have questions about these Terms of Service, please contact:
                    </p>
                    <ul>
                        <li>GitHub: <a href="https://github.com/khalilullahnaul" target="_blank" rel="noopener noreferrer">@khalilullahnaul</a></li>
                    </ul>
                </div>

                <div className="content-section card highlight-section">
                    <h2>Summary</h2>
                    <p><strong>In Plain English:</strong> Use our free HEIC to PNG converter responsibly and legally. We provide the tool as-is with no guarantees. You're responsible for what you convert. We respect your privacy, and all conversion happens in your browser.</p>
                    <a href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '1rem' }}>
                        Start Converting
                    </a>
                </div>
            </div>
        </>
    );
}

export default TermsPage;
