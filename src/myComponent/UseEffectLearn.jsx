import React, { useEffect, useState } from "react";

const UseEffectLearn = () => {
  const [reaction, setreaction] = useState(10);
  const [data, setdata] = useState(400);

  // console.log("hello i am here");

  function getDataFromDB() {}

  useEffect(() => {
    console.log("hello i am here");
  }, [reaction]);

  return (
    <div>
      <h2>{data}</h2>
      <button onClick={() => setdata(Math.floor(Math.random() * 3000))}>
        Get Random Number
      </button>

      <button onClick={() => setreaction("hehe")}>Update Reaction</button>
    </div>
  );
};

export default UseEffectLearn;
