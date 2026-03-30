import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

const Newsapp = () => {
  const [search, setSearch] = useState("india"); 
  const [query, setQuery] = useState("india"); 
  const [newsData, setNewsData] = useState([]);

//   const API_KEY = "dfb0d105f91c47a4aaf46d3867dc5bad";
  
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log("API KEY:", API_KEY);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`,
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles || []);
    };

    fetchData();
  }, [query]);


  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  
  const handleSearch = () => {
    setQuery(search);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>News Masala</h1>
        </div>

        <ul>
          <a onClick={() => setQuery("india")}>All News</a>
          <a onClick={() => setQuery("latest")}>Latest News</a>
          <a onClick={() => setQuery("breaking")}>Breaking News</a>
        </ul>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for news"
            value={search}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(); 
              }
            }}
          />

          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>

      <p className="head">Stay updated with the News Masala!</p>

      <div className="categoryBtn">
        <button onClick={(e) => setQuery(e.target.value)} value="politics">
          Politics
        </button>
        <button onClick={(e) => setQuery(e.target.value)} value="business">
          Business
        </button>
        <button onClick={(e) => setQuery(e.target.value)} value="sports">
          Sports
        </button>
        <button onClick={(e) => setQuery(e.target.value)} value="entertainment">
          Entertainment
        </button>
        <button onClick={(e) => setQuery(e.target.value)} value="health">
          Health
        </button>
        <button onClick={(e) => setQuery(e.target.value)} value="fitness">
          Fitness
        </button>
      </div>

      <div>
        {newsData.length > 0 ? (
          <Card data={newsData} />
        ) : (
          <p style={{ textAlign: "center" }}>No results found</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Newsapp;

