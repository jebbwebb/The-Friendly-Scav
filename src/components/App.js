import React from 'react';
import Sidebar from './Sidebar';
import '../css/App.css';
import Market from './Market';
import Quests from './Quests';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <div class="container-fluid  d-flex justify-content-start w-100  bg-dark text-light">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/market" element={<Market></Market>}></Route>
          <Route path="/quests" element={<Quests></Quests>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
