import Header from './components/header/Header'
import Main from './components/main/Main.tsx'
import AboutMe from './components/aboutMe/AboutMe.tsx'
import Career from './components/career/Career.tsx'
import Skills from './components/skills/Skills.tsx'
import Project from './components/project/Project.tsx'
import Footer from './components/footer/Footer.tsx'
import { createGlobalStyle } from 'styled-components'
import './App.css'

const GlobalStyle = createGlobalStyle`
  body {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      // background: rgba(0, 0, 0, 1);
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }
  }
`
function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <AboutMe />
      <Career />
      <Skills />
      <Project />
      <Footer />
    </>
  )
}

export default App
