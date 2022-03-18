import React from 'react'
import "./topbar.scss"
import Home from "./../../pic.jpg"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Topbar() {
  return (
    <>
      <nav class="navbar" style={{ backgroundImage: `url(${Home})` }}>
        <div class="logo"><img src="" alt="LOGO" /></div>
        <div class="push-left">
          <button id="menu-toggler" data-class="menu-active" class="hamburger">
            <span class="hamburger-line hamburger-line-top"></span>
            <span class="hamburger-line hamburger-line-middle"></span>
            <span class="hamburger-line hamburger-line-bottom"></span>
          </button>

          <ul id="primary-menu" class="menu nav-menu">

            <li class="menu-item current-menu-item "><Link class="nav__link" to="/explore">Explore</Link></li>
            <li class="menu-item dropdown nav__link"><Link class="nav__link" to="/about">About Us</Link>
            </li>
            <li class="menu-item dropdown nav__link"><Link class="nav__link" to="/cities">Cities</Link>
            </li>
            <li class="menu-item"><button class="call-btn">Call</button>
            </li>
          </ul>


        </div>


      </nav >
      <div class="heading">
        <div class="sub-heading">
          Rethink your <br />living & renting
        </div>
        <div class="sub-quote">Make your stay painless with us</div>
      </div>
      <div class="search">
        <div class="city search-field">
          <p class="indent">CITY</p>
          <p class="placeholder">Select your city</p>
        </div>
        <div class="date search-field">
          <p class="indent">DATES</p>
          <p class="placeholder">Select your dates</p>
        </div>
        <div class="guest search-field">
          <p class="indent">GUESTS</p>
          <p class="placeholder">Add guests</p>
        </div>
        <button class="search-btn">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5898 25.9395L23.748 20.0977C23.4844 19.834 23.127 19.6875 22.752 19.6875H21.7969C23.4141 17.6191 24.375 15.0176 24.375 12.1875C24.375 5.45508 18.9199 0 12.1875 0C5.45508 0 0 5.45508 0 12.1875C0 18.9199 5.45508 24.375 12.1875 24.375C15.0176 24.375 17.6191 23.4141 19.6875 21.7969V22.752C19.6875 23.127 19.834 23.4844 20.0977 23.748L25.9395 29.5898C26.4902 30.1406 27.3809 30.1406 27.9258 29.5898L29.584 27.9316C30.1348 27.3809 30.1348 26.4902 29.5898 25.9395ZM12.1875 19.6875C8.04492 19.6875 4.6875 16.3359 4.6875 12.1875C4.6875 8.04492 8.03906 4.6875 12.1875 4.6875C16.3301 4.6875 19.6875 8.03906 19.6875 12.1875C19.6875 16.3301 16.3359 19.6875 12.1875 19.6875Z" fill="white" />
          </svg>
          <h4 >Search</h4>
        </button>
      </div>

    </>
  )
}

export default Topbar