
import './TimeTable.css'; // You should create a CSS file for styling

export function TimeTable() {
  return (
    <div className='TimeTableBackground'>
        <h1 style={{fontFamily:'Impact',fontSize:'35px'}}>CLASS TIMETABLE</h1>
    <div className="timetable">

      <div className="days">
        <div className="day">Time</div>
        <div className="day">Monday</div>
        <div className="day">Tuesday</div>
        <div className="day">Wednesday</div>
        <div className="day">Thursday</div>
        <div className="day">Friday</div>
      </div>
      <div className="classes">
        <div className="time">08:00 AM</div>
        <div className="class">Yoga</div>
        <div className="class">Pilates</div>
        <div className="class">MMA</div>
        <div className="class">CrossFit</div>
        <div className="class">Spinning</div>
      </div>
      <div className="classes">
        <div className="time">10:00 AM</div>
        <div className="class">CrossFit</div>
        <div className="class">Yoga</div>
        <div className="class">Spinning</div>
        <div className="class">Pilates</div>
        <div className="class">Wrestling</div>
      </div>
      <div className="classes">
        <div className="time">12:00 PM</div>
        <div className="class">Pilates</div>
        <div className="class">Zumba</div>
        <div className="class">CrossFit</div>
        <div className="class">Wrestling</div>
        <div className="class">Yoga</div>
      </div>
      <div className="classes">
        <div className="time">14:00 PM</div>
        <div className="class">Boxing</div>
        <div className="class">Zumba</div>
        <div className="class">CrossFit</div>
        <div className="class">MMA</div>
        <div className="class">Yoga</div>
      </div>
      <div className="classes">
        <div className="time">16:00 PM</div>
        <div className="class">Boxing</div>
        <div className="class">Zumba</div>
        <div className="class">CrossFit</div>
        <div className="class">Spinning</div>
        <div className="class">Yoga</div>
      </div>
      {/* Add more time slots and classes here */}
    </div>
    </div>
  );
}

