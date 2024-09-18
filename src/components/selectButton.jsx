import React from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { useTheme } from '../context/themeContext';

const options = [
  { label: '', value: 'light' },
  { label: '', value: 'dark' }
];

function PSelectButton() {
  const { theme, setTheme } = useTheme(); // Use setTheme here

  return (
    <SelectButton
      value={theme}
      options={options}
      onChange={(e) => setTheme(e.value)} // Ensure setTheme is called correctly
      className="p-button-rounded"
    />
  );
}

export default PSelectButton;