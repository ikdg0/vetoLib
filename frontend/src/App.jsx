import { useState } from 'react'
import Accueil from './pages/accueil'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import '../public/styles/style.css';
import Connexion from './pages/connexion';
import Footer from './components/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div className=" ">
            <>
              <div className="col-12 p-0 ">
                <Header  />
              </div>
              <div
                className="col p-0 bg-color-blue-in"
              >
                <Routes>
                  <Route path="/accueil" element={<Accueil />} />
                  <Route path="/connexion" element={<Connexion />} />
                </Routes>
              </div>
            </>
         
            <div>
              <Footer />
            </div>
        </div>
  );
}

export default App
