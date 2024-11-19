import Main from "../components/main/Main";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/skills/Skills";
import Project from "../components/project/Project.tsx";
import Career from "../components/career/Career";


const MainView = () => {
    return (
        <>
            <Main />
            <AboutMe />
            <Career />
            <Skills />
            <Project />
        </>
    )


}

export default MainView;