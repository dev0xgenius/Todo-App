function TodoAction({text, action}) {
  return (
    <div>
      <button className="action btn"
        onClick={action}>{text}</button>
    </div>
  );
}

export default TodoAction