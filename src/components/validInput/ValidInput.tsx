import { useState } from "react";

function ValidInput({
  inputState,
  errorMessage,
  type = "TEXT",
  className,
  style,
}: PropsType) {
  const [input, setInput] = inputState;
  const [inputType, setInputType] = useState<InputElementTypes>("text");
  function inputSetter(e: React.ChangeEvent<HTMLInputElement>) {
    handleInput(e.target.value, setInput, type, setInputType);
  }
  return (
    <div style={style} className={className}>
      <input type={inputType} value={input} onChange={inputSetter} />
      <p>{errorMessage}</p>
    </div>
  );
}

export default ValidInput;

function handleInput(
  RequestedValue: string,
  setter: React.Dispatch<React.SetStateAction<string>>,
  type: InputTypes,
  inputTypeSetter: React.Dispatch<React.SetStateAction<InputElementTypes>>
) {
  switch (type) {
    case "NUMBER":
      inputTypeSetter("number");
      if (
        RequestedValue === parseInt(RequestedValue).toString() ||
        RequestedValue === ""
      ) {
        setter(RequestedValue);
      } else if (
        RequestedValue.startsWith("0") &&
        RequestedValue.substring(1) === parseInt(RequestedValue).toString()
      ) {
        setter(RequestedValue.substring(1));
      }
      break;
    case "PHONE":
      inputTypeSetter("tel");
      if (RequestedValue.length > 15) {
        break;
      }
      if (
        RequestedValue === parseInt(RequestedValue).toString() ||
        RequestedValue === ""
      ) {
        setter(RequestedValue);
      } else if (
        RequestedValue.startsWith("0") &&
        RequestedValue.substring(1) === parseInt(RequestedValue).toString()
      ) {
        setter(RequestedValue);
      }
      break;
  }
}

type PropsType = {
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
  errorMessage?: string;
  type?: InputTypes;
  className?: string;
  style?: React.CSSProperties;
};

type InputTypes = "TEXT" | "NUMBER" | "PHONE" | "PASSWORD";
type InputElementTypes = "tel" | "number" | "text";
