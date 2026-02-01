import React, { useState } from 'react';
import './DiagnosisForm.css';

const DiagnosisForm = ({ onStart }) => { 
  const [formData, setFormData] = useState({
    fullName: '', age: '', weight: '', height: '', queueNumber: '', areaOfConcern: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const areas = ['Head', 'Breasts', 'Pelvis', 'Pelvic floor', 'Urinary System', 'Skin', 'Hormonal'];

  return (
    <div className="form-page">
      <div className="cards-container">
        {/* Patient Info Card */}
        <div className="form-card">
          <h2>Patient Information</h2>
          <div className="input-grid">
            <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
            <input type="text" name="age" placeholder="Age" onChange={handleChange} />
            <input type="text" name="weight" placeholder="Weight (kg)" onChange={handleChange} />
            <input type="text" name="height" placeholder="Height (cm)" onChange={handleChange} />
            <input type="text" name="queueNumber" placeholder="Queue Number" className="span-2" onChange={handleChange} />
          </div>
          <p className="privacy-note">
            Privacy Note: Your data is encrypted. By continuing, you acknowledge our notice of privacy practices...
          </p>
        </div>

        {/* Area of Concern Card */}
        <div className="form-card">
          <h2>Area of Concern</h2>
          <p className="subtitle">Select the primary body part for diagnosis.</p>
          <div className="radio-group">
            {areas.map(area => (
              <label key={area} className="radio-row">
                <span>{area}</span>
                <input 
                  type="radio" 
                  name="areaOfConcern" 
                  value={area} 
                  onChange={handleChange} 
                />
              </label>
            ))}
          </div>
        </div>
      </div>
      <button className="btn-submit" onClick={onStart}>
        Start Diagnosis
      </button>
    </div>
  );
};

export default DiagnosisForm;