import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import InfographicCarousel from '../../components/CustomCarousel/InfographicCarousel'; // Import the new carousel
import DonationComponent from '../../components/Donation/Donation';
import Banner from '../../components/Banner/Banner';
import Guides from '../../components/Guides/Guides';
import Podcasts from '../../components/Podcasts/Podcasts';
import cardImage1 from '../../assets/Article/cardImage1.jpg';
import cardImage2 from '../../assets/Article/cardImage2.jpg';
import cardImage3 from '../../assets/Article/cardImage3.jpg';
import cardImage4 from '../../assets/Article/cardImage4.jpg';
import cardImage5 from '../../assets/Article/cardImage5.jpg';
import cardImage6 from '../../assets/Article/cardImage6.jpg';
import climateChangeInfographic from '../../assets/photos/climate_change_infographic.jpg'; // Import climate change infographic
import socialJusticeInfographic from '../../assets/photos/social_justice_infographic.jpg'; // Import social justice infographic
import info2 from '../../assets/photos/info2.jpg'; // Import additional infographic
import info3 from '../../assets/photos/info3.jpg'; // Import additional infographic
import info4 from '../../assets/photos/info4.jpg'; // Import additional infographic
import './LearnActPage.css'; // Import the CSS file
import Modal from '../../components/Modal/Modal'; // Import the Modal component

const cardItems = [
  {
    title: "Toxic Air",
    text: "An in-depth look at the causes and effects of air pollution and what can be done to combat it.",
    imgSrc: cardImage1,
    linkUrl: "/learnact",
  },
  {
    title: "Climate Despair",
    text: "Exploring the psychological impacts of climate change and how to foster resilience.",
    imgSrc: cardImage2,
    linkUrl: "/climate-despair",
  },
  {
    title: "Hope's Horizon",
    text: "Stories of hope and action in the fight against climate change.",
    imgSrc: cardImage3,
    linkUrl: "/hope-horizon",
  },
  {
    title: "Hunger's Face",
    text: "Understanding the global hunger crisis and what can be done to alleviate it.",
    imgSrc: cardImage4,
    linkUrl: "/hunger-face",
  },
  {
    title: "Urban Inferno",
    text: "The impact of urban heat islands and solutions to cool our cities.",
    imgSrc: cardImage5,
    linkUrl: "/urban-inferno",
  },
  {
    title: "Police Brutality",
    text: "Examining the causes and consequences of police violence and the movement for reform.",
    imgSrc: cardImage6,
    linkUrl: "/police-brutality",
  },
];

const videoItems = [
  {
    title: "Social Justice Explained",
    text: "A comprehensive video on social justice concepts.",
    videoUrl: "https://www.youtube.com/embed/2S8HJT64nqg", // Example YouTube video URL
  },
  {
    title: "Youth Activism",
    text: "How young people can make a difference.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube video URL
  },
];

const infographicItems = [
  {
    title: "Impact of Climate Change",
    imgSrc: climateChangeInfographic, // Use imported image
  },
  {
    title: "Social Justice Statistics",
    imgSrc: socialJusticeInfographic, // Use imported image
  },
  {
    title: "Infographic 2",
    imgSrc: info2, // Use imported image
  },
  {
    title: "Infographic 3",
    imgSrc: info3, // Use imported image
  },
  {
    title: "Infographic 4",
    imgSrc: info4, // Use imported image
  },
];

const LearnActPage = () => {
  const navbarHeight = 70; // Adjust this value based on your navbar height
  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleInfographicClick = (imgSrc) => {
    setModalImage(imgSrc);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setModalImage('');
  };

  return (
    <div>
      <Banner title="LEARN & ACT" />
      <div className="filter">
        <select onChange={(e) => scrollToSection(e.target.value)}>
          <option value="">Select a Resource Type</option>
          <option value="articles-section">Articles</option>
          <option value="videos-section">Videos</option>
          <option value="events-section">Events</option>
          <option value="donations-section">Donations</option>
          <option value="infographics-section">Infographics</option>
          <option value="guides-section">Guides</option>
          <option value="podcasts-section">Podcasts</option>
        </select>
      </div>
      
      <div id="videos-section" className="section section-centered">
        <h2 className="section-title" style={{ color: 'black' }}>Videos</h2>
        <div className="video-container">
          {videoItems.map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <iframe 
                width="560" 
                height="315" 
                src={video.videoUrl} 
                title={video.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>{video.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="events-section" className="section section-centered">
        <EventCalendar />
      </div>
      <div id="articles-section" className="section section-centered">
        <h2 className="section-title" style={{ color: 'black' }}>Articles</h2>
        <CustomCarousel items={cardItems} />
      </div>
      <div id="infographics-section" className="section section-centered">
        <h2 className="section-title" style={{ color: 'black' }}>Infographics</h2>
        <InfographicCarousel items={infographicItems} onClick={handleInfographicClick} />
      </div>
      <div id="guides-section" className="section section-centered">
        <h2 className="section-title" style={{ color: 'black' }}>Guides</h2>
        <Guides />
      </div>
      <div id="podcasts-section" className="section section-centered">
        <h2 className="section-title" style={{ color: 'black' }}>Podcasts</h2>
        <Podcasts />
      </div>
      <div id="donations-section" className="section section-centered">
        <DonationComponent />
      </div>
      {modalShow && <Modal imgSrc={modalImage} onClose={handleCloseModal} />}
    </div>

  );
};

export default LearnActPage;
