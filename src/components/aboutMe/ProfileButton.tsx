// import { Button } from "react-bootstrap"

const buttons: string[] = ['깃허브', '티스토리'];
const webSiteUrl: string[] = ['https://github.com/Subiniiie', 'https://subiniiie.tistory.com/']

export default function ProfileButton() {

  return (
    <div className="btn-container">
      {buttons.map((button, index) => (
        <div key={index}>
          <span>{button} : </span>
          <span>
            <a 
              href={webSiteUrl[index]}
              target="_blank"
            >
              {webSiteUrl[index]}
            </a>
          </span>
        </div>
      ))}
    </div>
  )
}
