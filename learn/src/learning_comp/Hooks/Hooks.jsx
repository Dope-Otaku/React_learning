import { useState } from "react";

const Hooks = () => {
  const [value, setValue] = useState(0);

  let a = value;
  const increment = () => {
    setValue(a + 1);
  };
  const decrement = () => {
    setValue(a - 1);
  };

  return (
    <>
      {/* we need to  create a counter using useState  */}
      <div className="Counter">
        <button onClick={increment}>Add</button>
        <p>{value}</p>
        <button onClick={decrement}>Subtract</button>
      </div>
    </>
  );
};

export default Hooks;
