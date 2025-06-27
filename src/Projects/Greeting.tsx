import React from "react";
interface prop {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

function Greeting({ name, setName }: prop) {
  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="Enter your name"
        onChange={e=>setName(e.target.value)}
      >
      </input>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default Greeting;
