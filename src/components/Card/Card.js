import './Card.css';
const Card = ({ title, imgSrc }) => (
    <div className="custom-card">
      <img src={imgSrc} alt={title} className="custom-card-img" />
      <div className="custom-card-overlay">
        <h3 className="custom-card-title">{title}</h3>
      </div>
    </div>
  );
  
  export default Card;
  