import React from 'react';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import DonationComponent from '../../components/Donation/Donation';
import cardImage1 from '../../assets/Article/cardImage1.jpg';
import cardImage2 from '../../assets/Article/cardImage2.jpg';
import cardImage3 from '../../assets/Article/cardImage3.jpg';
import cardImage4 from '../../assets/Article/cardImage4.jpg';
import cardImage5 from '../../assets/Article/cardImage5.jpg';
import cardImage6 from '../../assets/Article/cardImage6.jpg';
import Banner from '../../components/Banner/Banner';
import './LearnActPage.css'; // Import the CSS file

const LearnActPage = () => {
  const cardItems = [
    {
      title: "Toxic Air",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, libero temporibus. Quae eius est reprehenderit nulla quis distinctio quasi",
      imgSrc: cardImage1,
      linkUrl: "/learnact",
    },
    {
      title: "Climate Despair",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, libero temporibus. Quae eius est reprehenderit nulla quis distinctio quasi",
      imgSrc: cardImage2,
      linkUrl: "/climate-despair",
    },
    {
      title: "Hope's Horizon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, libero temporibus. Quae eius est reprehenderit nulla quis distinctio quasi",
      imgSrc: cardImage3,
      linkUrl: "/hope-horizon",
    },
    {
      title: "Hunger's Face",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, libero temporibus. Quae eius est reprehenderit nulla quis distinctio quasi",
      imgSrc: cardImage4,
      linkUrl: "/hunger-face",
    },
    {
      title: "Urban Inferno",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, libero temporibus. Quae eius est reprehenderit nulla quis distinctio quasi",
      imgSrc: cardImage5,
      linkUrl: "/urban-inferno",
    },
    {
      title: "Police Brutality",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, libero temporibus. Quae eius est reprehenderit nulla quis distinctio quasi",
      imgSrc: cardImage6,
      linkUrl: "/police-brutality",
    },
  ];

  return (
    <div>
      <Banner title="LEARN & ACT" />
      <div className="section">
        <h2 className="section-title">Articles</h2>
        <CustomCarousel items={cardItems} />
      </div>
      <div className="section">
        <EventCalendar />
      </div>
      <div className="section">
        <DonationComponent />
      </div>
    </div>
  );
};

export default LearnActPage;
