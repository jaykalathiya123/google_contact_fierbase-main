import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CreateContact from './components/CreateContact/CreateContact';
import Sidebar from './components/siderbar/siderbar';
import EditContact from './components/EditContact/EditContact';
import Profile from './components/Profile/Profile';
// import handleViewProfile from './components/ViewProfile/ViewProfile';

function App() {
  

    return (
      <>
          <Header />
        <div className="flex h-screen">
          <div className="fixed left-0 h-full z-50">
            <Sidebar />
          </div>
          <div className={`flex-1 flex flex-col transition-all duration-300 `}>
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/create" element={<CreateContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
                {/* <Route path="/view/:id" element={<handleViewProfile />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </>
    );
}

export default App;
