import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function Home() {
  const [countries, setCountries] = useState([]);
  
  // Fetch country data based on population
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        console.log(response.data); // Check the response data
        const sortedCountries = response.data
          .sort((a, b) => b.population - a.population) // Sort by population
          .slice(0, 10); // Get top 10 most populated countries
        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);
  

  return ( <>   
    <Header /> 
    <div>
        <div className="home">
            <h2 style={{ textAlign: 'center' }}>Welcome to NeWorld!</h2>
            <p  style={{ textAlign: 'justify' }}>NeWorld is a React-based platform that allows you to explore countries around the world. Discover detailed information about each country, including location, languages, currencies, and more. Explore popular tourist attractions and unique aspects of each country!</p>
        </div>
        <div className="country-grid-container">
            <h2>Top 10 Most Populous Countries</h2>
            <div className="country-grid">
                {countries.length > 0 ? (
                    countries.map((country) => (
                    <Link to={`/country/${country.name.common}`} key={country.cca3} className="country-card">
                        <img src={country.flags.png} alt={country.name.common} />
                        <h3>{country.name.common}</h3>
                        <p>Population: {country.population}</p>
                    </Link>
                    ))
                ) : (
                    <p>Loading countries...</p>
                )}
            </div>
        </div>
        <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'justify', padding: '0 20px' }}>
            NeWorld is a website that allows users to explore countries and create their own world. <br />
            The Home Page introduces NeWorld with an elegant design and showcases the top 10 most populous countries in a carousel or grid format. <br />
            It also highlights the key features of the website. <br /><br />

            The Country List Page displays all countries in a grid with flags and names, and includes a search bar and dropdown filters for regions and languages. <br /><br />

            On the Country Detail Page, users can view detailed information about a country by clicking on it. <br />
            The About Page lets users create and describe their own country, explain why they chose it, and select six other countries to include in their world. <br /><br />

            Finally, the 404 Error Page provides a custom design with a button to return to the home page. <br />
            These features offer a dynamic platform for users to explore and interact with countries.
        </p>

        </div>
    </div>
    </>
  );
}

export default Home;
