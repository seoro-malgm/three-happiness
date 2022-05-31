import { Link } from "react-router-dom";

export const GlobalNav = () => {
  return (
    <div className="gnb">
      <div className="wrap">
        <h1>삼복</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/contact">Ours</Link>
        </div>
      </div>
    </div>
  );
};
