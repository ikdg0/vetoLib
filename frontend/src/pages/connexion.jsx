import React from "react";

const Connexion = () => {

    
  return (
    <>
      <div className="row g-lg-5 py-5 container-fluid">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Rejoignez notre communauté Vetolib
          </h1>
          <p className="col-lg-10 fs-4">
            Bienvenue chez Vetolib, où la santé de votre animal est notre
            priorité. Inscrivez-vous pour accéder à nos services personnalisés,
            prendre rendez-vous facilement et suivre le bien-être de vos
            compagnons à quatre pattes.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <div id="norton-idsafe-field-styling-divId"></div>
              <label labelFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                {/* <input type="checkbox" value="remember-me"> Remember me */}
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Connexion;
