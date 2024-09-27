import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [output, setOutput] = useState('');

  const handleSearch = () => {
    // Placeholder for backend call using fetch or axios
    // When backend is ready, replace this logic to call your Python API
    setOutput(`Searching for "${keyword}" in URL: ${url}`);
  };

  return (
    <div className="App">
      <h1>Keyword Search Tool</h1>
      <div className="input-container">
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter Keyword"
          />
        </label>
      </div>

      <button onClick={handleSearch}>Search</button>

      <div className="output-container">
        <h3>Search Output:</h3>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default App;
