import type { Todotype } from "../TodoList";

interface TodoProps {
  todo: Todotype[];
}

function Todo({ todo }: TodoProps) {
  // const [todo, setTodoValue]= useState([{
  //     Value:"Something"
  // }])
  return (
    <h1 className="gap-3 flex flex-col border-2 border-white rounded-xl w-[100%] py-3 px-3 shadow-lg hover:scale-[1.03]">
      {todo.map((curr, ind) => {
        if (curr.Value) {
          return (
            <p
              className="rounded-xl text-black font-extrabold text-xl font-serif p-2 border-b-2 shadow-md "
              key={ind}
            >
              {curr.Value}
            </p>
          );
        } else {
          return <></>;
        }
      })}
    </h1>
  );
}

export default Todo;
