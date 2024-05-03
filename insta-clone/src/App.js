
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginWrapper from './auth/LoginWrapper';
import { createContext, useState } from 'react';
import { NotFound } from './components/NotFound';
import Post from './post';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Connections } from './connections';

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem("token")));

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Post />} />
              <Route path="/connections/:tabId" element={<Connections />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LoginWrapper>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
