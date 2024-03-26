import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src ="../public/images/logo.png" className="" width="20%" /> 
          <span className="top-2">
          <img src ="../public/images/logo-text.png" className="" width="30%" height="30%" />
          </span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">            
        <li>
          <NavLink to="/accueil" className="nav-link px-2 link-dark pe-3 text-primary fw-semibold">Accueil</NavLink>
        </li>
        <li><a href="#" className="nav-link px-2 pe-3 ps-3 text-primary fw-semibold">Cabinet</a></li>
        <li><a href="#" className="nav-link px-2 pe-3 ps-3 text-primary fw-semibold">Contact</a></li>
        <li><a href="#" className="nav-link px-2 pe-3 ps-3 text-primary fw-semibold">A propos</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <NavLink to="/connexion">
        <button type="button" className="btn btn-outline-success me-2">Connexion</button>
        </NavLink>

        <button type="button" className="btn btn-success">Inscription</button>
      </div>
    </header>
        </div>
    );
};

export default Header;