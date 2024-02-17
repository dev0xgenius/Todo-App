import TodoAction from "./TodoAction";

function Actions(props) {
  const actions = [
    {text: "All", action: props.showAll},
    {text: "Active", action: props.showActive},
    {text: "Completed", action: props.showCompleted}
  ].map((action, index) => (
    <TodoAction
      text={action.text}
      action={action.action}
      keyIndex={index}
      key={index}
    />
  ));

  return (
    <ul className="action-list">
      {actions}
    </ul>
  );
}

export default Actions