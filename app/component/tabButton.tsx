import { useState } from "react";

export default function TabButton() {
  const [openTab, setOenTab] = useState(1);

  return (
    <div className="grid grid-cols p-4 mt-2">
      <ul className="flex mb-0 flex-wrap flex-row" role="tablist">
        <li className="w-1/4 flex-auto text-center">
          <a
            className={`text-xs px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer
            ${
              openTab === 1
                ? "text-white bg-gray-600"
                : "text-gray-600 bg-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOenTab(1);
            }}
          >
            tab01
          </a>
        </li>
        <li className="w-1/4 flex-auto text-center">
          <a
            className={`text-xs px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer
            ${
              openTab === 2
                ? "text-white bg-gray-600"
                : "text-gray-600 bg-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOenTab(2);
            }}
          >
            tab02
          </a>
        </li>
        <li className="w-1/4 flex-auto text-center">
          <a
            className={`text-xs px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer
            ${
              openTab === 3
                ? "text-white bg-gray-600"
                : "text-gray-600 bg-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOenTab(3);
            }}
          >
            tab03
          </a>
        </li>
      </ul>
      <div className="relative flex flex-col min-w-0 break-words h-64 border-2 border-gray-500 text-3xl text-center">
        <div className="flex-auto">
          <div className="tab-content tab-space">
            <div
              className={` ${openTab === 1 ? "block" : "hidden"}`}
              id="link1"
            >
              tab01
            </div>
            <div
              className={` ${openTab === 2 ? "block" : "hidden"}`}
              id="link2"
            >
              tab02
            </div>
            <div
              className={` ${openTab === 3 ? "block" : "hidden"}`}
              id="link2"
            >
              tab03
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
