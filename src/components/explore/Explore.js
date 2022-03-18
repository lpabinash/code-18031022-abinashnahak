import React from 'react'
import "./Explore.scss"
import Pic1 from "./../../pic2.jpg"
import Pic2 from "./../../pic3.jpg"

function Explore() {
  return (
    <div>
      <h1>Explore</h1>
      <h3>From one-guest rooms to<br /> penthouses with pools and gardens</h3>
      <div class="explore-container">
        <div class="pic-container" style={{ backgroundImage: `url(${Pic1})`, marginRight: "10px" }}>
          <div class="sizes">
            <h3>Room with one king-size bed</h3>
            <div class="btn-group">
              <button class="btn">35$</button>
              <button class="btn">28m<sup>3</sup></button>
              <button class="book-btn">Book!</button>
            </div>

          </div>
        </div>
        <div class="pic-container" style={{ backgroundImage: `url(${Pic2})`, marginLeft: "10px" }}>
          <div class="sizes">
            <h3>PentHouse for 8 Person</h3>
            <div class="btn-group">
              <button class="btn">2039$</button>
              <button class="btn">438m<sup>3</sup></button>
              <button class="book-btn">Book!</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Explore