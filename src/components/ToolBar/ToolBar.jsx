import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

export default function ToolBar(props) {
  return (
    <ul className="action-list">
      {
        props.tools.map((tool, index) => (
          <Button
            text={tool.text}
            clickHandler={tool.action}
            keyIndex={index}
            key={index}
          />
        ))
      }
    </ul>
  );
};

ToolBar.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.func
    })
  ),
};