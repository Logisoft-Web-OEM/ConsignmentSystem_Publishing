// import React, { useState } from 'react';

// export default function CheckBox() {
//   const [checkedList, setCheckedList] = useState<string[]>([]);
//   const [isChecked, setIsChecked] = useState(false);

//   const checkedItemHandler = (value: string, isChecked: boolean) => {
//     if (isChecked) {
//       setCheckedList((prev) => [...prev, value]);

//       return;
//     }

//     if (!isChecked && checkedList.includes(value)) {
//       setCheckedList(checkedList.filter((item) => item !== value));

//       return;
//     }

//     return;
//   };

//   const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
//     setIsChecked(!isChecked);
//     checkedItemHandler(value, e.target.checked);

//     console.log(value, e.target.checked);
//   };

//   const checkBoxList = [
//     'Apple',
//     'Banana', 
//     'Pare', 
//     'Grape', 
//     'Melon', 
//     'Water Melon', 
//     'Pineapple'
//   ];

//   return (
//     <form>
//       <div>
//         {checkBoxList.map((item, idx) => (
//           <div className='mb-2 relative flex flex-items-center' key={idx}>
//             <input
//               className='appearance-none checked:bg-#4749fb checked:border-#4749fb checked:bg-[url(/btn-checkbox.svg)] bg-[url(/check.svg)] bg-center relative block w-5 h-5 rounded-sm bg-white border border-color-#BDBDBD'
//               type='checkbox'
//               id={item}
//               onChange={(e) => checkHandler(e, item)}
//             />
//             <label htmlFor={item} className='font-size-5'>
//               <span className='ml-3'>{item}</span>
//             </label>
//           </div>
//         ))}
//       </div>
//     </form>
//   );
// }
import React, { useState } from "react";

export default function CheckBox({ id, text, disabled, checked, className } : any) {
  const [ischecked, setChecked] = useState(false); 

  const checkHandled = ({}) => {
    setChecked(!ischecked);
  }

  return (
    <div className="flex items-center">
      <input id={id} type="checkbox" checked={checked} onChange={(e) => checkHandled(e)} disabled={disabled} className={className}/>
      <label>
        <span className="ml-2">{text}</span>
      </label>
    </div>
  )
}