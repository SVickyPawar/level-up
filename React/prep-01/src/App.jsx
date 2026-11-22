import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import NewGame from "./components/NewGame";
import { BubbleGame } from "./components/BubbleGame";
import NewBubbleGame from "./components/NewBubbleGame";

function App() {
  const URL = "https://api.first.org/data/v1/countries";

  const [countriesData, setCountriesData] = useState({});
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(URL);

        if (!res.ok) {
          throw new Error(`HTTP Error ${res.status}`);
        }

        const data = await res.json();

        console.log(data, "API response");

        setCountriesData(data.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        setError("Failed to fetch countries");
      } finally {
        setIsLoading(false);
      }
    };

    getCountriesData();
  }, []);

  const filteredData = Object.entries(countriesData).filter(
    ([code, country]) =>
      country.country
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <h1>Countries</h1>

      <input
        type="text"
        value={searchText}
        placeholder="Search country name"
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* <div className="countriesList">
        {filteredData.length === 0 ? (
          <p>No countries found</p>
        ) : (
          filteredData.map(([code, country]) => (
            <div className="countryCard" key={code}>
              <h3>{country.country}</h3>
              <p>{country.region}</p>
              <p>Code: {code}</p>
            </div>
          ))
        )}
      </div> */}
      {/* <Game /> */}
      <NewGame />
      <NewBubbleGame />
    </div>
  );
}

export default App;