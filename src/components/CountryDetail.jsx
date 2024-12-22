import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';

function CountryDetail() {


  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);  
      })
      .catch((error) => {
        console.error('Error fetching country details:', error);
      });
  }, [name]);

  if (!country) {
    return <p>Loading country details...</p>;
  }

  return ( <> 
  <Header />
    <div className="country-detail">
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} className="country-flag-detail" />
      
      <div className="details">
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
        <p><strong>Currency:</strong> {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}</p>
        <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
        <p><strong>Borders:</strong> {country.borders ? country.borders.join(', ') : 'No borders'}</p>
      </div>
    </div>
    </>
  );
}

export default CountryDetail;
