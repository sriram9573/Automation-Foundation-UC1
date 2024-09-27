import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [output, setOutput] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, keyword }),
      });
  
      if (!response.ok) {
        throw new Error(`${response.statusText}`);
      }
  
      const data = await response.json();
      setOutput(data.message);  // Display the message from the backend
    } catch (error) {
      setOutput(`An error occurred: ${error.message}`);
    }
  };
  
  
  return (
    <div className="app-container">
      <div className="search-box">
        <h2>URL and Keyword Search</h2>

        <div className="input-group">
          <label htmlFor="url">URL:</label>
          <input
            id="url"
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="keywords">Keywords:</label>
          <input
            id="keywords"
            type="text"
            placeholder="Enter Keywords"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <button className="search-button" onClick={handleSearch}>Search</button>

        <div className="result">
          <h4>Result:</h4>
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
