import { useState, useEffect } from "react";
import Card from "./../components/Card";

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
        <form>
          <input type="text" />
          <select
            value={filter}
            defaultValue={"#"}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="Asia">Asia</option>
          </select>
        </form>
      </header>
      <div className="cards-container">
        {all && <Card deets={all[0]} />}
      </div>
    </main>
  );
};

export default Home;
