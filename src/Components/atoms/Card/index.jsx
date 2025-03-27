import { Col } from "react-bootstrap";
import "./index.css"

export const Card = (props) => {
  return (
    <Col md={2} xs={2} lg={2}>
        <img src={props?.url} alt={props.title} className="image-card " />
    </Col>
  )
};

export default Card;
