import React, { useState } from "react";

const Optimi = () => {
  const [show, setShow] = useState(true);
  const [key, setKey] = useState("");
  return (
    <>
      <div>Secret Key</div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "reveal" : "hide"}
      </button>
      <h1>{show ? "**********" : "secret key"}</h1>
    </>
  );
};

export default Optimi;
