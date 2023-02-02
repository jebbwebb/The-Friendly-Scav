import React from 'react';

export default function Sidebar() {
  return (
    <>
      <div class="row text-center bg-primary">
        <div class="col  bg-secondary">
          <img src="/images/tarkov-icon.png"></img>

          <h1>The Friendly Scav</h1>
          <p>Tarkov guides and resources</p>
          <ol class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Market</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Maps</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Quests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Hideout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Weapon Builds</a>
            </li>
          </ol>
          <div class="row border-top text-center">
            <h2>Additional Resources </h2>
            <ol class="nav navbar-nav">
              <li class="nav-item">
                <a class="nav-link">Rat Scanner</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Ammo Chart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Tarkov Changes</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
