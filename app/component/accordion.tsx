import { useState } from "react";

export default function Accordion(props: any) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="relative">
      <div className="relative p-2.5 flex justify-between bg-#41C2D1">
        <span className="color-white">{props.title}</span>
        <button
          className="absolute block top-0 left-0 w-full h-full c-transparent"
          onClick={toggle}
          type="button"
        />
        <img 
          src="/ico-dropdown-white.svg" 
          onClick={() => setIsShowing(!isShowing)} 
          className={`dropdown-arrow ${isShowing ? "dropdown-arrow-active" : "dropdown-arrow"}`}
        />
      </div>
      <div 
        className={`pa-5 ${isShowing ? "isBlock" : "isNone"}`} 
        dangerouslySetInnerHTML={{ __html: props.content }} 
      />
    </div>
  );
}
