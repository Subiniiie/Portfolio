import { Fragment } from 'react/jsx-runtime';
import Card from 'react-bootstrap/Card';


const sentences: string[] = [
    '컴포넌트는 아이스크림 케이크 같다고 생각합니다.\n작은 단위로 컴포넌트 나누는 것을 좋아해서 재사용성과 확장성을 많이 생각합니다.\n특히 버튼과 모달을 좋아하며 디테일한 요소의 디자인을 일치시켜 전체적인 톤을 조절합니다.\n작은 컴포넌트들이 모여 하나의 큰 그림을 완성하는 게 즐겁습니다.',
    '어렸을 때 레고 만드는 것을 좋아했습니다\n프론트엔드 공부를 하면서 개발과 레고는 비슷하다고 생각했습니다\n설멍서를 기반으로 조금씩 변형할 수 있는 레고처럼 개발도 공식 문서를 보며 다양하게 만들 수 있어 재밌습니다.\n공부하고 익숙한 만큼 원하는 바를 잘 표현할 수 있어 열심히 공부하고 있습니다.',
];

export default function Sentence() {
  return (
    <div className="sentence-container">
    <Card style={{ border: 'none'}}>
    <Card.Body>
        {sentences.map((sentence, index) => (
            <Fragment key={index}>
                {sentence.split('\n').map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                        {line}
                        <br />
                    </Fragment>
                ))}
                {index < sentences.length - 1 && <br />}
            </Fragment>
        ))}
    </Card.Body>
  </Card>
  </div>

  )
}
