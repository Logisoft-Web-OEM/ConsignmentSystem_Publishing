import { useState } from "react";

export default function Switch(props: any) {
  const [checked, setChecked] = useState(false); 

  const swichClick = () => {
    setChecked(!checked);
  };
  
  return (
    <>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        type="checkbox"
        id={"switch"}
        className="h-0 w-0 hidden"
      />
      <label
        style={{ background: props.isOn && props.onColor }}
        className="flex items-center justify-between cursor-pointer w-8 h-5 bg-gray rounded-3xl relative"
        htmlFor={"switch"}
        onClick={() => swichClick()}
      >
        <span className={`switch-button ${checked ? "switch-button-active" : "" }`} />
        <span className="ml-10 text-base">{props.text}</span>
      </label>
    </>
  )
}