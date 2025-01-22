import React from 'react';
import "./term.css";

const TermofService = () => {
    return (
        <div className='term'>
            <h1>Terms of Service</h1>
            <div className="terms-content">
                {/* Basic Term */}
                <h2>1. Basic Terms</h2>
                <p>
                    By accessing and using this website, you agree to comply with and be bound by these Terms of Service. 
                    If you disagree with these terms, we kindly request that you refrain from using our website.
                </p>

                {/* Irrelevant Content Policy */}
                <h2>2. Irrelevant Content Policy</h2>
                <p>
                    To ensure the quality and relevance of our website:
                </p>
                <ul>
                    <li>Do not post or upload irrelevant, offensive, or inappropriate content. This includes content that is misleading, defamatory, harmful, or unrelated to the purpose of the platform.</li>
                    <li>We reserve the right to remove any content deemed irrelevant or harmful to our website's reputation and user experience without prior notice.</li>
                </ul>

                {/* Content License */}
                <h2>3. Content License</h2>
                <p>
                    All content on this website is licensed exclusively to JigsawPlanet.online. 
                    This includes text, images, graphics, and other media displayed or shared on the platform.
                </p>
                <ul>
                    <li>You are granted a limited, non-exclusive license to permit and use the content for personal, non-commercial purposes.</li>
                    <li>Reproduction, modification, or redistribution of content without prior written consent from JigsawPlanet.online is prohibited.</li>
                    <li>Unauthorized use of licensed content may result in legal action.</li>
                </ul>

                {/* Copyright */}
                <h2>4. Copyright Notice</h2>
                <p>
                    All rights to the content, trademarks, logos, and intellectual property displayed on JigsawPlanet.online are reserved and protected under copyright laws.
                </p>
                <ul>
                    <li>The website content may not be copied, reproduced, or used in any way without explicit permission from JigsawPlanet.online.</li>
                    <li>Any attempt to infringe on the copyrights or intellectual property of JigsawPlanet.online will be met with legal enforcement actions.</li>
                    <li>If you believe any content on the site violates copyright, you may contact us for review and resolution.</li>
                </ul>
            </div>
        </div>
    );
};

export default TermofService;
