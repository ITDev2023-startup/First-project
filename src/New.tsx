import  { useState } from "react";
import Validationform from "./Projects/Validationform";
import type { validInput } from "./Projects/Validationform";

function New() {
  const [validDetail, setValidDetail] = useState<validInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <>
      <Validationform
        validDetail={validDetail}
        setValidDetail={setValidDetail}
      />
    </>
  );
}

export default New;
