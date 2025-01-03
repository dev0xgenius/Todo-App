import TodoAction from "./TodoAction";

export default function Actions(props) {
  return (
    <ul className="action-list">
      {
        props.actions.map((action, index) => (
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
};