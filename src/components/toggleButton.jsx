import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import 'primereact/resources/themes/saga-blue/theme.css';  // Example theme
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Icons

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setDarkMode(e.value);
  };

  return (
    <div className="p-d-flex p-ai-center">
      <span>Light</span>
      <InputSwitch
        checked={darkMode}
        onChange={handleChange}
        className="p-inputswitch-sm"
        style={{ width: '60px', height: '30px' }}
      />
      <span>Dark</span>
    </div>
  );
}

export default ThemeSwitcher;
