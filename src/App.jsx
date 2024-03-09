import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./ContainersMain/HomePage";
import NavbarPage from "./ContainersMain/NavbarPage";
import SectionsCardsPage from "./ContainersMain/SectionsCardsPage"



function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NavbarPage" element={<NavbarPage />} />
          <Route path="/SectionCardsPage" element={<SectionsCardsPage/>} />
        </Routes>
      </Router>
    );
}

export default App;
