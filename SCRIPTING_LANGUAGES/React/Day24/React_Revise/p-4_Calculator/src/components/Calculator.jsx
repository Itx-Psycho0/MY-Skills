import React from 'react'
import { useState } from 'react'
const Calculator = () => {

    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');

    // ==========================

    const clearValue = () => {
        setDisplay('');
        setResult('');
    }

    const deleteValue = () => {
        setDisplay(display.slice(0, -1));
    }

    const calculateValue = () => {
        setResult(eval(display));
    }
    // =============================

    const addValue = () => {
        setDisplay(display + "+");
    }
    const subValue = () => {
        setDisplay(display + "-");
    }
    const mulValue = () => {
        setDisplay(display + "*");
    }
    const divValue = () => {
        setDisplay(display + "/");
    }
    // =============================



    return (
        <div>
            <div className="display">{result ? result : display}</div>
            <div className="buttons">
                <button className="btn-clear" onClick={clearValue}>AC</button>
                <button className="btn-clear" onClick={deleteValue}>C</button>
                <button className="btn-operator" onClick={() => setDisplay(display + "%")}>%</button>

                <button className="btn-number" onClick={() => setDisplay(display + "7")}>7</button>
                <button className="btn-number" onClick={() => setDisplay(display + "8")}>8</button>
                <button className="btn-number" onClick={() => setDisplay(display + "9")}>9</button>
                <button className="btn-operator" onClick={addValue}>+ </button>
                <button className="btn-number" onClick={() => setDisplay(display + "4")}>4</button>
                <button className="btn-number" onClick={() => setDisplay(display + "5")}>5</button>
                <button className="btn-number" onClick={() => setDisplay(display + "6")}>6</button>
                <button className="btn-operator" onClick={subValue}>-</button>
                <button className="btn-number" onClick={() => setDisplay(display + "1")}>1</button>
                <button className="btn-number" onClick={() => setDisplay(display + "2")}>2</button>
                <button className="btn-number" onClick={() => setDisplay(display + "3")}>3</button>
                <button className="btn-operator" onClick={mulValue}>*</button>
                <button className="btn-number" onClick={() => setDisplay(display + "0")}>0</button>
                <button className="btn-operator" onClick={() => setDisplay(display + ".")}>.</button>
                <button className="btn-operator" onClick={() => calculateValue()}> =</button>
                <button className="btn-operator" onClick={divValue}>/</button>
            </div>
        </div>
    )
}

export default Calculator