interface AyushInter {
  name: string;
  age: number;
  isValid: boolean;
}

function RenderAnyName({ age, isValid, name }: AyushInter) {
  // const isValid = false

  return (
    <div className="border rounded-2xl hover:shadow transition-all duration-200 hover:scale-[1.02]">
      My Name is{" "}
      <span className={`font-bold ${isValid?"text-green-400":"text-red-300"} text-2xl`}>
        {isValid ? name : "Not Allowed "}{" "}
      </span>{" "}
      and i am{" "}
      <span className={`font-bold ${isValid?"text-green-400":"text-red-300"} text-2xl`}>
        {isValid ? age : "Not Allowed "}{" "}
      </span>{" "}
      years old....
    </div>
  );
}
export default RenderAnyName;
