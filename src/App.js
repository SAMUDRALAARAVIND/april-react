
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginWrapper from './auth/LoginWrapper';
import { createContext, useState } from 'react';
import { NotFound } from './components/NotFound';

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem("token")));

  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<h1>Home screen for loggedin user</h1>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LoginWrapper>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
