import { Fragment } from 'react/jsx-runtime';
import Card from 'react-bootstrap/Card';


const sentences: string[] = [
    '어쩌구저쩌구 구리구리 쏼라쏼라\n배가 고파요 알고리즘 풀어야해요 하지만 그거 말고 다른 할 일도 많아요\n자고 싶어요 쉬고 싶어요 침대에 눕고 싶어요\n몸이 10개면 좋겠어요 다 침대에 누워있겠죠',
    '어쩌구저쩌구 구리구리 쏼라쏼라\n배가 고파요 알고리즘 풀어야해요 하지만 그거 말고 다른 할 일도 많아요\n자고 싶어요 쉬고 싶어요 침대에 눕고 싶어요\n몸이 10개면 좋겠어요 다 침대에 누워있겠죠',
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
