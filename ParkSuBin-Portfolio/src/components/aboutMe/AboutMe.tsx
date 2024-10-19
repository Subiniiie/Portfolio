import { Fragment } from 'react/jsx-runtime';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../styles/components/aboutme/AboutMe.css'

export default function AboutMe() {
  const sentence1 : string = '어쩌구 저쩌구 구리구리 살랑살랑\n배가 고파요 알고리즘 풀어야 해요 하지만 그거 말고 다른 게 할 게 너무 많아요\n몸이 10개만 좋겠어요 그럼 다 침대에 누워있겠죠';
  const sentence2 : string = '어쩌구 저쩌구 구리구리 살랑살랑\n배가 고파요 알고리즘 풀어야 해요 하지만 그거 말고 다른 게 할 게 너무 많아요\n몸이 10개만 좋겠어요 그럼 다 침대에 누워있겠죠';
  return (
    <div className="about-me-container">
      <div className="about-me-box">
        <Card style={{ width: '15rem', border: 'none'}} className="profile-card">
          <Card.Img variant="top" src="public/profile.jpg" style={{ width: '175px', borderRadius: '50%', marginBottom: '25px' }}/>
          <Card.Body>
            <Card.Text>
              <img src="src/assets/user.svg" className="icon"></img>
              <span className="profile-text">박수빈</span>
            </Card.Text>
            <Card.Text>
              <img src="src/assets/birthday.svg" className="icon"></img>
              <span className="profile-text">2001. 02. 27.</span>
            </Card.Text>
            <Card.Text>
              <img src="src/assets/telephone.svg" className="icon"></img>
              <span className="profile-text">010-4734-5987</span>
            </Card.Text>
            <Card.Text>
              <img src="src/assets/email.svg" className="icon"></img>
              <span className="profile-text">subin57419@gmail.com</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="sentence-container">
        <Card style={{ border: 'none'}}>
          <Card.Body>

        {sentence1.split('\n').map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
  
          </Card.Body>
        </Card>
        <Card style={{ border: 'none'}}>
          <Card.Body>        {sentence2.split('\n').map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}</Card.Body>
        </Card>
        <div className="btn-container">
          <Button className="btn-box">깃허브</Button>
          <Button className="btn-box">티스토리</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
