export const Counter = ({
  onValueDown,
  count,
  onValueUp,
  price,
  order = false,
}) => {
  return (
    <div>
      <button style={{ marginRight: "10px" }} onClick={onValueUp}>
        +
      </button>

      {order ?
       (<span> {count} - {(count * price).toFixed(2)}$ </span>) 
        :
       ( <span> {count} </span> )}
       
      <button style={{ marginLeft: "10px" }} onClick={onValueDown}>
        -
      </button>
    </div>
  );
};
