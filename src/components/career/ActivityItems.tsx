import { activities } from "./Activity"
import ActivityItem from "./ActivityItem"

export default function ActivityItems() {
  return (
    <div>
        <ul>
            {activities.map((activity, index) => (
                <li>
                    <ActivityItem 
                        key={index}
                        activity={activity}
                    />
                </li>
            ))}
        </ul>
    </div>
  )
}
