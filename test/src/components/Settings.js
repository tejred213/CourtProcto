import React, { useState } from 'react';

// export default Settings;
function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [textSize, setTextSize] = useState('text-base');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleTextSizeChange = (event) => {
        setTextSize(event.target.value);
    };

    const saveChanges = () => {
        // Logic to save changes
        localStorage.setItem('settings', JSON.stringify({ darkMode, textSize }));
        console.log('Changes saved:', { darkMode, textSize });
    };

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} p-6 min-h-screen`}>
            <h1 className={`text-2xl font-bold mb-4 ${textSize}`}>Settings</h1>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded shadow-md`}>
                <div className="flex items-center justify-between mb-4">
                    <label className={`block ${textSize} mb-2`} htmlFor="darkModeToggle">
                        Dark Mode
                    </label>
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? 'Disable' : 'Enable'}
                    </button>
                </div>
                <div className="mb-4">
                    <label className={`block ${textSize} mb-2`} htmlFor="textSize">
                        Text Size
                    </label>
                    <select
                        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
                        id="textSize"
                        value={textSize}
                        onChange={handleTextSizeChange}
                    >
                        <option value="text-sm">Small</option>
                        <option value="text-base">Medium</option>
                        <option value="text-lg">Large</option>
                        <option value="text-xl">Extra Large</option>
                    </select>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={saveChanges}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;