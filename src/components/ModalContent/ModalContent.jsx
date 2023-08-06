import React, { useState, useEffect } from 'react';

const ModalContent = ({ text }) => {
    const [animatedText, setAnimatedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const animationDuration = 100; // тривалість анімації (у мілісекундах)

    useEffect(() => {
        const animateText = setInterval(() => {
            if (currentIndex === text.length) {
                clearInterval(animateText);
                return;
            }

            setAnimatedText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, animationDuration);

        return () => clearInterval(animateText);
    }, [currentIndex, text]);

    return (
        <p>{animatedText}</p>
    );
};

export default ModalContent;
