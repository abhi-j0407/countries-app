import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">What in the world</Link>
      <div className="toggle">
              <FontAwesomeIcon icon={faMoon} />
              Dark Mode
      </div>
    </nav>
  );
};

export default Navbar;
