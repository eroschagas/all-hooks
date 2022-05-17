import PropTypes from "prop-types";

export const Button = ({
  children,
  onButtonClick,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
