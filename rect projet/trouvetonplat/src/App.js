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
        <div className='log'>
          <button className='login' onClick={handleOpenSignupPopup} style={{ padding: '5px 10px' }}>
            Inscription
          </button>
          <button className='login' onClick={handleOpenLoginPopup} style={{ padding: '5px 10px' }}>
            Login
          </button>
        </div>

        <img src={dishlogo} className="App-logo" alt="logo" />

        <h1>Bienvenue sur Trouve Ton plat</h1>
        <p>Trouvez vos plats où que vous soyez maintenant</p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Que voulez-vous manger maintenant?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <button>
            Rechercher
          </button>
          <br></br>
          <button className='com'>Mes Commandes</button>
          
        </div>

        {/* Popup d'inscription */}
        {isSignupPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseSignupPopup}>&times;</span>
              <h3 className='titlelog'>Inscrivez vous</h3>
              <form>
                <input type="text" placeholder="Nom" required />
                <input type="tel" placeholder="Numéro de téléphone" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Mot de passe" required />
                <button type="submit" style={{ padding: '5px 10px' }}>S'inscrire</button>
              </form>
            </div>
          </div>
        )}

        {/* Popup de connexion */}
        {isLoginPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseLoginPopup}>&times;</span>
              <h3  className='titlelog'>Connexion</h3>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Mot de passe" required />
                <button type="submit" style={{ padding: '5px 10px' }}>Se connecter</button>
              </form>
            </div>
          </div>
        )}
      </header>
    </div>
   
  );
}

export default App;