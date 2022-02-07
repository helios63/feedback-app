import { Link } from "react-router-dom";

function Header({text}) {
  return (
    <header>
        <div className="container">
          <Link to="/">
            <h2>{text}</h2>
          </Link>
        </div>
    </header>
  )
}

export default Header;
