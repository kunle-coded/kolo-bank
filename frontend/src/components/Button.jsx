function Button({
  children,
  width = "200px",
  height = "40px",
  onClick,
  disable = false,
}) {
  const buttonStyle = {
    width: width,
    height: height,
  };

  return (
    <button disabled={disable} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
