import React, { useState } from 'react';
import InsuranceForm from './InsuranceForm';
import QuoteDisplay from './QuoteDisplay';

function App() {
  const [quote, setQuote] = useState(null);

  const handleFormSubmit = (data) => {
    const calculatedQuote = calculateInsuranceQuote(data);
    setQuote(calculatedQuote);
  };

  return (
    <div className="App">
      <h1>Insurance Quote Generator</h1>
      <InsuranceForm onSubmit={handleFormSubmit} />
      {quote && <QuoteDisplay quote={quote} />}
    </div>
  );
}

function calculateInsuranceQuote(data) {
  // Simple quote calculation logic (e.g., age-based)
  let basePrice = 100;
  if (data.age < 25) {
    basePrice += 50;
  }
  return basePrice;
}

export default App;
