import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EventCalendar.css'; // Import the CSS file

const baseEvents = [
  { id: 1, day: 1, title: 'Protest', time: '10:30am - 12:00pm', subheading: 'Stand Up for Your Rights', details: 'Join us in a peaceful protest to demand justice and equality.', location: 'New York' },
  { id: 2, day: 1, title: 'Community Outreach', time: '2:00pm - 4:00pm', subheading: 'Helping Hands', details: 'Volunteer with us to help the less fortunate in our community.', location: 'Los Angeles' },
  { id: 3, day: 2, title: 'Climate March', time: '11:00am - 1:00pm', subheading: 'March for the Earth', details: 'Raise awareness about climate change and advocate for sustainable practices.', location: 'Chicago' },
  { id: 4, day: 2, title: 'Food Drive', time: '3:00pm - 5:00pm', subheading: 'Feeding the Hungry', details: 'Donate and help distribute food to those in need.', location: 'Boston' },
  { id: 5, day: 3, title: 'Charity Run', time: '1:00pm - 3:00pm', subheading: 'Run for a Cause', details: 'Participate in a charity run to support local communities in need.', location: 'San Francisco' },
  { id: 6, day: 3, title: 'Beach Cleanup', time: '9:00am - 11:00am', subheading: 'Protect Our Oceans', details: 'Join us for a beach cleanup to keep our shores clean and safe.', location: 'Miami' },
  { id: 7, day: 4, title: 'Workshop on Activism', time: '2:00pm - 4:00pm', subheading: 'Empower Yourself', details: 'Learn how to effectively engage in social activism and bring about change.', location: 'New York' },
  { id: 8, day: 4, title: 'Tree Planting', time: '10:00am - 12:00pm', subheading: 'Greening Our City', details: 'Help us plant trees to improve our urban environment.', location: 'Los Angeles' },
  { id: 9, day: 5, title: 'Community Cleanup', time: '9:00am - 12:00pm', subheading: 'Keep Our City Clean', details: 'Join us for a community cleanup event to keep our neighborhoods clean and safe.', location: 'Seattle' },
  { id: 10, day: 5, title: 'Fundraising Gala', time: '7:00pm - 10:00pm', subheading: 'Support Our Cause', details: 'Attend our gala to support our initiatives and enjoy an evening of entertainment.', location: 'Chicago' },
  { id: 11, day: 6, title: 'Youth Rally', time: '4:00pm - 6:00pm', subheading: 'Youth Voices Matter', details: 'A rally to empower youth and encourage them to take action for social justice.', location: 'San Francisco' },
  { id: 12, day: 6, title: 'Blood Donation Camp', time: '11:00am - 3:00pm', subheading: 'Give the Gift of Life', details: 'Donate blood and save lives at our blood donation camp.', location: 'Boston' },
  { id: 13, day: 0, title: 'Fundraising Gala', time: '7:00pm - 10:00pm', subheading: 'Support Our Cause', details: 'Attend our gala to support our initiatives and enjoy an evening of entertainment.', location: 'Miami' },
  { id: 14, day: 0, title: 'Charity Auction', time: '2:00pm - 5:00pm', subheading: 'Bid for Good', details: 'Join our charity auction and bid on exciting items to support our cause.', location: 'New York' },
];

const generateEvents = () => {
  const events = [];
  const startDate = new Date('2024-07-01');

  for (let i = 0; i < 4; i++) { // Repeat for 4 weeks
    baseEvents.forEach(event => {
      const eventDate = new Date(startDate);
      eventDate.setDate(startDate.getDate() + event.day + (i * 7));
      events.push({ ...event, date: eventDate.toISOString().split('T')[0] });
    });
  }

  return events;
};

const events = generateEvents();
const locations = Array.from(new Set(events.map(event => event.location)));

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleRegister = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const filteredEvents = events.filter(event => 
    new Date(event.date).toDateString() === selectedDate.toDateString() &&
    (selectedLocation === '' || event.location === selectedLocation)
  );

  return (
    <div className="calendar-container">
      <h2 className="section-title" style={{ color: 'black' }}>Events</h2>
      <div className="filter-container">
        <label htmlFor="date-picker">Select a date: </label>
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div className="filter-container">
        <label htmlFor="location-filter">Filter by location: </label>
        <select id="location-filter" value={selectedLocation} onChange={handleSelectLocation}>
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="event-details">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-main">
                <h3>{event.title}</h3>
                <p>{event.time}</p>
                <p>{event.location}</p>
              </div>
              <div className="event-subdetails">
                <p className="subheading">{event.subheading}</p>
                <p>{event.details}</p>
              </div>
              <button className="register-button" onClick={handleRegister}>Register for Event</button>
            </div>
          ))
        ) : (
          <p>No events for this day</p>
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>&times;</span>
            <p>Registered!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
