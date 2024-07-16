import { useState } from "react";
import Task from "./Task";

const outerBox = {
  border: "1px solid black",
  height: "60vh",
  width: "50vw",
  marginTop: 50,
  marginLeft: 190,
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
};

const innerBox = {
  display: "flex",
  flexDirection: "column",
  margin: 10,
  padding: 20,
};

function TodoL() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // console.log(title, desc);

  const submithandler = (e) => {
    e.preventDefault();

    if (title.trim() !== "" && desc.trim() !== "") {
      setTask([...task, { title: title, description: desc }]); //new thing to learn concept
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      <div style={outerBox}>
        <form onSubmit={submithandler}>
          {/* add title */}
          <label style={innerBox} htmlFor="title">
            Title
          </label>
          <input
            style={innerBox}
            type="text"
            placeholder="enter your title!"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              // console.log(setTitle);
            }}
          />
          {/* add description */}
          <label style={innerBox} htmlFor="desc">
            Description
          </label>
          <input
            style={innerBox}
            type="text"
            placeholder="enter your summary!"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
              // console.log(setDesc);
            }}
          />
          {/* add button to add */}
          <button
            style={innerBox}
            type="submit"
            onClick={submithandler}
            disabled={title.trim() == "" || desc.trim() == ""} //it's anew trickj
          >
            Commit
          </button>
        </form>
      </div>
      {task.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} /> //gotta learn this trick
      ))}
    </>
  );
}

export default TodoL;
