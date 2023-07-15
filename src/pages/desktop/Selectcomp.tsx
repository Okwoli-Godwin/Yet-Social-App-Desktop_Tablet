import { useState } from "react"

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    onChange: (selectValue: string) => void;
}

const Selectcomp: React.FC<SelectProps> = ({ options, onChange }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
        onChange(value)
    }
  return (
      <select value={selectedValue} onChange={handleSelectChange}>
          <option value="">Everyone</option>
          {options.map((option) => (
              <option key={option.value} value={option.value}>
                  {option.label}
              </option>
          ))}
    </select>
  )
}

export default Selectcomp