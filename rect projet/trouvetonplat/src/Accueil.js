import { useState } from 'react';
import './App.css';
import dishlogo from './dishlogo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
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
            Connexion
          </button>
        </div>

        <img src={dishlogo} className="App-logo mb-3" alt="logo" />

        <h1 style={{fontWeight:'bold'}} className='mb-4'>Bienvenue sur Trouve Ton plat</h1>
        <p style={{fontSize:18}} className='mb-4'>Trouvez vos plats où que vous soyez maintenant</p>

        <div className="search-container mb-4">
          <input style={{height:50}}
            type="text"
            placeholder="Que voulez-vous manger maintenant?"
            
            className="form-control me-2"
          />
          <button className="btn btn-primary" id='search'><Link to='/Resto' style={{color:'white',backgroundColor:'#4CAF50',textDecoration:'none'}}>Rechercher</Link></button>
          <button className='com btn btn-secondary ms-2' id='cmd'><Link to='/MesCommande' style={{color:'white',textDecoration:'none'}}>Mes Commandes</Link></button>
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
                <Link to='Resto'><button type="submit" className=" btn-primary mt-3" style={{fontSize:16,width:100,borderRadius:5}}>S'inscrire</button></Link>
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
                
                <input type="email" placeholder="Email" required className="form-control mb-4" />
                <input type="password" placeholder="Mot de passe" required className="form-control mb-3" />
                <button type="submit" className=" btn-primary mb-3" style={{fontSize:16,width:100,borderRadius:5}}><Link style={{color:'white',textDecoration:'none',}} to='/Resto'>Connexion</Link></button>
              </form>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;