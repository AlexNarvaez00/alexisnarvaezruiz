import "./Grid.css";

const Grid = ({ children, className = '',...props }) => {
  return <section className={`grid-container ${className}`}>{children}</section>;
};

export default Grid;
