import React from 'react';

import './App.css';
import { LayoutPage } from './pages/LayoutPage';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main/MainPage';
import { ContactsPage } from './pages/Contacts/ContactsPage';
import { AboutPage } from './pages/About/AboutPage';
import { GalleryPage } from './pages/Gallery/GalleryPage';
import { LoginPage } from './pages/Login/LoginPage';
import { RegistrationPage } from './pages/Registration/RegistrationPage';
import { AdminPage } from './pages/Admin/AdminPage';
import { RequireAuth } from './hoc/RequireAuth'
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/admin' element={<RequireAuth>
            <AdminPage />
          </RequireAuth>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
