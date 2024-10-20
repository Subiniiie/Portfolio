import { Button } from "react-bootstrap"

const buttons: string[] = ['깃허브', '티스토리'];
const webSiteUrl: string[] = ['https://github.com/Subiniiie', 'https://subiniiie.tistory.com/']

export default function ProfileButton() {
  const goMyWebSite = function(index: number) {
    window.open(webSiteUrl[index], '_blank');
  };

  return (
    <div className="btn-container">
      {buttons.map((button, index) => (
        <Button 
          key={index}
          className="btn-box"
          variant="primary" 
          as="button"
          onClick={() => goMyWebSite(index)}
        >
          {button}
        </Button>
      ))}
    </div>
  )
}
