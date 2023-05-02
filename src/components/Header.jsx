import { Link } from "react-router-dom";
import Image from '../images/main_header.png'

const Header = () => {
  return (
    <header className="main_header">
      <div className="container main_header_container">
        <div className="main_header_left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends of The Fitmess World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            voluptates?
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header_right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="main header" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
