import React, { useState } from 'react';

function InsuranceForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Get Quote</button>
    </form>
  );
}

export default InsuranceForm;
