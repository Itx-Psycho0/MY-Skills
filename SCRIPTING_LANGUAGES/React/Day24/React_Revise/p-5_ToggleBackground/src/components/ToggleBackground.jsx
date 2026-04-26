import React from 'react'
import { useState, useEffect } from 'react'

const ToggleBackground = () => {
    const [theme, setTheme] = useState('white');
    const [bodyBgColor, setBodyBgColor] = useState('white');
    const [textColor, setTextColor] = useState('black');

    function handleToggle() {
        if (theme === 'white') {
            setTheme('black');
            setBodyBgColor('#1a1a1a');
            setTextColor('white');
        } else {
            setTheme('white');
            setBodyBgColor('white');
            setTextColor('black');
        }
    }

    useEffect(() => {
        // Set body styles to cover the entire window
        document.body.style.backgroundColor = bodyBgColor;
        document.body.style.color = textColor;
    }, [bodyBgColor, textColor]);

    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <div className='theme' style={{ border: `1px solid ${textColor}`, width: 'fit-content' }}>THEME</div>
            <button onClick={handleToggle} style={{ backgroundColor: bodyBgColor, color: textColor, border: `1px solid ${textColor}` }}>
                {theme === 'white' ? 'dark' : 'light'}
            </button>
        </div>
    )
}

export default ToggleBackground