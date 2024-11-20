import React from 'react';
import { Card } from 'react-bootstrap';

const sentences: string[] = [
  '컴포넌트는 아이스크림 케이크 같다고 생각합니다.\n작은 단위로 컴포넌트 나누는 것을 좋아해서 재사용성과 확장성을 많이 생각합니다.\n특히 버튼과 모달을 좋아하며 디테일한 요소의 디자인을 일치시켜 전체적인 톤을 조절합니다.\n작은 컴포넌트들이 모여 하나의 큰 그림을 완성하는 게 즐겁습니다.',
  '어렸을 때 레고 만드는 것을 좋아했습니다\n프론트엔드 공부를 하면서 개발과 레고는 비슷하다고 생각했습니다\n설명서를 기반으로 조금씩 변형할 수 있는 레고처럼 개발도 공식 문서를 보며 다양하게 만들 수 있어 재밌습니다.\n공부하고 익숙한 만큼 원하는 바를 잘 표현할 수 있어 열심히 공부하고 있습니다.',
];

// 강조할 단어 배열
const highlightWords = ['아이스크림 케이크', '재사용성', '확장성', '레고', '설명서를 기반'];

export default function Sentence() {
  // 강조할 단어를 배경색으로 처리하는 함수
  const highlightedText = (sentence: string) => {
    let modifiedSentence = sentence;
    // '레고'는 첫 번째 등장만 강조하도록 flag 설정
    let firstLego = false;

    highlightWords.forEach((word) => {
      const regExp = new RegExp(word, 'g'); // 단어가 여러 번 등장할 경우를 대비한 정규 표현식

      modifiedSentence = modifiedSentence.replace(regExp, (match) => {
        if (word === '레고' && !firstLego) {
          // '레고'의 첫 번째 등장만 배경색으로 강조
          firstLego = true;
          return `<span style="background-color: #ffeb99">${match}</span>`;
        } else if (word !== '레고') {
          // '레고' 외의 단어는 모두 강조
          return `<span style="background-color: #ffeb99">${match}</span>`;
        }
        return match;
      });
    });

    return modifiedSentence;
  };

  return (
    <div className="sentence-container">
      <Card style={{ border: 'none' }}>
        <Card.Body style={{ width: "750px", fontSize: "17px" }}>
          {sentences.map((sentence, index) => (
            <>
                <div
                key={index}
                dangerouslySetInnerHTML={{ __html: highlightedText(sentence) }} 
                />
                <br></br>
            </>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
