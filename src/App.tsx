import Header from './components/header/Header'
import MainView from './pages/mainView.tsx'
import Main from './components/main/Main.tsx'
import AboutMe from './components/aboutMe/AboutMe.tsx'
import Career from './components/career/Career.tsx'
import Skills from './components/skills/Skills.tsx'
import Project from './components/project/Project.tsx'
import Footer from './components/footer/Footer.tsx'
import { createGlobalStyle } from 'styled-components'
import './App.css'
import { Route, Routes } from 'react-router-dom'

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
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/career" element={<Career />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
      </Routes>        
      <Footer />
    </>
  )
}

export default App
