export type inputType = {
  inpVal: string;
  placeHolder: string;
  type: string;
};

interface inputProps{
  inputValuee: inputType;
  setInputValuee: React.Dispatch<React.SetStateAction<inputType>>;
}

export default function Input2({ inputValuee,setInputValuee }: inputProps) {
  // const [inputValuee, setInputValuee] = useState<inputType>({
  //   inpVal: "",
  //   placeHolder: "Enter your Name",
  //   type: "text",
  // });

  return (
    <div>
      <input className="border-2 p-2 rounded-2xl w-[100%] border-blue-400 text-black-500"
        type={inputValuee.type}
        placeholder={inputValuee.placeHolder}
        value={inputValuee.inpVal}
        onChange={(event) => {
          //   console.log();
          setInputValuee((prev) => {
            return {
              ...prev,
              inpVal: event.target.value,
            };
          });
        }}
      />
    </div>
  );
}
