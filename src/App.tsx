import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css'
import Login from './pages/Account/Login';
import Admin from './pages/Admin/Admin';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AccountRoute from './components/AccountRoute';


function App() {
  return (
    <div className='App' id='wrapper'>
      <BrowserRouter>
        <Routes>
            <Route path="/login"
                   element={
                    <AccountRoute>
                      <Login />
                    </AccountRoute>
                  }
             />
            <Route path="/admin"
                   element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  }
             />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
