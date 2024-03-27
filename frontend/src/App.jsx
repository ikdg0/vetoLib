import { useState } from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import '../public/styles/style.css';
import Connexion from './pages/connexion';
import Footer from './components/Footer';
import Accueil from './pages/accueil/accueil';
import Rdv from './pages/rdv/rdv';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div className=" ">
            <>
              <div className="my-4 pt-4 container-fluid">
                <Header  />
              </div>
              <div
                className=""
              >
                <Routes>
                <Route path="/" element={<Accueil />} />
                  <Route path="/accueil" element={<Accueil/>} />
                  <Route path="/connexion" element={<Connexion />} />
                  <Route path="/rdv" element={<Rdv />} />
                </Routes>
              </div>
            </>
         
            <div className='mt-5'>
              <Footer />
            </div>
        </div>
  );
}

export default App
