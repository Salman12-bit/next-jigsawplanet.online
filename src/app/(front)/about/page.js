import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <h1 className='welcome-content'>Welcome to Jigsaw Planet</h1>
                <p>
                    At Jigsaw Planet, we are passionate about bringing joy and creativity to puzzle enthusiasts around the world. 
                    Our platform allows you to explore, create, and solve stunning jigsaw puzzles that cater to all ages and interests.
                </p>
                <p>
                    As a full-stack developer specializing in React.js, Next.js, and PHP, I have meticulously crafted this website to deliver
                    a seamless user experience, robust functionality, and lightning-fast performance.
                </p>
                <p>
                    Whether you are here to unwind, challenge your mind, or share your custom puzzles with others, Jigsaw Planet is 
                    designed to meet your needs and exceed your expectations. We sincerely appreciate your support and engagement with our platform!
                </p>
            </div>
        </div>
    );
};

export default About;