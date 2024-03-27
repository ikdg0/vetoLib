import React from "react";
import { Form } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const Accueil = () => {

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

  return (
    <>
    <div className="container">
      <div className="row text-center">
        <div className="col-7">
          <h2 className="text-start">Prenez soin de vos animaux avec Vetolib</h2>
          <p className="text-muted text-start">
          Chez Vetolib, nous comprenons l'importance d'un accès rapide et fiable aux soins vétérinaires.C'est pourquoi nous mettons à votre disposition un réseau de professionnels passionnés et attentifs à la santé de vos compagnons à fourrure. 
          <br />
          Rejoignez-nous et bénéficiez d'un suivi personnalisé pour chaque étape de la vie de votre animal !
          </p>

          <form className=" mt-5">

            <div className=" d-flex">
            <Autocomplete

  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 660 }}
  renderInput={(params) => <TextField {...params} label="Recherche un vétérinaire" />}
/>
           <button className="ms-2 ms-auto btn btn-success" style={{width: "10%"}} type="submit">
              <i className="bi bi-search-heart fs-4"></i>
            </button>
            </div>
          </form>

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
        <div className="col-4">
          <div className="text-end">
            <img src="../../public/images/dogAccueil.jpg" className="rounded-2" width="60%" alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Nos vétérinaires partenaires</h2>
          <p className="text-center text-muted">
          Découvrez les vétérinaires partenaires de Vetolib, qui s'engagent à offrir des soins de qualité pour vos animaux.
          </p>
        </div>
        <div className="col-4">
          <div className="card pb-4">
            <img src="../../public/images/docteur1.jpg" className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">Dr. Jean Dupont</h5>
              <p className="card-text">Spécialisé en soins canins et félins, le Dr. Jean Dupont vous accueille dans son cabinet de Saint-Denis.</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card pb-4">
            <img src="../../public/images/docteur2.jpg" className="card-img-top" alt="..." />
            <div className="card-body pb-3">
              <h5 className="card-title">Dr. Marie Durand</h5>
              <p className="card-text">Spécialisée en soins équins, le Dr. Marie Durand vous accueille dans son cabinet de Saint-Pierre.</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src="../../public/images/docteur3.jpg"  className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Dr. Paul Lefevre</h5>
              <p className="card-text">Spécialisé en soins pour animaux exotiques, le Dr. Paul Lefevre vous accueille dans son cabinet de Saint-Leu.</p>
            </div>
          </div>
        </div>
      </div>

    

    </div>
    
    </>
  );
};

export default Accueil;
