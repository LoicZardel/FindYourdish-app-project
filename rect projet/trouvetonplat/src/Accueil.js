import { useState } from 'react';
import './App.css';
import dishlogo from './dishlogo.png';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const handleOpenSignupPopup = () => {
    setIsSignupPopupOpen(true);
  };

  const handleCloseSignupPopup = () => {
    setIsSignupPopupOpen(false);
  };

  const handleOpenLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='log mb-4'>
          <button className='login me-2' onClick={handleOpenSignupPopup}>
            Inscription
          </button>
          <button className='login' onClick={handleOpenLoginPopup}>
            Login
          </button>
        </div>

        <img src={dishlogo} className="App-logo mb-4" alt="logo" />

        <h1>Bienvenue sur Trouve Ton plat</h1>
        <p>Trouvez vos plats où que vous soyez maintenant</p>

        <div className="search-container mb-4">
          <input
            type="text"
            placeholder="Que voulez-vous manger maintenant?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control me-2"
          />
          <button className="btn btn-primary">Rechercher</button>
          <button className='com btn btn-secondary ms-2'>Mes Commandes</button>
        </div>

        {/* Popup d'inscription */}
        {isSignupPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseSignupPopup}>&times;</span>
              <h3 className='titlelog'>Inscription</h3>
              <form>
                <input type="text" placeholder="Nom" required className="form-control mb-2" />
                <input type="tel" placeholder="Numéro de téléphone" required className="form-control mb-2" />
                <input type="email" placeholder="Email" required className="form-control mb-2" />
                <input type="password" placeholder="Mot de passe" required className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">S'inscrire</button>
              </form>
            </div>
          </div>
        )}

        {/* Popup de connexion */}
        {isLoginPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseLoginPopup}>&times;</span>
              <h3 className='titlelog'>Se connecter</h3>
              <form>
                
                <input type="email" placeholder="Email" required className="form-control mb-2" />
                <input type="password" placeholder="Mot de passe" required className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">S'inscrire</button>
              </form>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;