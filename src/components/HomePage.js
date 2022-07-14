import "../styles/styles.css";


import {ReactComponent as Art_one} from '../assets/art1.svg';
import {ReactComponent as Msg_icon} from '../assets/msg_icon.svg';
import {ReactComponent as Box1Icon} from '../assets/bx1_icn.svg';
import {ReactComponent as Box2Icon} from '../assets/bx2_icn.svg';
import {ReactComponent as Box3Icon} from '../assets/bx3_icn.svg';
import {ReactComponent as Box4Icon} from '../assets/bx4_icn.svg';

import Verticals from "./Verticals.js";




export default function HomePage() {
  return (
    <div className="box">
    <div className="box_one1">
        <div className="box_mid">
      <div className="comp1">
        <Art_one/>
      </div>
      <div className="comp2">
        <h3>Hire Pre-Vetted Workers In<span><br/>24 Hours</span>
        </h3>
        <p>Flexible and reliable workforce that meets your hiring requirements in 24 hours.
</p>
<a  href="#contact" rel="noreferrer">
<div className="cont_btn">
    <div className="icn">
      <Msg_icon/>
    </div>
   <p>CONTACT US</p>
</div>
</a>
      </div>
      </div>
    </div>
    <div className="box_one2">
    <div className="heading">
      <p>Make Staffing Easy With Us</p>
    </div>
    <div className="staff_boxes">
      <div className="box">
        <div className="icon">
          <Box1Icon/>
        </div>
        <div className="text">
          <h2>PRE-VETTED WORKERS</h2>
          <p>Pool of verified workers and vetted skills ensuring high quality of work.</p>
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <Box2Icon/>
        </div>
        <div className="text">
          <h2>ALL-IN-ONE</h2>
          <p>One stop platform for on-boarding and digital verification of workers.</p>
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <Box3Icon/>
        </div>
        <div className="text">
          <h2>QUICK</h2>
          <p>Fulfilling your hiring requirements within 24 hours.</p>
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <Box4Icon/>
        </div>
        <div className="text">
          <h2>COMPLIANT</h2>
          <p>Conduct background verification, KYC, and insurance on the platform.</p>
        </div>
      </div>
      
    </div>
    </div>
    <Verticals text={"Our Focused Verticals"} />
    <div id="contact" className="box_one4">
    <div className="heading">
        Get In Touch With Us
      </div>
      <form>
        <div className="form_box_parent">
        <div className="form_box">
        <div className="cont_in">
        <label htmlFor="Name">Name<span>*</span></label>
        <br/>
        <input type="text" id="Name"/>
        </div>
        <div className="cont_in">
        <label htmlFor="mail">E-Mail Address<span>*</span></label>
        <br/>
        <input type="email" id="mail"/>
        </div>
        </div>
        <div className="form_box">
        <div className="cont_in">
        <label htmlFor="phone">Phone Number<span>*</span></label>
        <br/>
        <input type="number" id="phone"/>
        </div>
        <div className="cont_in">
        <label htmlFor="address">Address<span>*</span></label>
        <br/>
        <input type="text" id="address"/>
        </div>
        </div>
        </div>
   
        <div className="question_box">
        <label htmlFor="question">Question<span>*</span></label>
        <br/>
        <input type="text" id="question"/>
        </div>
        <a  href="https://www.raabtaa.co" rel="noreferrer"> <input type="submit" id="submit_btn"/></a>
       
        
      </form>
     
    
        
     
    </div>

    </div>
  );
}
