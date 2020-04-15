import { useState } from "react";

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  const reset=data=>{
      setValue(data);
  }

  return { value, onChange, reset };
};