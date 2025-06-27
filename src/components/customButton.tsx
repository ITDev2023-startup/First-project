
interface ButtonProps {
  click(): void;
}
export default function CustomButton({ click }: ButtonProps) {
  //   const [button, setButton] = useState();

  return (
    <div className="">
      <button onClick={click} className="border-2 px-7 py-2 rounded-xl border-blue-500 text-white bg-black">
        Add
      </button>
    </div>
  );
}
