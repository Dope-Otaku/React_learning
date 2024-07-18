import { useState, useEffect } from "react";

// useState
const Hooks = () => {
  //   let a = value;
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("hello world");
  }, [value]);

  return (
    <>
      {/* we need to  create a counter using useState  */}
      <div className="Counter">
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Add
        </button>
        <p>{value}</p>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

// const Hooks = () => {
//   return <>hello</>;
// };

export default Hooks;
