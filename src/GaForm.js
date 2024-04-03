import React, { useState } from 'react';

function GaForm() {
  const [gaType, setGaType] = useState('');
  const [travelClass, setTravelClass] = useState('');
  const [startDate, setStartDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'gaType':
        setGaType(value);
        break;
      case 'travelClass':
        setTravelClass(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!gaType || !travelClass || !startDate) {
      setErrorMessage('Bitte füllen Sie alle Felder aus.');
      return;
    }

    // Handle form submission logic here (e.g., call an API)
    console.log('GA Bestellung:', { gaType, travelClass, startDate });

    // Clear form after successful submission (optional)
    setGaType('');
    setTravelClass('');
    setStartDate('');
    setErrorMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="sbb-form">
      <h2>Wählen Sie Ihr GA (mit automatischer Verlängerung)</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="sbb-form-group">
        <label htmlFor="gaType">GA Typ:</label>
        <select id="gaType" name="gaType" value={gaType} onChange={handleChange}>
          <option value="">-- Bitte wählen --</option>
          <option value="GA Erwachsene 25-64/65 Jahre">GA Erwachsene 25-64/65 Jahre</option>
          <option value="GA Senior ab 64/65 Jahren">GA Senior ab 64/65 Jahren</option>
          <option value="GA Junior 16-25 Jahre">GA Junior 16-25 Jahre</option>
          {/* Add options for other GA types */}
        </select>
      </div>
      <div className="sbb-form-group">
        <label htmlFor="travelClass">Reiseklasse:</label>
        <select id="travelClass" name="travelClass" value={travelClass} onChange={handleChange}>
          <option value="">-- Bitte wählen --</option>
          <option value="2. Klasse">2. Klasse</option>
          <option value="1. Klasse">1. Klasse</option>
        </select>
      </div>
      <div className="sbb-form-group">
        <label htmlFor="startDate">Ich bestelle ein GA gültig ab:</label>
        <input type="date" id="startDate" name="startDate" value={startDate} onChange={handleChange} />
      </div>
      <button type="submit" className="sbb-button">
        GA bestellen
      </button>
    </form>
  );
}

export default GaForm;
