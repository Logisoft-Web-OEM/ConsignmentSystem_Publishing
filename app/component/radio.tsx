// import React from 'react';

import { useState } from "react";

// export default function Radio() {
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
//     <div>
//       {checkBoxList.map((item, idx) => (
//         <div className='mb-2 relative flex flex-items-center' key={idx}>
//           <input
//             className='appearance-none checked:bg-#0cefc1 checked:border-#0cefc1 checked:bg-[url(/radio.svg)] bg-center bg-no-repeat relative block w-5 h-5 rounded-100 bg-white border border-color-#BDBDBD'
//             type='radio'
//             id={item}
//           />
//           <label htmlFor={item} className='font-size-5'>
//             <span className='ml-3'>{item}</span>
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Radio({ id, text, disabled, checked, className }: any) {
  const [ischecked, setChecked] = useState(false); 

  const checkHandled = ({}) => {
    setChecked(!ischecked);
  }

  return (
    <div className="flex items-center">
    <input id={id} type="radio" checked={checked} onChange={(e) => checkHandled(e)} disabled={disabled} className={className}/>
    <label>
      <span className="ml-2">{text}</span>
    </label>
  </div>
  )
}