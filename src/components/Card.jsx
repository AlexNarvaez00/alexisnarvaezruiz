import './Card.css';

const Card = ({ children, className , ...props }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
