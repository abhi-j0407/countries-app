import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
