import "./index.css";
import PropTypes from "prop-types";

export const FloatCard = ({ children }) => {
  return (
    <>
      <div className="bg-x2dark message-background" />
      <div className="bg-x3dark message-card">
        {children}
      </div>
    </>
  );
};

FloatCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatCard;
