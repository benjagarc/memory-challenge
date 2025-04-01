import "./index.css";
import PropTypes from "prop-types";

export const Card = ({ url, title, displayCard, matched }) => {
  return (
    <div className={`flip-card`} onClick={() => displayCard()}>
      <div className={`flip-card-inner  ${matched ? "display-card" : ""}`}>
        <div className="flip-card-front bg-x3dark"></div>
        <div className="flip-card-back">
          <img src={url} alt={title} loading="lazy" fetchpriority="high"/>
        </div>
      </div>
    </div>
  );
};

Card.prototype = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  displayCard: PropTypes.func.isRequired,
  matched: PropTypes.bool.isRequired,
};

export default Card;
