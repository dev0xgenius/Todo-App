function TodoAction(props) {
  return (
    <div className={
      props.className != "action btn" ?
      props.className : "" }>
      <button
        className={
          props.className == 'action btn' ? 
          props.className : "" }
        onClick={props.action}>
        {props.text}
      </button>
    </div>
  );
}

TodoAction.defaultProps = {
  className: "action btn",
}

export default TodoAction