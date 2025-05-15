import { useState } from "react";

const InputContainer =
  (Component: any): any =>
  (props: any): any => {
    const [value, setValue] = useState<any>(props.value);

    return <Component {...props} value={value} setValue={setValue} />;
  };

export default InputContainer;
