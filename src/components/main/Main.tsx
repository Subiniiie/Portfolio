import { useState, useEffect } from 'react';
import '../../styles/components/main/Main.css';

const Main = () => {
  const firstJabSentence: string = 'Front-end';
  const secondJabSentence: string = 'Portfolio';
  
  // 상태 관리
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showFourthText, setShowFourthText] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    const targetElement = document.querySelector(`#${sectionId}`) as HTMLElement;
    if (targetElement) {
      const location = targetElement.offsetTop;
      console.log('y좌표', location);
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.log('y좌표 없음');
    }
  };

  useEffect(() => {
    // main-job-container 텍스트를 2초 후에 표시
    const timer1 = setTimeout(() => setShowFirstText(true), 500);

    // main-title-container 안의 각 <div> 텍스트를 2초 간격으로 표시
    const timer2 = setTimeout(() => setShowSecondText(true), 1000);
    const timer3 = setTimeout(() => setShowThirdText(true), 2000);
    const timer4 = setTimeout(() => setShowFourthText(true), 4000);

    // 타이머 정리
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-job-container">
          {showFirstText && (
            <>
              <p className="main-job-text">{firstJabSentence}</p>
              <p className="main-job-text-second">{secondJabSentence}</p>
            </>
          )}
        </div>
        <div className="main-title-container">
          {showSecondText && (
            <div className="main-title-text">
              안녕하세요. 저는 <span className="main-title-text-highlight-name">박수빈</span>입니다.
            </div>
          )}
          {showThirdText && (
            <div className={`main-title-second ${showThirdText ? 'show-text' : ''}`}>
              <p className="main-title-text">문헌정보학을 전공했고</p>
              <span className="main-title-text">
                <span className="main-title-text-highlight-front">웹과 앱 만드는 것</span>에 관심이 있습니다.
              </span>
            </div>
          )}
          {showFourthText && (
            <div className={`main-title-third ${showFourthText ? 'show-text' : ''}`}>
              <span className="main-title-text">
                <span className="main-title-text-highlight-keyword">도전</span>을 좋아하고{' '}
                <span className="main-title-text-highlight-keyword">경험</span>의 힘을 믿는
              </span>
              <p className="main-title-text">프론트엔드 개발자입니다.</p>
            </div>
          )}
        </div>
        <div
          className="scroll-container"
          onClick={() => handleScrollTo('aboutme')}
          style={{ cursor: 'pointer' }}
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
        <div className="main-black-container"></div>
      </div>
      <div id="aboutme" style={{ marginBottom: '40px' }} />
    </>
  );
};
export default Main;
