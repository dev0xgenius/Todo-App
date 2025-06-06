import PropTypes from "prop-types";
import styles from "./button.module.scss";

export default function Button(props) {
  return (
    <div>
      <button
        className={props.className ? props.className : `${styles.presetBtn}`}
        onClick={props.clickHandler}
        style={props.isActive ? { color: "hsl(220, 98%, 61%)" } : undefined}
      >
        {props.text || props.img}
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  img: PropTypes.any,
  text: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

