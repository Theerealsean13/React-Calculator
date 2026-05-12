import { useState } from 'react';
import './Calculator.css';

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (currentValue === '0' && num !== '.') setCurrentValue(num);
    else if (num === '.' && currentValue.includes('.')) return;
    else setCurrentValue(currentValue + num);
  };

  const handleOperatorClick = (op) => {
    setPreviousValue(currentValue);
    setCurrentValue('0');
    setOperator(op);
  };

  const calculateResult = () => {
    if (!operator || !previousValue) return;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    let result = 0;

    switch (operator) {
      case '+': result = previous + current; break;
      case '-': result = previous - current; break;
      case '*': result = previous * current; break;
      case '/': 
        if (current === 0) { setCurrentValue("Error"); return; }
        result = previous / current; 
        break;
      default: return;
    }
    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperator(null);
  };

  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calc-container">
      <div className="calculator">
        <div className="display">
          <div className="previous">{previousValue} {operator}</div>
          <div className="current">{currentValue}</div>
        </div>

        <div className="keypad">
          <button className="span-two btn-clear" onClick={handleClear}>AC</button>
          <button className="btn-op" onClick={() => handleOperatorClick('/')}>÷</button>
          <button className="btn-op" onClick={() => handleOperatorClick('*')}>×</button>
          
          <button className="btn-num" onClick={() => handleNumberClick('7')}>7</button>
          <button className="btn-num" onClick={() => handleNumberClick('8')}>8</button>
          <button className="btn-num" onClick={() => handleNumberClick('9')}>9</button>
          <button className="btn-op" onClick={() => handleOperatorClick('-')}>−</button>
          
          <button className="btn-num" onClick={() => handleNumberClick('4')}>4</button>
          <button className="btn-num" onClick={() => handleNumberClick('5')}>5</button>
          <button className="btn-num" onClick={() => handleNumberClick('6')}>6</button>
          <button className="btn-op" onClick={() => handleOperatorClick('+')}>+</button>
          
          <button className="btn-num" onClick={() => handleNumberClick('1')}>1</button>
          <button className="btn-num" onClick={() => handleNumberClick('2')}>2</button>
          <button className="btn-num" onClick={() => handleNumberClick('3')}>3</button>
          <button className="span-two-vertical btn-equals" onClick={calculateResult}>=</button>
          
          <button className="span-two btn-num" onClick={() => handleNumberClick('0')}>0</button>
          <button className="btn-num" onClick={() => handleNumberClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;