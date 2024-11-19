import { useState, useEffect } from 'react'
import '../../styles/components/main/Main.css'

interface MainProps {
  id: string;
}

export default function Main( id ) {
  const [name, setName] = useState<string>('');
  const myName: string = '프론트엔드 개발자를 꿈꾸는 박수빈입니다.';
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
      }, 120);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count]);


  return (
    <div className="main-container">
      {/* <MainBackground /> */}
        <p className="main-text main-job-text">Front-end Portfolio</p>
          <div className="main-title-container">
            <p className="main-text main-title-text">안녕하세요.</p>
              <p className="main-text main-title-text">{name}</p>
        </div>
        <div className="scroll-container">
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
  )
}
