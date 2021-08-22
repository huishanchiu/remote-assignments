const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className="see-more-btn">
        see more
      </button>
    </div>
  );
};

export default Button;
