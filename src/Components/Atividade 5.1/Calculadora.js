import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [highlightOperation, setHighlightOperation] = useState(false);

  const handleNumberClick = (number) => {
    if (displayValue === '0' || highlightOperation) {
      setDisplayValue(number.toString());
      setHighlightOperation(false);
    } else {
      setDisplayValue(displayValue + number.toString());
    }
  };

  const handleOperatorClick = (operator) => {
    setHighlightOperation(true);
    // Realize a lógica necessária para executar a operação desejada
  };

  const handleClear = () => {
    setDisplayValue('0');
    setHighlightOperation(false);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
          <button onClick={handleClear}>AC/C</button>
          <button onClick={() => handleOperatorClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
