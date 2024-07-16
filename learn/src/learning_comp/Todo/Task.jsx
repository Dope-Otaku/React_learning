const Task = ({ title, description, deletetask, index }) => {
  const outerBox = {
    border: "1px solid black",
    margin: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };

  return (
    <div style={outerBox}>
      <p>{title}</p>
      <span>{description}</span>
      <button
        onClick={() => {
          deletetask(index);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Task;
