import Accueil from './Accueil'
import Itineraire from './Itinenaire';
import Resto from './Resto'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Resto' element={<Resto />} />
        <Route path='/Itineraire' element={<Itineraire />} />
      </Routes>
    </div>
  );
}

export default App;