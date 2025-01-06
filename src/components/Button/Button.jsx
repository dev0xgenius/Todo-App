export default function Button(props) {
  return (
    <div className={
      props.className != "action btn" ?
      props.className : "" }>
      <button className =
          { props.className == 'action btn' ? props.className : "" }
        onClick={props.action}>
        {props.text || props.img}
      </button>
    </div>
  );
}

Button.defaultProps = {
  className: "action btn",
};