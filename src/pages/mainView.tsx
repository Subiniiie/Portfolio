import Main from "../components/main/Main";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/skills/Skills";
import Project from "../components/project/Project.tsx";
import Career from "../components/career/Career";
import { Route, Routes } from "react-router-dom";


const MainView = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/career" element={<Career />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            </Routes>
            <Main />
            <AboutMe />
            <Career />
            <Skills /> 
            <Project />
        </>
    )


}

export default MainView;