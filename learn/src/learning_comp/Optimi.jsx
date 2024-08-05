import React, { useEffect, useMemo, useState } from "react";

const Optimi = () => {
  const [show, setShow] = useState(true);
  //   const [id, setId] = useState("");

  //   useEffect(() => {
  //     setId(Math.random() * 12);
  //   }, []);

  //   const id = Math.random() * 12;
  const id = useMemo(() => Math.random() * 12, []); // useMemo is same as useEffect but onlt calls when the the function is triggered and after that it is shut down!

  return (
    <>
      <div>Secret Key: {id}</div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "reveal" : "hide"}
      </button>
      <h1>{show ? "**********" : id}</h1>
    </>
  );
};

export default Optimi;
