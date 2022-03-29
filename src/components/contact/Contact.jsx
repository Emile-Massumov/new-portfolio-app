import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Adress from "../../img/address.png";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
   
    
    return ( 
<div className="contact">
<div className="contact-bg"></div>
<div className="contact-wrapper">
    <div className="contact-left">
    <h1 className="contact-title">Let's discuss your project</h1>
    <div className="contact-info">
        <div className="c-info-item">
            <img src={Phone} alt="" className="c-icon" 
           />
                      +1 514-998-4100
         </div>
         <div className="c-info-item">
            <img src={Email} alt="" className="c-icon" 
           />
        dilshadca@gmail.com
         </div>
         <div className="c-info-item">
            <img src={Adress} alt="" className="c-icon" 
           />
        Montréal, Québec, CA
         </div>
    </div>
    </div>
    <div className="contact-right">
    <p className="c-desc">
    <b>What's your story?</b> Get in touch.</p>
    <form>
      <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
      <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
      <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
       <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
       <button>Submit</button>
    </form>



    </div>
</div>
    
</div>

    )
} 








export default Contact 