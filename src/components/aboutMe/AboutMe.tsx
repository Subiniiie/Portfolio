import ProfileCard from './ProfileCard';
import Sentence from './Sentence';
import ProfileButton from './ProfileButton';
import Card from 'react-bootstrap/Card';
import '../../styles/components/aboutme/AboutMe.css'

export default function AboutMe() {

 
  return (
    <div className="about-me-container">
      <div className="about-me-box">
        <Card style={{ width: '15rem', border: 'none'}} className="profile-card">
          <Card.Img 
            variant="top" src="profile.jpg" 
            style={{ width: '175px', height: '175px', borderRadius: '50%', marginBottom: '25px', objectFit: 'cover', objectPosition: 'center'}}
          />
          <ProfileCard />
        </Card>
        <div>
          <Sentence />
          <ProfileButton />
        </div>  
      </div>
    </div>
  )
};
