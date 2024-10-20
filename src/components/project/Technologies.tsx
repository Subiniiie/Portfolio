import Card from 'react-bootstrap/Card';

interface TechnologiesProps {
    technology: string;
}

export default function Technologies({technology}: TechnologiesProps) {
  return (
    <div className="technology-box">
        <Card body>{technology}</Card>
    </div>
  )
}
