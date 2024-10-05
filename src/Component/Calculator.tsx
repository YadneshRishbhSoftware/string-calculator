// src/components/Calculator.tsx

import React, { useState } from 'react';
import { add } from '../Calculatorfun/Calculator';

const Calculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(''); 
  const [sum, setSum] = useState<number | null>(null); 
  const [error, setError] = useState<string | null>(null);
  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
        // Reset previous error
        setError(null);
  
        // Call the add function
        const sum = add(inputValue);
  
        // Set the result
        setSum(sum);
      } catch (e: any) {
        // Set the error message
        setError(e.message);
        setSum(null);
      }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          placeholder="Enter numbers separated by commas"
        />
        <button type="submit">Calculate Sum</button>
      </form>
      {sum !== null && <p>The sum is: {sum}</p>}
      {error && <div className="error-message">Error: {error}</div>}
    </div>
  );
};

export default Calculator;
