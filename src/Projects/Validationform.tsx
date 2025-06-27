import React, { useEffect, useState } from "react";

export type validInput = {
  name: string;
  email: string;
  password: string;
};

interface validation {
  validDetail: validInput;
  setValidDetail: React.Dispatch<React.SetStateAction<validInput>>;
}

export default function Validationform({
  validDetail,
  setValidDetail,
}: validation) {
  // const[validDetail, setValidDetail] = useState([{
  //     name: "",
  //     email: "",
  //     password: 12345
  // }])
  useEffect(() => {
    if (validDetail.email.includes("@soliteck.com")) {
      if (validDetail.password === "12345") {
        setTimeout(() => {
          alert("You'r logged in");
        }, 1000);
      }
    }
  }, [validDetail.password, validDetail.email]);

  return (
    <>
      <div className="flex flex-col items-center gap-3 p-8">
        <input
          className="border-2 rounded-xl w-[25%] p-2
        hover:scale-[1.10] transition-all hover:text-shadow-blue-950 hover:shadow-2xl"
          type="text"
          placeholder="Enter your Name"
          value={validDetail.name}
          onChange={(e) => {
            setValidDetail((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            });
          }}
        ></input>
        <input
          className="border-2 rounded-xl w-[25%] p-2 hover:scale-[1.10] transition-all hover:text-shadow-blue-950 hover:shadow-2xl"
          type="text"
          placeholder="Enter your Email"
          value={validDetail.email}
          onChange={(e) => {
            setValidDetail((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            });
          }}
        ></input>
        <input
          className="border-2 rounded-xl w-[25%] p-2 hover:scale-[1.10] transition-all hover:text-shadow-blue-950 hover:shadow-2xl"
          type="text"
          placeholder="Enter 6 digit Password"
          value={validDetail.password}
          onChange={(e) => {
            setValidDetail((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
        />
        {/* <button type="submit">Submit</button> */}
      </div>
    </>
  );
}

// export default Validationform;
