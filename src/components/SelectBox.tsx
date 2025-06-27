
interface SelectProps {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}
export default function SelectBox({
  selectValue,
  setSelectValue,
}: SelectProps) {
  // const [selectValue, setSelectValue] = useState("")

  return (
    <div>
      <select
        className="border-2 border-gray-400 p-2 rounded-2xl"
        value={selectValue}
        onChange={(event) => {
          // console.log(event, "---e----")
          setSelectValue(event.target.value);
        }}
      >
        <option>Akash</option>
        <option>Ayush</option>
        <option>Prathamesh</option>
      </select>
    </div>
  );
}
