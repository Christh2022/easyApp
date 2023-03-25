import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Chat from './Pages/Chat';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRouter from './Pages/ProtectedRouter';
import NotFound from './Pages/NotFound';
import { AuthContextProvider } from './context/AuthContext';
import './App.css'


const App = () => {
  return (
    
    <div className='App'>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <ProtectedRouter>
                  <Chat/>
                </ProtectedRouter>
              }/>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  
  );
};

export default App;