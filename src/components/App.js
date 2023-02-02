import React from 'react';
import Sidebar from './Sidebar';
import '../css/App.css';
import Market from './Market';
import Quests from './Quests';

function App() {
  return (
    <>
      <div class="container-fluid  d-flex justify-content-start  bg-danger">
        <Sidebar></Sidebar>

        <div class="container d-flex flex-column justify-content-center align-items-center bg-info">
          <Market></Market>
        </div>
      </div>
    </>
  );
}

export default App;