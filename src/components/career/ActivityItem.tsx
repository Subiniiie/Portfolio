import 'bootstrap/dist/css/bootstrap.min.css';
import { Activity } from "./Activity"

interface ActivityItemProps {
    activity: Activity
}
export default function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="activite-content-container">
        <span className="activite-date-text">({activity.date})</span>
        <span>{activity.title}</span>
        <span>
        <button 
            onClick={() => window.open(activity.url,'_blank')}
            className="url-btn"
        >
            GO
        </button>
        </span>
    </div>
  )
}
