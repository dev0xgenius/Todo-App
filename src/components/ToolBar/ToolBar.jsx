import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import styles from "./toolBar.module.scss";

export default function ToolBar({tools}) {
  return (
    <ul className={styles.toolBar}>
      {
        tools.map((tool, index) => (
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
}

ToolBar.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.func
    })
  ),
};