import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDeatailPage';
import ThemeProvider from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
