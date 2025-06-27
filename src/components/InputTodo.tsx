import React, { useState } from "react";
import Input2, { type inputType } from "./Input2";

interface Props {
  inputValue: inputType;
  setInputValue: React.Dispatch<React.SetStateAction<inputType>>;
  //   click?: () => void;
}

function InputTodo({ inputValue, setInputValue }: Props) {
  //   const [input, setInputValue] = useState("");
  return (
    <div className="">
      <Input2 inputValuee={inputValue} setInputValuee={setInputValue} />
      {/* <input
        className="border-2 p-2 rounded-2xl w-[100%] border-blue-400 text-black-500"
        type="text"
        placeholder="Enter a Task"
        value={inputValue}
        onChange={(event) => {
          // console.log(event, "---e----")
          setInputValue(event.target.value);
        }}
      ></input> */}
      {/* <button onClick={click} className="border-2 px-5 py-1.5 rounded-xl">
        Add
      </button> */}
    </div>
  );
}

export default InputTodo;
