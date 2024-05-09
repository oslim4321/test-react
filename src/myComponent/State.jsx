import React from "react";

const State = () => {
  // useState  -> destructure 2 thing out of this state,
  // state ->> just a variable
  // setState->> function thhat u can use to update ur tate

  // state -> 30
  // setState -> 40

  // let age = 40

  const [first, setfirst] = useState(30);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default State;
