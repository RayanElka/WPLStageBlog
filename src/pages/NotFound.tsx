import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="section not-found">
      <div className="container">
        <div className="not-found-card reveal">
          <div className="not-found-icon">
            <AlertTriangle />
          </div>
          <h1>404 - Pagina niet gevonden</h1>
          <p>
            Deze route bestaat niet (meer). Check de navigatie of ga terug naar
            de homepage.
          </p>
          <Link to="/" className="btn btn-primary">
            <Home /> Terug naar Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
