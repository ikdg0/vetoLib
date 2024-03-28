import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Cabinet = () => {
  const [cabinetData, setCabinetData] = useState([]);
  const navigate = useNavigate();


 const getCabinet = async () => { 
  try {
    const response = await fetch('http://localhost:8000/cabinet');
    const data = await response.json();
    console.log(data);
    setCabinetData(data);

  }catch(e) {
    console.error(e);
  }
};

useEffect(() => {
  getCabinet();
  }, []);

       const handleButtonClick = () => {
        navigate('/accueil');
      };

  return (
    <>
    
    <div className="container">
      <div className="row text-center">
          <h1 className="text-start">
          </h1>
         
          {cabinetData.map((cabinet) => (
            <div key={cabinet.id}>
              <p>Cabinet : </p>
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h1 className="card-title  text-green-500">{cabinet.cabinet_name}</h1>
    <h1 className="text-green-500">Description</h1>
    <p className="text-green-500">{cabinet.description}</p>
    <p className="text-green-500">Adresse : {cabinet.address}, {cabinet.city}</p>
    
    <p className="text-green-500">Num téléphone : {cabinet.phone_number}</p>
    
    <div className="card-actions justify-end">
    {cabinet.is_available	 ? <button className="btn btn-primary" onClick={handleButtonClick} >Ouvert</button> : <button className="btn btn-alert">Fermé</button>}

      
    </div>
  </div>
</div>

</div>
        ))}

             
      </div>
    </div>
            
    </>
  );
};

export default Cabinet;
