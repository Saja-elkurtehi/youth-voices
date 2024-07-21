import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MissionCard from '../../components/MissionCard/MissionCard';
import Banner from '../../components/Banner/Banner';
import icon1 from '../../assets/icons/Icon.png';
import icon2 from '../../assets/icons/Icon-3.png';
import icon3 from '../../assets/icons/Icon-2.png';
import aboutUsImage from '../../assets/about-us.jpg'; // Replace with the correct path to your image
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Banner title="HOME" />
      <Container>
        <section className="mission-section" aria-labelledby="mission-title">
          <h2 id="mission-title" className="section-title centered-title" style={{ color: 'black'}}>OUR MISSION</h2>
          <Row className="mt-4">
            <Col md={4}>
              <MissionCard
                title="Connect And Collaborate"
                text="Our platform connects young activists, fostering collaboration and shared learning to drive impactful social change."
                icon={icon2}
              />
            </Col>
            <Col md={4}>
              <MissionCard
                title="Empower Youths"
                text="We empower youths with the resources, training, and support they need to become leaders in their communities."
                icon={icon3}
              />
            </Col>
            <Col md={4}>
              <MissionCard
                title="Learn & Act"
                text="Gain knowledge on various social issues and learn how to take meaningful action to address them."
                icon={icon1}
              />
            </Col>
          </Row>
        </section>
        <section className="about-us mt-5" aria-labelledby="about-us-title">
          <Row>
            <Col md={8}>
              <h5>WHO WE ARE</h5>
              <h2 id="about-us-title">ABOUT US</h2>
              <p>Youth Voices is a dedicated platform that empowers young individuals to engage in social activism, share their stories, and connect with like-minded individuals.</p>
              <p>Our mission is to provide a supportive environment where youth can learn, collaborate, and take action for social justice and sustainability.</p>
              <Button variant="dark">Read more</Button>
            </Col>
            <Col md={4}>
              <img src={aboutUsImage} alt="Group of young people involved in social activism" className="about-us-image" />
            </Col>
          </Row>
        </section>
        <section className="faq mt-5" aria-labelledby="faq-title">
          <h2 id="faq-title" className="section-title centered-title" style={{ color: 'black'}}>FAQ</h2>
          <p className="faq-subtitle">Frequently Asked Questions</p>
          <div className="faq-item">
            <h5>What is Youth Voices?</h5>
            <p>Youth Voices is a platform aimed at empowering young individuals to engage in social activism, share their stories, and connect with others who have similar interests and goals.</p>
          </div>
          <div className="faq-item">
            <h5>How can I join Youth Voices?</h5>
            <p>You can join Youth Voices by signing up on our website. Once registered, you will have access to a variety of resources and the ability to participate in our community activities.</p>
          </div>
          <div className="faq-item">
            <h5>What kind of support does Youth Voices offer?</h5>
            <p>We offer a range of support including educational resources, mentorship programs, and opportunities to engage in social activism and community projects.</p>
          </div>
          <div className="faq-item">
            <h5>How can I contribute to Youth Voices?</h5>
            <p>You can contribute by sharing your stories, participating in discussions, volunteering for community projects, and supporting our initiatives through donations or spreading the word.</p>
          </div>
          <div className="faq-item">
            <h5>Are there any membership fees?</h5>
            <p>No, joining Youth Voices is completely free. We aim to make our resources and community accessible to all young individuals.</p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
