import React, { useState } from 'react';
import Header from './Header';

function AboutPage() {
  const [countryName, setCountryName] = useState('Atlantis');
  const [description, setDescription] = useState('Atlantis is a peaceful island located in the middle of the Pacific Ocean, known for its advanced technology and harmonious society.');
  const [reason, setReason] = useState('I chose Atlantis because it represents an ideal world where nature and technology coexist harmoniously.');
  const [selectedCountries, setSelectedCountries] = useState([
    'Elysium', 'Arcadia', 'Avalon', 'Shangri-La', 'Utopia', 'Eden'
  ]);

  return ( <>   
    <Header /> 
    <div className="about-page">
      <div className="country-details">
        <h1>{countryName}</h1>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Reason for Choosing:</strong> {reason}</p>
      </div>

      <div className="world-creation">
        <h2>Countries in NeWorld</h2>
        <ul className="selected-countries">
          {selectedCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>

      <div className="about-footer">
        <p>This is a fictional world I have created in NeWorld, where countries are united for peace, prosperity, and innovation.</p>
      </div>
    </div>
    </>
  );
}

export default AboutPage;
