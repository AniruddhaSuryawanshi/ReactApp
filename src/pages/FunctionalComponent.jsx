import React, { useState } from "react";

function FunctionalComponent(props) {
  const [count, setcount] = useState(0);
  const sub = () => {
    setcount(count - 1);
  };
  const [changename, setchangename] = useState("");
  const { name, height, company, setname } = props;

  return (
    <div>
      <p>This is functional component</p>
      <br />
      <button onClick={() => setcount(count + 1)}>
        click on me to increment count
      </button>
      <button onClick={sub}>click on me to decrement count</button>
      <p>
        My Name is {name}, my height is {height}, my company is {company}
      </p>
      <input onChange={(e) => setchangename(e.target.value)}></input>
      <button onClick={() => setname(changename)}>Change name </button>
      <h2>{count}</h2>
    </div>
  );
}

export default FunctionalComponent;
