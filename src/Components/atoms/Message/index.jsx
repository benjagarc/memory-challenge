import { Button } from "react-bootstrap";
import "./index.css";
import PropTypes from "prop-types";

export const Message = ({ setIsShow }) => {
  return (
    <>
      <div className="bg-x2dark message-background" />
      <div className="bg-x3dark message-card">
        <h1>Juego terminado, has ganado</h1>
        <Button onClick={() => setIsShow()}>Reiniciar</Button>
      </div>
    </>
  );
};

Message.prototype = {
  setIsShow: PropTypes.func.isRequired,
};

export default Message;
