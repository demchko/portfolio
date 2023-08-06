import React, {useEffect, useState} from 'react';
import style from './Stack.module.css';

const Stack = ({stack}) => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (stack.current) {
                const rect = stack.current.getBoundingClientRect();
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
        <div className={style.container} ref={stack} >
            <div className={`${style.textContainer1} ${isActive ? style.active : ''}`} >
                <p  className={style.text}  >JavaScript</p>
                <p  className={style.text}  >React JS</p>
                <p  className={style.text}  >Redux JS</p>
                <p  className={style.text}  >TypeScript</p>
            </div>
            <img className={`${style.img} ${isActive ? style.active : ''}`} src='/logo512.png' />
            <div className={`${style.textContainer2} ${isActive ? style.active : ''}`} >
                <p className={style.text} >HTML</p>
                <p  className={style.text}  >CSS</p>
                <p  className={style.text}  >Chakra UI</p>
                <p  className={style.text}  >Firebase</p>
            </div>
        </div>
    );
};

export default Stack;