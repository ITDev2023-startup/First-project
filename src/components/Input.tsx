import { useState } from "react";

interface InputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ inputValue, setInputValue }: InputProps) {
  // const {inputValue,setInputValue} = Props

  return (
    <div className="">
      <input
        className="p-4 border-[2px] border-gray-400 rounded-3xl"
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(event) => {
          // console.log(event, "---e----")
          setInputValue(event.target.value);
        }}
      />
    </div>
  );
}
