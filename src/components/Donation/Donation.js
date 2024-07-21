import React from 'react';
import './Donation.css'; // Import the CSS file
import Amnesty from '../../assets/Donation/Amnesty.jpg';
import CharityWater from '../../assets/Donation/Charity-water.jpg';
import GreenPeace from '../../assets/Donation/Greenpeace.jpg';
import IRC from '../../assets/Donation/IRC.jpg';
import MSF from '../../assets/Donation/MSF.jpg';
import SaveTheChildren from '../../assets/Donation/SaveTheChildren.jpg';
import UNICEF from '../../assets/Donation/UNICEF.jpg';
import WWF from '../../assets/Donation/WWF.jpg';

const charities = [
  {
    name: 'Médecins Sans Frontières',
    description: 'An international, independent medical humanitarian organisation',
    logo: MSF,
    link: 'https://www.msf.org/'
  },
  {
    name: 'Save The Children',
    description: 'An organization dedicated to helping children',
    logo: SaveTheChildren,
    link: 'https://www.savethechildren.org/'
  },
  {
    name: 'Amnesty International',
    description: 'An organization for global rights and victims of injustice',
    logo: Amnesty,
    link: 'https://www.amnesty.org/'
  },
  {
    name: 'Greenpeace',
    description: 'An organization that advocates to address environmental issues',
    logo: GreenPeace,
    link: 'https://www.greenpeace.org/'
  },
  {
    name: 'World Wildlife Fund',
    description: 'An organization that works to conserve nature',
    logo: WWF,
    link: 'https://www.worldwildlife.org/'
  },
  {
    name: 'UNICEF',
    description: 'An organization that provides humanitarian aid to children and mothers',
    logo: UNICEF,
    link: 'https://www.unicef.org/'
  },
  {
    name: 'Charity: Water',
    description: 'An organization that brings clean drinking water to those in need',
    logo: CharityWater,
    link: 'https://www.charitywater.org/'
  },
  {
    name: 'IRC',
    description: 'An organization that responds to humanitarian crises',
    logo: IRC,
    link: 'https://www.rescue.org/'
  },
];

const Donation = () => {
  return (
    <div className="donation-section">
      <h2 className="section-title"style={{ color: 'black' }}>Donate Now</h2>
      <div className="donation-grid">
        {charities.map((charity, index) => (
          <div className="donation-card" key={index}>
            <img src={charity.logo} alt={`${charity.name} logo`} className="charity-logo" />
            <div className="charity-info">
              <h3>{charity.name}</h3>
              <p>{charity.description}</p>
              <a href={charity.link} target="_blank" rel="noopener noreferrer" className="donate-link">Donate Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
