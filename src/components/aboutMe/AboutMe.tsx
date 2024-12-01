import ProfileCard from './ProfileCard';
import Sentence from './Sentence';
import ProfileButton from './ProfileButton';
import Card from 'react-bootstrap/Card';
import '../../styles/components/aboutme/AboutMe.css'

export default function AboutMe() {

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

 
  return (
    <div className="about-me-container">
      <h1 className="aboutme-title-text">About Me</h1>
      <div className="about-me-box">
        <div>
          <ProfileCard />
        </div>
        <div className="my-main-container">
          <Card style={{ width: '15rem', border: 'none'}} className="profile-card">
            <img 
              src="profile2.jpg" 
              onContextMenu={handleContextMenu}
            />
          </Card>
          <div className="my-main-info">
            <Sentence />
            <ProfileButton />
          </div>  
        </div>
      </div>
    </div>
  )
};
