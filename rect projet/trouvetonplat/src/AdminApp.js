import React from 'react';

import { Route, Routes } from 'react-router-dom';
import AdminListePlat from './AdminListePlat';

function AdminApp() {

  return (
    <div>
        
      <Routes>
        <Route path='/' element={<AdminListePlat />} />  
        
      </Routes>
    </div>
    
  );
}

export default AdminApp;