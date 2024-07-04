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
      <Banner title="OUR MISSION" />
      <Container>
        <section className="mission-section">
          <h2 className="section-title centered-title">OUR MISSION</h2>
          <Row className="mt-4">
            <Col md={4}>
              <MissionCard
                title="Connect And Collaborate"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. :)"
                icon={icon2}
              />
            </Col>
            <Col md={4}>
              <MissionCard
                title="Empower Youths"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. :)"
                icon={icon3}
              />
            </Col>
            <Col md={4}>
              <MissionCard
                title="Learn & Act"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. :)"
                icon={icon1}
              />
            </Col>
          </Row>
        </section>
        <section className="about-us mt-5">
          <Row>
            <Col md={8}>
              <h5>WHO WE ARE</h5>
              <h2>ABOUT US</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae rhoncus felis. Duis sagittis gravida elit.</p>
              <p>Nulla egestas metus lorem, ultricies fermentum urna cursus eu.</p>
              <Button variant="dark">Read more</Button>
            </Col>
            <Col md={4}>
              <img src={aboutUsImage} alt="About Us" className="about-us-image" />
            </Col>
          </Row>
        </section>
        <section className="faq mt-5">
          <h2 className="section-title centered-title">FAQ</h2>
          <p className="faq-subtitle">Frequently asked questions about hookup and association</p>
          <div className="faq-item">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae rhoncus felis.</p>
          </div>
          <div className="faq-item">
            <h5>Quisque gravida dictum metus non aliquam?</h5>
            <p>Quisque gravida dictum metus non aliquam. Pellentesque sapien massa, aliquam in laoreet ac.</p>
          </div>
          <div className="faq-item">
            <h5>Pellentesque sapien massa, aliquam in laoreet ac?</h5>
            <p>Pellentesque sapien massa, aliquam in laoreet ac.</p>
          </div>
          <div className="faq-item">
            <h5>Consectetur ullamcorper odio. Duis tristique velit at urna eleifend?</h5>
            <p>Consectetur ullamcorper odio. Duis tristique velit at urna eleifend?</p>
          </div>
          {/* Add more FAQ items as needed */}
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
