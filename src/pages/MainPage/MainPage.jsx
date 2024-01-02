import React, {useEffect, useRef, useState} from 'react';
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import AboutMe from "../../components/AboutMe/AboutMe";
import Stack from "../../components/Stack/Stack";
import MyProjects from "../../components/MyProjects/MyProjects";
import Contact from "../../components/Contact/Contact";

const MainPage = () => {

    const [modalOpen, setModalOpen] = useState(true);
    const modalText = 'Artem Demchko';

    const aboutMeRef = useRef(null);
    const stackRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalOpen(false);
        }, modalText.length * 100 + 1000); // Закрити модалку після завершення анімації тексту

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <Modal  isOpen={modalOpen} text={modalText} />
            <Header about={aboutMeRef} stack={stackRef} projects={projectsRef} contact={contactsRef} />
            <Main />
            <AboutMe about={aboutMeRef}  />
            <Stack stack={stackRef} />
            <MyProjects projects={projectsRef} />
            <Contact contact={contactsRef} />
        </div>
    );
};

export default MainPage;