import Button from "../Button/Button.jsx";

export default function ToolBar(props) {
  return (
    <ul className="action-list">
      {
        props.actions.map((action, index) => (
          <Button
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