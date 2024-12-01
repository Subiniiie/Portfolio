import 'bootstrap/dist/css/bootstrap.min.css';
import { Activity } from "./Activity"

interface ActivityItemProps {
    activity: Activity
}
export default function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="activite-content-container">
      <div className="activite-info">
        <span className="activite-date-text">({activity.date})</span>
        <span>{activity.title}</span>
      </div>
      <div>
      <a
        href={activity.url}
        target='blank'
      >
        관련 기사 보러가기
      </a>
      </div>
    </div>
  )
}
