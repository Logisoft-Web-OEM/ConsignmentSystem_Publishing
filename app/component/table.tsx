import { useState } from "react";

export default function Table(
  { 
    headers, 
    items = [], 
    selectable = false, 
    itemKey, 
    updateSelection,
  }: any) {
    if (!headers || !headers.length) {
      throw new Error('<DataTable /> headers is required.')
    }
  const headerKey = headers.map((header: any) => header.value);
    if (!itemKey) {
      itemKey = headerKey[0];
    }

  const [selection, setSelection] = useState(new Set());
  const onChangeSelect = (value: any) => {
  const newSelection = new Set(selection);

    if (newSelection.has(value)) {
      newSelection.delete(value);
    } else {
      newSelection.add(value);
    }
    setSelection(newSelection);
    updateSelection([newSelection]);
  };
  
  const onChangeSelectAll = (e: any) => {
    if (e.target.checked) {
      const allCheckedSelection = new Set(
        getAbledItems(items).map((item: any) => item[itemKey])
      );
      setSelection(allCheckedSelection);
      updateSelection([allCheckedSelection]);
  } else {
      setSelection(new Set());
      updateSelection([]);
    }
  };
  const getAbledItems = (items: any) => {
    return items.filter(({ disabled }: any) => !disabled );
  };
  const isSelectedAll = () => {
    return selection.size === getAbledItems(items).length;
  };
  return (
    <table className="w-full table-fixed p-0 m-0 border-collapse border-spacing-0 box-border rounded-xl border-1">
      <thead>
        <tr>
          {
            selectable && 
            <th className="p-0 color-#666666 bg-#fafafa box-border text-xs text-center align-middle h-10.5">
              <input 
                type="checkbox"
                checked={isSelectedAll()}
                onChange={onChangeSelectAll}
              />
            </th>
          }
          {
            headers.map((header: any) => 
              <th key={header.text} className="p-0 color-#666666 bg-#fafafa box-border text-xs text-center align-middle h-10.5">
                {header.text}
              </th> 
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          items.map((item: any, index: any) => (
            <tr 
              key={index} 
              className={
              `
                ${selection.has(item[itemKey]) ? 'select_row': ''} 
                ${item.disabled ? 'disabled_row' : ''}
              `
            }>
              {
                selectable && 
                  <td className="box-border text-xs text-center align-middle h-10.5 py-3 px-3.5">
                    <input 
                      type="checkbox"
                      disabled={item.disabled}
                      checked={selection.has(item[itemKey])}
                      onChange={() => onChangeSelect(item[itemKey])}   
                    />
                  </td>
              }
              { 
                headerKey.map((key: any) => 
                  <td key={key + index} className="box-border text-xs text-center align-middle h-10.5 py-3 px-3.5">
                    {item[key]}
                  </td>
                )
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}