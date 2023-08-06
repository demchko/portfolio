import React, {useEffect, useRef, useState} from 'react';
import style from './Main.module.css';

const Main = () => {

    const telegramLink = 'https://t.me/artem_dmchk';
    const main = useRef(null)
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (main.current) {
                const rect = main.current.getBoundingClientRect();
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
        <div className={style.main} ref={main} >
            <div className={style.container} >
                <a className={`${style.link} ${isActive ? style.active : ''}`} href={telegramLink} target='_blank' >Chat with me</a>
                <h1 className={style.text} >Hi, I'm <span>Artem</span><br />Front-End <span>React</span> Developer</h1>
            </div>
        </div>
    );
};

export default Main;