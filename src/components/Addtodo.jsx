import { useState } from "react";

function AddToDo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        style={{
          width: "500px",
          height: "50px",
          border: "2px solid black",
          borderRadius: "10px",
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bold",
          
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Task"
      />
      <button
        style={{
          height: "52px",
            border: "1px solid black",
            padding: "10px",
            marginLeft:"10px",
            borderRadius: "5px",
            backgroundColor: "black",
            color:"white",
            fontWeight:"bold"
        }}
        onClick={() => handleAdd(text)}
      >
        Add-Task
      </button>
    </div>
  );
}
export default AddToDo;
