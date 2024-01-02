import React, {useEffect, useState} from 'react';
import style from './MyProjects.module.css';


const MyProjects = ({projects}) => {

    const [activeBlock, setActiveBlock] = useState(0);
    const [projectData] = useState([
        {id: 5, title: 'WebShop', technologies: 'React JS, Redux JS', description: 'React Js application, shop-hunting', link: 'https://github.com/demchko/Shop', site: 'https://shop-sand-zeta.vercel.app/'},
        {id: 12, title: 'Film Searching', technologies: 'React JS, TypeScript, Work wuth API', description: 'React JS Application for searching film, seris and getting information about them', link: 'https://github.com/demchko/FilmSearch', site: 'https://film-search-five.vercel.app/'},
        {id: 1, title: 'Delivery Shop', technologies: 'React JS, Redux ToolKit, Chakra UI, Firebase', description: '💻A simple website for food delivery, with the possibility of registration and login, thanks to firebase, also the goods that were added to the carts are added to localStorage, so that the data is not lost after the page is closed. ❇️Also, the project allowed me to practice with the useContext() hook, I used it to get and change the state of the modal window', link: 'https://github.com/demchko/delivery-shop'},
        {id: 2, title: 'Meditation App', technologies: 'HTML, CSS, Pure JS', description: '💻A simple website for meditation. You can set a timer and start meditating and then hear a calm melody', link: 'https://github.com/demchko/Meditation-Timer', site: 'https://meditation-timer-amber.vercel.app/'},
        {id: 3, title: 'Cards Memory', technologies: 'HTML, CSS, Pure JS', description: 'A simple application written in pure JS, where the user can enter a word and its translation. Then they can interact with it and memorise it', link: 'https://github.com/demchko/Translate-Cards-Memory'},
        {id: 3, title: 'Tasks Manager', technologies: 'HTML, CSS, TypeScript, Redux, React JS, Chakra UI', description: 'A login application where you can create and edit tasks for yourself and other users. The project uses TypeScript for typing and Redux', link: 'https://github.com/demchko/Task_Manager', site: 'https://task-manager-iota-lime.vercel.app/main'},
    ])

    const handleTextClick = (index) => {
        setActiveBlock(index === activeBlock ? null : index);
    };

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (projects.current) {
                const rect = projects.current.getBoundingClientRect();
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
        <div className={style.container} ref={projects} >
            {projectData.map((project, index) => (
                    activeBlock === index && (
                    <div
                        className={`${style.block} ${isActive ? style.active : ''}`}
                        key={index}
                    >
                        <div className={style.text}>
                            <h1>{project.title}</h1>
                            <p className={style.textBlock} >
                                Main technologies - {project.technologies}
                                <br />
                                {project.description}
                            </p>
                            <div style={{display: 'flex', alignItems: 'center'}} >
                                <a href={project.link} target='_blank' className={style.link}>Github</a>
                                {
                                    project.site && <a style={{marginLeft: '5px'}} href={project.site} target='_blank' className={style.link} >WebSite</a>
                                }
                            </div>
                        </div>
                    </div>
                    )
            ))}
            <div className={`${style.projects} ${isActive ? style.active : ''}`}>
                <h1>Projects</h1>
                <div className={style.list}>
                    {projectData.map((project, index) => (
                        <li className={activeBlock === index ? style.activeText : ''} key={index} onClick={() => handleTextClick(index)}>
                            {project.title}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MyProjects;