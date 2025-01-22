import React from 'react';
import "./privacy.css";

const PrivacyPolicy = () => {
    return (
        <div className='privacy'>
            <h1>Privacy Policy</h1>
            <div className="privacy-content">
                {/* Information Collection and Use */}
                <h2>1. Information Collection and Use</h2>
                <p>
                    At JigsawPlanet.online, we value your privacy and are committed to protecting your personal information. 
                    When you use our website, we may collect the following types of information:
                </p>
                <ul>
                    <li><strong>Personal Information:</strong> Such as your name, email address, or other details that you voluntarily provide to us when creating an account or contacting us.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and interact with our website, including IP address, browser type, and pages visited.</li>
                </ul>
                <p>
                    This information is collected to improve your user experience, provide personalized services, and ensure the functionality of our platform.
                </p>

                {/* Cookies */}
                <h2>2. Cookies</h2>
                <p>
                    Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that allow us to:
                </p>
                <ul>
                    <li>Remember your preferences and settings.</li>
                    <li>Analyze website traffic and user behavior.</li>
                    <li>Provide a smoother, more customized experience.</li>
                </ul>
                <p>
                    You have the option to disable cookies through your browser settings; however, doing so may limit some features of the website.
                </p>

                {/* Links to Other Websites */}
                <h2>3. Links to Other Websites</h2>
                <p>
                    Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices or content of those websites.
                </p>
                <ul>
                    <li>We encourage you to review the privacy policies of any third-party sites you visit.</li>
                    <li>We cannot guarantee the security or safety of your information once you leave our website.</li>
                </ul>

                {/* Services */}
                <h2>4. Services</h2>
                <p>
                    By using our services, you agree to the terms outlined in this Privacy Policy. We continuously strive to improve our services and may update this policy from time to time. 
                </p>
                <p>
                    If you have any questions or concerns about how your data is handled, please contact us directly through our support channels.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

