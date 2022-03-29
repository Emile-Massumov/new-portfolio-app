import "./about.css"
import Second from "../../img/second-pic.jpg"
import Skills from "../../img/cert-skill.png"

const About = () => {
    return ( 
    <div className="about">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Second} alt="" className="a-image"/>
            </div>
            </div>
        <div className="a-right">
    <h1 className="a-title">About me</h1>
    <p className="a-sub">
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. 
    </p>
    <p className="a-desc">
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam,
     quis nostrud exercitation ullamco 
     laboris nisi ut aliquip ex ea commodo 
     consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in
        culpa qui officia deserunt 
    mollit anim id est laborum.
    </p>
    <div className="a-award">
    <img src={Skills} alt="" className="a-award-img" />
    <div className="a-award-texts">
    <h4 className="a-award-title">SkillCrush Certificate course Front-End Development and Disign.</h4>
  <p className="a-award-desc">
  Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua.    
  </p>
    </div>
    </div>
    </div>
    </div>
      )
}
  export default About 