import PropTypes from "prop-types";
import styles from "./button.module.scss";

export default function Button(props) {
  return (
    <div>
      <button className =
        { props.className ? props.className : `${styles.presetBtn}` }
        onClick={props.clickHandler}>
        { props.text || props.img }
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  img: PropTypes.any,
  text: PropTypes.string,
  clickHandler: PropTypes.func.isRequired, 
};