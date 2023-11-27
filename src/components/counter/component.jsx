export const Counter = ({ onValueDown, count, onValueUp }) => {
  return (
    <div>
      <button style={{ marginRight: "10px" }} onClick={onValueUp}>
        +
      </button>

      <span> {count} </span>

      <button style={{ marginLeft: "10px" }} onClick={onValueDown}>
        -
      </button>
    </div>
  );
};
