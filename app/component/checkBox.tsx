import React, { useCallback, useState } from 'react';

export default function CheckBox() {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);

    console.log(value, e.target.checked);
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('checkedList:', checkedList);
    },
    [checkedList]
  );

  const checkBoxList = [
    'Apple',
    'Banana', 
    'Pare', 
    'Grape', 
    'Melon', 
    'Water Melon', 
    'Pineapple'
  ];

  return (
    <form onSubmit={onSubmit}>
      <div>
        {checkBoxList.map((item, idx) => (
          <div className='mb-2 relative flex flex-items-center' key={idx}>
            <input
              className='appearance-none checked:bg-#4749fb checked:border-#4749fb checked:bg-[url(/btn-checkbox.svg)] bg-[url(/check.svg)] bg-center relative block w-5 h-5 rounded-sm bg-white border border-color-#BDBDBD'
              type='checkbox'
              id={item}
              onChange={(e) => checkHandler(e, item)}
            />
            <label htmlFor={item} className='font-size-5'>
              <span className='ml-3'>{item}</span>
            </label>
          </div>
        ))}
      </div>

      <button type='submit' className='p-2 bg-#4749fb rounded color-white hover-bg-#3436be'>submit</button>
    </form>
  );
}