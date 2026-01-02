import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-page">
            <div className="container">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: January 1, 2026</p>

                <section className="privacy-section">
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Fast N Friendly C-Stores ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
                        use our mobile application, or visit our physical store locations.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>2. Information We Collect</h2>
                    <p>We collect information that you strictly provide to us or that is automatically collected when you use our services:</p>
                    <ul>
                        <li><strong>Personal Data:</strong> Name, email address, phone number, and payment information when you sign up for rewards or make a purchase.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and page views.</li>
                        <li><strong>Location Data:</strong> Geolocation information if you use our store locator features.</li>
                        <li><strong>Employment Data:</strong> Information submitted via our careers page, including resumes and employment history.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>3. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our services.</li>
                        <li>Manage your "Fast N Friendly Rewards" account.</li>
                        <li>Process job applications and employment inquiries.</li>
                        <li>Send you promotional emails, newsletters, and special offers (opt-out available).</li>
                        <li>Prevent fraud and ensure the security of our store and digital platforms.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>4. Sharing Your Information</h2>
                    <p>
                        We do not sell your personal information. We may share information with strictly selected third-party vendors
                        who perform services for us (e.g., payment processing, data analysis, email delivery) and who are bound by confidentiality obligations.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>5. Cookies and Tracking</h2>
                    <p>
                        We use cookies and similar tracking technologies to track the activity on our web services and hold certain information.
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <strong>Email:</strong> privacy@fastnfriendly.com
                        <br />
                        <strong>Phone:</strong> (555) 123-4567
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
