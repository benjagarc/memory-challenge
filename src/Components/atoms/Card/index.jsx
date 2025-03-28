import { Col } from "react-bootstrap";
import "./index.css";

export const Card = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-x3dark">
        </div>
        <div className="flip-card-back">
         <img src={props?.url} alt={props.title} />
        </div>
      </div>
    </div>
  );
};

export default Card;

