

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDeatailPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-full max-w-4xl px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
