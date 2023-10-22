import React from 'react';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: Option | null;
  onChange: (value: Option | null) => void;
  className?: string;
}

const SelectInput: React.FC<Props> = ({ options, value, onChange, className }) => {
  return (
    <div className={className}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: 'none',
            width: '100%',
            borderColor: state.isFocused ? '#ff5733' : provided.borderColor, // Change the border color on focus
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#3498db' : 'white',
            color: state.isSelected ? 'white' : 'black',
          }),
        }}
      />
    </div>
  );
};

export default SelectInput;
