export default function Select({ value, options, onChange }: any) {

  return (
    <select value={value} onChange={onChange} className="select-box">
      {options.map((option: any) => (
        <option value={option.value} className="option-item">{option.label}</option>
      ))}
    </select>
  )
}