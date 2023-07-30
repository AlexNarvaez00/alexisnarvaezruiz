import { Link } from "react-router-dom";
import "./Card.css";

const CardLink = ({
  children,
  className,
  to = "",
  toRouter = false,
  ...props
}) => {
  if (toRouter) {
    return (
      <Link className={`card relative ${className}`} to={`${to}`} {...props}>
        <span className={`absolute right-4 top-4`}>
          <i className="bi bi-box-arrow-up-right"></i>
        </span>
        {children}
      </Link>
    );
  }

  return (
    <a className={`card relative ${className}`} href={`${to}`} {...props}>
      <span className={`absolute right-4 top-4`}>
        <i className="bi bi-box-arrow-up-right"></i>
      </span>
      {children}
    </a>
  );
};

export default CardLink;
