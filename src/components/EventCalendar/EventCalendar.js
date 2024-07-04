import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './EventCalendar.css'; // Import the CSS file

const events = [
  { id: 1, date: '2024-07-01', title: 'Event #1', time: '10:30am - 12:00pm', subheading: 'Lorem ipsum', details: 'Lorem ipsum' },
  { id: 2, date: '2024-07-02', title: 'Event #2', time: '11:00am', subheading: 'Lorem ipsum', details: 'Lorem ipsum' },
  { id: 3, date: '2024-07-03', title: 'Event #3', time: '1:00pm', subheading: 'Lorem ipsum', details: 'Lorem ipsum' },
  { id: 4, date: '2024-07-07', title: 'Event #4', time: '3:00pm', subheading: 'Lorem ipsum', details: 'Lorem ipsum' },
];

const weekdays = [
  { date: '2024-07-01', label: 'SUN' },
  { date: '2024-07-02', label: 'MON' },
  { date: '2024-07-03', label: 'TUE' },
  { date: '2024-07-04', label: 'WED' },
  { date: '2024-07-05', label: 'THU' },
  { date: '2024-07-06', label: 'FRI' },
  { date: '2024-07-07', label: 'SAT' },
];

function UnderlineExample({ onSelectDay }) {
  return (
    <Nav variant="underline" defaultActiveKey={weekdays[0].date} onSelect={onSelectDay} className="nav-days">
      {weekdays.map((day) => (
        <Nav.Item key={day.date}>
          <Nav.Link eventKey={day.date}>{day.label}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

const EventCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(weekdays[0].date);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  const filteredEvents = events.filter(event => event.date === selectedDay);

  return (
    <div className="calendar-container">
      <h2 className="section-title">Events</h2>
      <UnderlineExample onSelectDay={handleSelectDay} />
      <div className="event-details">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-main">
                <p className="event-day">{new Date(event.date).toLocaleString('en-us', { weekday: 'long' })}</p>
                <p className="event-date">{new Date(event.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
                <h3>{event.title}</h3>
                <p>{event.time}</p>
              </div>
              <div className="event-subdetails">
                <p className="subheading">{event.subheading}</p>
                <p>{event.details}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events for this day</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
