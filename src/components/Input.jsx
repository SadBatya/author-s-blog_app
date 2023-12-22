import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <>
      <input className="p-2 border border-black" {...props} ref={ref} />
    </>
  );
});

export default Input;
