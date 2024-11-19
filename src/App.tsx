import Header from './components/header/Header'
import MainView from './pages/mainView.tsx'
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
      <MainView />
      <Footer />
    </>
  )
}

export default App
