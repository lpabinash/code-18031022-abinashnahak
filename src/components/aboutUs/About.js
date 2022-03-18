import React from 'react'
import classes from "./About.module.css"
import Pic4 from "./../../pic4.jpg"
import Pic5 from "./../../pic5.jpg"
import Pic6 from "./../../pic6.jpg"
import Pic7 from "./../../pic7.jpg"
function About() {
  return (
    <div><h1 className={classes.heading}>About Us</h1>
      <h3>Allow us to tell you a short story...</h3>
      <div className={classes.about_container}>
        <div className={classes.sub_container}>
          <div className={classes.pic_container} style={{ backgroundImage: `url(${Pic4})`, marginRight: "10px", marginBottom: "80px" }}>
            <div className={classes.sizes}>
              <h2>Chapter I</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h4>


            </div>
          </div>
          <div className={classes.pic_container} style={{ backgroundImage: `url(${Pic5})`, marginLeft: "10px" }}>
            <div className={classes.sizes}>
              <h2>Chapter II</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h4>


            </div>
          </div>
        </div>
        <div className={classes.sub_container}>
          <div className={classes.pic_container} style={{ backgroundImage: `url(${Pic6})`, marginRight: "10px", marginBottom: "80px" }}>
            <div className={classes.sizes}>
              <h2>Chapter III</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h4>


            </div>
          </div>
          <div className={classes.pic_container} style={{ backgroundImage: `url(${Pic7})`, marginLeft: "10px" }}>
            <div className={classes.sizes}>
              <h2>Chapter IV</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h4>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About