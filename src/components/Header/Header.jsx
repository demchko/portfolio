import React, {useEffect, useState} from 'react';
import style from './Header.module.css';

const Header = ({about, stack, projects, contact}) => {

    const [menu] = useState([
        {id: 1, text: "About me", link: about},
        {id: 2, text: "Stack", link: stack},
        {id: 3, text: "My Projects", link: projects},
        {id: 4, text: "Contact with me", link: contact},
    ]);
    const [color, setColor] = useState(false);

    const scrollToPage = item => {
        item.link.current.scrollIntoView({ behavior: 'smooth' });
        if(item.link === contact){
            setColor(true);
        } else{
            setColor(false);
        }
    }

    const updateColorOnScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= 500) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", updateColorOnScroll);
        return () => {
            window.removeEventListener("scroll", updateColorOnScroll);
        };
    }, []);

    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setShowBurgerMenu(!showBurgerMenu);
    };

    return (
        <header className={color ? style.active : style.header}>
            <h1 className={style.logo}>A</h1>
            <div className={`${style.list} ${showBurgerMenu ? style.showMenu : ''}`}>
                {menu.map(item => (
                    <li onClick={() => scrollToPage(item)} className={style.text} key={item.id}>
                        {item.text}
                    </li>
                ))}
            </div>
            <div className={style.burgerMenu} onClick={toggleBurgerMenu}>
                <img style={{}} className={`burger-icon ${showBurgerMenu ? 'open' : ''}`} src='/menu.png' />
            </div>
        </header>

    );
};

export default Header;