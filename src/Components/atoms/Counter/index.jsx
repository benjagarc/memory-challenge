import PropTypes from "prop-types";
import './index.css'

export const Counter = ({ count, url, text }) => {
  return (
    <div className="counter">
      <img src={`${url}`} alt="icon" width={24} height={24} /> {text}: {count}
    </div>
  );
};

Counter.prototype = {
  count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Counter;
