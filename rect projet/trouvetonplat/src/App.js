import Accueil from './Accueil'
import Resto from './Resto'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Resto' element={<Resto />} />
      </Routes>
    </div>
  );
}

export default App;