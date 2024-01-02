import React, {useEffect, useRef, useState} from 'react';
import './global.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutMe from "./components/AboutMe/AboutMe";
import Stack from "./components/Stack/Stack";
import Modal from "./components/Modal/Modal";
import MyProjects from "./components/MyProjects/MyProjects";
import Contact from "./components/Contact/Contact";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Todo from "./pages/Todo/Todo";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/todo' element={<Todo />} />
            </Routes>
        </div>
    );
};

export default App;