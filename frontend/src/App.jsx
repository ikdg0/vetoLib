import { useState } from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import '../public/styles/style.css';
import Connexion from './pages/user/connexion';
import Footer from './components/Footer';
import Animal from './pages/animal/animal';
import AnimaList from './pages/animal/animalist';
import DetAnimal from './pages/animal/detanimal';
import Inscription from './pages/user/inscription';

import Accueil from './pages/accueil/accueil';
import Rdv from './pages/rdv/rdv';



function App() {
  const isLoggedIn = useState(true)[0];
  return (
    <div>
      <div className="my-4 pt-4 container-fluid">
        <Header />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/animalist" element={<AnimaList />} />
          <Route path="/detanimal" element={<DetAnimal />} />
          <Route path="/rdv" element={<Rdv />} />
        </Routes>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
      <div className="col p-0 bg-color-blue-in">
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/insciption" element={<Inscription />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App
