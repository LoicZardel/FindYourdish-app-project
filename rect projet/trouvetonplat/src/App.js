import Accueil from './Accueil'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Accueil/>
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;