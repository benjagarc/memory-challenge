import "./index.css";

export const Card = ({ url, title, displayCard, matched }) => {
  return (
    <div className={`flip-card`} onClick={() => displayCard()}>
      <div className={`flip-card-inner  ${matched ? "display-card" : ""}`}>
        <div className="flip-card-front bg-x3dark"></div>
        <div className="flip-card-back">
          <img src={url} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Card;
