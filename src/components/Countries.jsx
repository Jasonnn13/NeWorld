import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // Fetch country data
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  // Filter countries based on search query and selected filters
  const filterCountries = () => {
    let filtered = countries;

    if (searchQuery) {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter(country => country.region === selectedRegion);
    }

    if (selectedLanguage) {
      filtered = filtered.filter(country =>
        country.languages && Object.values(country.languages).some(language =>
          language.toLowerCase().includes(selectedLanguage.toLowerCase())
        )
      );
    }

    setFilteredCountries(filtered);
  };

  // Handle input changes
  useEffect(() => {
    filterCountries();
  }, [searchQuery, selectedRegion, selectedLanguage]);

  return ( <>
  <Header />
  
    <div className="country-list">
      <h2>All Countries</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by country name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Filters */}
      <div className="filters">
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="filter-select"
        >
          <option value="">Select Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="filter-select"
        >
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      {/* Country Grid */}
      <div className="country-grid">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <Link to={`/country/${country.name.common}`} key={country.cca3} className="country-card">
              <img src={country.flags.png} alt={country.name.common} className="country-flag" />
              <h3>{country.name.common}</h3>
              <p>Region: {country.region}</p>
            </Link>
          ))
        ) : (
          <p>Loading countries...</p>
        )}
      </div>
    </div>
    </>
  );
}

export default Countries;
