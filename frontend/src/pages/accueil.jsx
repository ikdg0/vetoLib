import React from "react";
import Header from "../components/Header";

const Accueil = () => {
  return (
    <>
    <div className="container">
      <div className="row text-center">
        <div className="col-6">
          <h1 className="text-start">
          Prenez soin de vos animaux avec Vetolib
          </h1>
          <p className="text-muted text-start">
          Chez Vetolib, nous comprenons l'importance d'un accès rapide et fiable aux soins vétérinaires. 
          C'est pourquoi nous mettons à votre disposition un réseau de professionnels passionnés et attentifs à la santé de vos compagnons à fourrure. Rejoignez-nous et bénéficiez d'un suivi personnalisé pour chaque étape de la vie de votre animal !
          </p>

          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Entrer votre addresse"
            />{" "}
            <button className="ms-2 btn btn-success">
              <i className="bi bi-send"></i>
            </button>
          </div>

          <div className="row py-5">
            <div className="col-6 d-flex">
              <i className="bi bi-search-heart fs-1 me-3 text-success"></i>
              <div>
                <h6 className="text-start">Consultations personnalisées</h6>
                <p className="text-muted text-start" style={{fontSize:"14px"}}>
                Des soins adaptés pour chaque animal, parce que chaque compagnon mérite une attention unique.
                </p>
              </div>
            </div>
            <div className="col-6 d-flex">
              <i className="bi bi-calendar2-heart fs-1 me-3 text-success"></i>
              <div>
                <h6 className="text-start">Engagement pour le bien-être</h6>
                <p className="text-muted text-start" style={{fontSize:"14px"}}>
                Soins vétérinaires avec cœur, pour le bien-être de chaque animal qui nous est confié.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className=" text-end">
            <img src="../../public/images/dogAccueil.jpg" className="rounded-2" width="60%" alt="" />
          </div>
        </div>
      </div>

    </div>
    <div className="d-flex py-2 my-5 bg-primary container-fluid text-white">
        <div className="col-2 fw-bold">
            80 000+ Personnes nous font confiance 
        </div>
        <div className="col-2">
        <i className="bi bi-bandaid fs-1"></i>
        </div>
        <div className="col-2">
        <i className="bi bi-bandaid fs-1"></i>
        </div>
        <div className="col-2">
        <i className="bi bi-bandaid fs-1"></i>
        </div>
        <div className="col-2">
        <i className="bi bi-bandaid fs-1"></i>
        </div>
        <div className="col-2">
        <i className="bi bi-bandaid fs-1"></i>
        </div>
      </div>
    </>
  );
};

export default Accueil;
