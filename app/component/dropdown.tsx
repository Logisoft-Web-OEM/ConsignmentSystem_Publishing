import React, { useState } from 'react';

export default function Dropdown({
  selected,
  setSelected,
  item,
}: any) {
  const [dropdownState, setDropdownState] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  // const dropdownItems = [
  //   {
  //     id: 1,
  //     url: "link1",
  //     text: "option1"
  //   },
  //   {
  //     id: 2,
  //     url: "link2",
  //     text: "option2"
  //   },
  //   {
  //     id: 3,
  //     url: "link3",
  //     text: "option3"
  //   },
  //   {
  //     id: 4,
  //     url: "link4",
  //     text: "option4"
  //   },
  //   {
  //     id: 5,
  //     url: "link5",
  //     text: "option5"
  //   }
  // ];

  return (
    <>
      <div>
        <button onClick={() => handleDropdownClick()} className="dropdown-button">
          {selected ? selected : "선택하세요"}
          <img 
            src="/ico-dropdown-dark.svg" 
            onClick={() => setRotate(!rotate)} 
            className={`dropdown-arrow ${dropdownState ? "dropdown-arrow-active" : "dropdown-arrow"}`}
          />
        </button>
        <ul className={`dropdown-content ${dropdownState ? "isBlack" : "isNone"}`}>
          {item.map((item: any) => (

            <li
              className="dropdown-item"
            >
              <a
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(item);
                  setDropdownState(false);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
