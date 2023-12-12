import React, { useState } from 'react';

export default function Tab() {
  const [currentTab, clickTab] = useState(0);

  const selectMenuHandler = (index: any) => {
    clickTab(index);
  };

  const menuArr = [
    { id: 'Tab1', content: 'Tab ONE' },
    { id: 'Tab2', content: 'Tab TWO' },
    { id: 'Tab3', content: 'Tab THREE' },
  ];

  return (
    <div className='flex flex-col'>
      <ul>
        {menuArr.map((item, index) => (
          <li 
            className={index === currentTab ? "submenu focused" : "submenu" }
            onClick={() => selectMenuHandler(index)}
            key={index}
          >
            {item.id}
          </li>
        ))}
      </ul>
      <div className='p-2 mt-5'>
        <p className='font-size-5'>{menuArr[currentTab].content}</p>
      </div>
    </div>
  );
}