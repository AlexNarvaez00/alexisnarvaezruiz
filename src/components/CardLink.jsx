import { Link } from "react-router-dom";
import "./CardLink.css";

const CardLink = ({
  children,
  className,
  to = "",
  toRouter = false,
  ...props
}) => {
  if (toRouter) {
    return (
      <Link className={`card-link relative ${className}`} to={`${to}`} {...props}>
        <span className={`absolute right-4 top-4`}>
          <i className="bi bi-box-arrow-up-right"></i>
        </span>
        {children}
      </Link>
    );
  }

  return (
    <a className={`card-link relative ${className}`} href={`${to}`} {...props}>
      <span className={`absolute right-4 top-4`}>
        <i className="bi bi-box-arrow-up-right"></i>
      </span>
      {children}
    </a>
  );
};

export default CardLink;
