import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css';

const AboutMe = ({ about }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (about.current) {
                const rect = about.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const isVisible = rect.top < windowHeight && rect.bottom > 0;
                setIsActive(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Викликаємо один раз при завантаженні компонента

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container} ref={about}>
            <img className={`${styles.img} ${isActive ? styles.active : ''}`} src='/photo.jpg' />
            <p className={`${styles.text} ${isActive ? styles.active : ''}`}> <span>I</span>'ve been into programming since I was a kid, focusing on front-end development for about 2 years now. I've also worked with teams on projects, so I get teamwork. I love learning new stuff and creating my own things. Making clean code and getting things done efficiently matters to me.
                <br /><br /><span>Outside</span> of coding, I'm really into basketball and soccer. These sports teach me teamwork and thinking on my feet. And when I'm not coding or playing, you can catch me reading a good book. It's my way of exploring new ideas and learning.
            </p>
        </div>
    );
};

export default AboutMe;
