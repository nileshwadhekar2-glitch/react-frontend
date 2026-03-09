import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">

      <h1 className="title">Smart Garbage Locator</h1>

      <p className="subtitle">
        Find and report garbage near your area to keep the city clean.
      </p>

      <div className="buttons">

        <Link to="/map" className="btn">
          Find Garbage Near Me
        </Link>

        <Link to="/report" className="btn">
          Report Garbage
        </Link>

      </div>

    </div>
  );
}

export default Home;