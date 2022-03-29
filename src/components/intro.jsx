import "./intro.css"
import Me from "../../src/img/hero.jpg"

const Intro = () => {
    return ( 
    <div className="i">
      <div className="i-left">
      <div className="i-left-wrapper">
      <h2 className="i-intro">Hello my name is</h2>
      <h1 className="i-name">Émile Massumov</h1>
      <div className="i-title">
        <div className="i-title-wrapper">
          <div className="i-title-item">Web developer</div>
          <div className="i-title-item">Coder</div>
          <div className="i-title-item">Traveler</div>
          <div className="i-title-item">React and JS learner</div>
      </div>
      </div>
      <div className="i-desc">
      I'm Émile - a Front-End Developer from Montréal, Canada.
I have finished the Skillcrush Front-End Development course which gave me 
a knowledge of HTML-CSS & how to use JavaScript & React JS. With every line of code, 
I strive to make the web a beautiful place.
      </div>
      </div>
      </div>
      <div className="i-right">
     <img src={Me} alt="" className="i-image"/> 
     </div>
      

   </div>
  )
}
  export default Intro