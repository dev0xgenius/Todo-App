import TodoAction from "./TodoAction";

function Actions(props) {
  const actions = 
  [
    {text: "All", action: props.showAll},
    {text: "Active", action: props.showActive},
    {text: "Completed", action: props.showCompleted}
  ];

  return (
    <ul className="action-list">
      {
        actions.map((action, index) => (
          <TodoAction
            text={action.text}
            action={action.action}
            keyIndex={index}
            key={index}
          />
        ))
      }
    </ul>
  );
}

export default Actions;