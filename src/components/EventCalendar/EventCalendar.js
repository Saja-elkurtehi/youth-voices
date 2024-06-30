import React from 'react';

const EventCalendar = () => {
  // Example data, replace with actual data fetching logic
  const events = [
    { id: 1, date: '2024-07-01', title: 'Event 1' },
    { id: 2, date: '2024-07-05', title: 'Event 2' },
  ];

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventCalendar;
