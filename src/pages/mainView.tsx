import Main from "../components/main/Main";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/skills/Skills";
import Project from "../components/project/Project.tsx";
import Career from "../components/career/Career";


const MainView = () => {
    return (
        <>
            <div id="main">
                <Main />
            </div>
            <div id="aboutme">
                <AboutMe />
            </div>
            <div id="career">
                <Career />
            </div>
            <div id="skills">
                <Skills /> 
            </div>
            <div id="project">
                <Project />
            </div>
        </>
    )


}

export default MainView;