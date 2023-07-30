import "./NavButton.css";

const NavButton = ({ children, className = "", ...props }) => {
  return (
    <a className={`navButton ${className}`} {...props}>
      {children}
    </a>
  );
};
export default NavButton;
