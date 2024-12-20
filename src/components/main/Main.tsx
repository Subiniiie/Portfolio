import { useState, useEffect } from 'react'
import '../../styles/components/main/Main.css'

const Main = () => {
  const [name, setName] = useState<string>('');
  const myName: string = '도전을 좋아하고 경험의 힘을 믿는 프론트엔드 개발자 박수빈입니다.';
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
      const typingInterval = setInterval(() => {
        setName((prev) => {
          if (count < myName.length) {
            const result = prev + myName[count];
            setCount(count + 1);
            return result;
          } else {
            clearInterval(typingInterval);
            return prev;
          }
        });
      }, 110);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count]);

  const handleScrollTo = (sectionId: string) => {
    const targetElement = document.querySelector(`#${sectionId}`) as HTMLElement;
    if (targetElement) {
      const location = targetElement.offsetTop;
      console.log('y좌표', location);
      targetElement.scrollIntoView({
        behavior:'smooth',
        block: 'start',
      });
      } else {
        console.log('y좌표 없음')
      }
  };


  return (
    <>
      <div className="main-container">
          <p className="main-text main-job-text">Front-end Portfolio</p>
            <div className="main-title-container">
              <p className="main-text main-title-text">안녕하세요.</p>
                <p className="main-text main-title-text">{name}</p>
          </div>
          <div 
            className="scroll-container"
            onClick={() => handleScrollTo("aboutme")}
            style={{ cursor: "pointer" }}
          >
            <p className="scroll-text">Scroll Down</p>
            <div className="scroll-btn">
              <div className="btn-motion6">
                <span></span>
                <span></span>
                <span></span>      
              </div>
            </div>
          </div>
      </div>
      <div id="aboutme" style={{ marginBottom: "40px" }}/>
    </>
  )
}

export default Main;
