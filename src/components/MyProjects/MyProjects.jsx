import React, {useEffect, useState} from 'react';
import style from './MyProjects.module.css';


const MyProjects = ({projects}) => {

    const [activeBlock, setActiveBlock] = useState(0);
    const [projectData] = useState([
        {id: 1, title: 'Delivery Shop', technologies: 'React JS, Redux ToolKit, Chakra UI, Firebase', description: '💻A simple website for food delivery, with the possibility of registration and login, thanks to firebase, also the goods that were added to the carts are added to localStorage, so that the data is not lost after the page is closed. ❇️Also, the project allowed me to practice with the useContext() hook, I used it to get and change the state of the modal window', link: 'https://github.com/demchko/delivery-shop'},
        {id: 2, title: 'Calendar', technologies: 'HTML, CSS, Pure JS', description: '💻A simple website for food delivery, with the possibility of registration and login, thanks to firebase, also the goods that were added to the carts are added to localStorage, so that the data is not lost after the page is closed. ❇️Also, the project allowed me to practice with the useContext() hook, I used it to get and change the state of the modal window', link: 'https://github.com/demchko/delivery-shop'},
        {id: 3, title: 'Cards Memory', technologies: 'HTML, CSS, Pure JS', description: 'A simple application written in pure JS, where the user can enter a word and its translation. Then they can interact with it and memorise it', link: 'https://github.com/demchko/Translate-Cards-Memory'},
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
                            <a href={project.link} target='_blank' className={style.link}>Github</a>
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