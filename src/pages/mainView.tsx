import Main from "../components/main/Main";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/skills/Skills";
import Project from "../components/project/Project.tsx";
import Career from "../components/career/Career";


const MainView = () => {
    return (
        <>
            <Main id="1" />
            <AboutMe id="2"/>
            <Career id="3" />
            <Skills id="4" /> 
            <Project id="5" />
        </>
    )


}

export default MainView;