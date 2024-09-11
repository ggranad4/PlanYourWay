import basic1 from '../../photos/planner/basic/BasicWeeklyPlanner(MondayLeading).png'
import basic2 from '../../photos/planner/basic/BasicWeeklyPlanner(SundayLeading).png'
import bullet1 from '../../photos/planner/bullet/BulletJournal.png'
import bullet2 from '../../photos/planner/bullet/BulletPlanner1(1).png'
import bullet3 from '../../photos/planner/bullet/BulletPlanner1(2).png'
import calendar1 from '../../photos/planner/calendar/CalendarMonLeading.png'
import calendar2 from '../../photos/planner/calendar/CalendarSunLeading.png'
import graph1 from '../../photos/planner/graph/GraphJournal.png'
import journal1 from '../../photos/planner/journal/JournalPlanner1(1).png'
import journal2 from '../../photos/planner/journal/JournalPlanner1(2).png'
import journal3 from '../../photos/planner/journal/JournalPlanner2.png'
import lined1 from '../../photos/planner/lined/LinedJournal.png'
import list1 from '../../photos/planner/list/ListPlanner(1).png'
import list2 from '../../photos/planner/list/ListPlanner(2).png'
import schedule1 from '../../photos/planner/schedule/SchedulePlanner1(1).png'
import schedule2 from '../../photos/planner/schedule/SchedulePlanner1(2).png'
import schedule3 from '../../photos/planner/schedule/SchedulePlanner2.png'
import stayOnTask1 from '../../photos/planner/stayOnTask/StayOnTaskPlanner.png'
import placeHolderImage from '../../photos/planner/empty/empty.png'

const ImageRenderer = ({ photoTypeSelected, photoSelected }) => {

    const plannerPhotos = {
        Basic: [
            { "Basic 1": basic1 },
            { "Basic 2": basic2 }
        ],
        Bullet: [
            { "Bullet 1": bullet1 },
            { "Bullet 2": bullet2 },
            { "Bullet 3": bullet3 }
        ],
        "Calendar": [
            { "Calendar 1": calendar1 },
            { "Calendar 2": calendar2 }
        ],
        Graph: [
            { "Graph 1": graph1 }
        ],
        Journal: [
            { "Journal 1": journal1 },
            { "Journal 2": journal2 },
            { "Journal 3": journal3 }
        ],
        Lined: [
            { "Lined 1": lined1 }
        ],
        List: [
            { "List 1": list1 },
            { "List 2": list2 }
        ],
        Schedule: [
            { "Schedule 1": schedule1 },
            { "Schedule 2": schedule2 },
            { "Schedule 3": schedule3 }
        ],
        StayOnTask: [
            { "Stay On Task 1": stayOnTask1 }
        ]
    };
    const getImageUrl = (type, image) => {
        const imagesArray = plannerPhotos[type];
        if (!imagesArray) return null;
        const imageObj = imagesArray.find(item => item[image]);
        return imageObj ? imageObj[image] : null;
    };

    // Example usage
    const calendarImageUrl = getImageUrl(photoTypeSelected, photoSelected);


    return (<>
        <img width={350} hieght={350} src={!calendarImageUrl ? placeHolderImage : calendarImageUrl} />
    </>)
}
export default ImageRenderer;











