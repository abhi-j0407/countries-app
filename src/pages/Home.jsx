import { useState, useEffect } from "react";
import Card from "./../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [all, setAll] = useState([]);
  const [filter, setFilter] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setAll(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <header>
        <form className="form">
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search for a country..." />
          </div>
          <div className="dropdown">
            <select
              value={filter}
              defaultValue={"#"}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
        </form>
      </header>
      <div className="cards-container">
        {all && all.map((country) => (
          <Card deets={country} key={country.name.common} />
        ))}
      </div>
    </main>
  );
};

export default Home;
