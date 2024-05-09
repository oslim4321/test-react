import React, { useRef } from "react";

const UseRef = () => {
  const inpRef = useRef();
  const h1Tag = useRef();

  function handleClick() {
    console.log(inpRef.current.value);
    console.log(h1Tag.current.innerHTML);

    h1Tag.current.innerHTML = "i am a guy";
    inpRef.current.value = "i am a gal";
  }
  return (
    <div>
      <input ref={inpRef} type="text" />

      <h1 ref={h1Tag}>i am an h1</h1>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default UseRef;
