import { useState } from "react";
import InputTodo from "./components/InputTodo";
import Todo from "./components/Todo";
import CustomButton from "./components/customButton";
import type { inputType } from "./components/Input2";
import { prototype } from "postcss/lib/previous-map";

export type Todotype = {
  Value: string;
};

function TodoList() {
  const [inputValuee, setInputValuee] = useState<inputType>({
    inpVal: "",
    placeHolder: "Enter your Name",
    type: "text",
  });
  const [todo, setTodoValue] = useState<Todotype[]>([
    {
        Value: ""
    },
  ]);
  const onclick = () => {
    console.log(inputValuee);
    setTodoValue((prev) => {
      return [
        ...prev,
        {
          Value: inputValuee.inpVal,
        },
      ];
    });
    setInputValuee((prev) => {
      return {...prev,inpVal:""}
    });
    // console.log("Clicked");
  };
  prototype


  return (
    <>
      <div className="flex justify-center gap-3">
        <InputTodo
          // click={onclick}
          inputValue={inputValuee}
          setInputValue={setInputValuee}
        />
        <CustomButton click={onclick} />
      </div>
      <div className="w-full px-10 py-10 ">
        <Todo todo={todo} />
      </div>
    </>
  );
}

export default TodoList;
