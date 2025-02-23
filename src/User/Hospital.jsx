import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hospital.css';

const hospitals = [
  {
    id: 1,
    image: 'https://www.rajagirihospital.com/Userfiles/Poster/8471936de2434da3ab1b77fa971bd1ac.jpg',
    name: 'City Hospital',
    place: 'Downtown',
    description: 'A modern facility with 24/7 emergency services.',
  },
  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Regional_Cancer_Centre%2C_Trivandrum.jpg/800px-Regional_Cancer_Centre%2C_Trivandrum.jpg',
    name: 'Green Valley Medical Center',
    place: 'Green Valley',
    description: 'Known for its advanced cardiology department.',
  },
  {
    id: 3,
    image: 'https://www.impactguru.com/info/wp-content/uploads/2023/11/Sunrise-Hospital.jpg',
    name: 'Sunrise Clinic',
    place: 'Uptown',
    description: 'Providing quality healthcare for over 20 years.',
  },
  {
    id: 4,
    image: 'https://www.impactguru.com/info/wp-content/uploads/2023/11/Sunrise-Hospital.jpg',
    name: 'Rise Hospital',
    place: 'Uptown',
    description: 'Healthcare for over 20 years.',
  },
];

const Hospital = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filteredHospitals = hospitals.filter(
      (hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.place.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredHospitals);
  };

  const handleInfoClick = (hospitalName) => {
    navigate(`/user/availabledoctors?hospital=${encodeURIComponent(hospitalName)}`);
  };

  return (
    <div className="app-container">
      <br />
      <header className="header">
        <h1>Find Your Hospitals Here!</h1>
      </header>
      <br />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for places or hospitals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <br />
      <div className="results-container">
        {searchResults.length > 0 ? (
          searchResults.map((hospital) => (
            <div key={hospital.id} className="card">
              <img src={hospital.image} alt={hospital.name} className="card-image" />
              <div className="card-details">
                <h2>{hospital.name}</h2>
                <p>
                  <strong>Place:</strong> {hospital.place}
                </p>
                <p>{hospital.description}</p>
                <button
                  className="info-button"
                  onClick={() => handleInfoClick(hospital.name)}
                >
                  INFO
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No results found. Try searching for a different place or hospital.</p>
        )}
      </div>
    </div>
  );
};

export default Hospital;
