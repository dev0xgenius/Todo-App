import PropTypes from "prop-types"

export default function Button(props) {
  return (
    <div
      className = { props.className != "action btn" ? props.className : "" }
    >
      <button className =
        { props.className == 'action btn' ? props.className : "" }
        onClick={props.clickHandler}>
        { props.text || props.img }
      </button>
    </div>
  );
}

Button.defaultProps = {
  className: "action btn",
};

Button.propTypes = {
  className: PropTypes.string,
  img: PropTypes.any,
  text: PropTypes.string,
  clickHandler: PropTypes.func.isRequired, 
};