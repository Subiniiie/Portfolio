import { Card } from "react-bootstrap"

const profileText: string[] = ['박수빈', '2001.02.27.', '010-4734-5987', 'subin57419@gmail.com']
const profileImage: string[] = ['user', 'birthday', 'telephone', 'email']

export default function ProfileCard() {
  return (
    <Card.Body className="my-info-container">
    {profileText.map((text, index) => (
        <Card.Text key={index}>
          <div className="my-info">
            <img src={`src/assets/${profileImage[index]}.svg`} className="icon" alt={text}/>
            <span className="profile-text">{text}</span>
          </div>
        </Card.Text>
    ))}
    </Card.Body>
  )
}
