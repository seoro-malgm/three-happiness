import { Link } from "react-router-dom";

export const GlobalNav = () => {
  return (
    <div className="gnb">
      <div className="wrap">
        <h1>
          <Link to="/">삼복</Link>
        </h1>
        <div className="links">
          <Link to="/contact">Ours</Link>
        </div>
      </div>
    </div>
  );
};
