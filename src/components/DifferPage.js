import "../styles/worker.css";
import Icn1 from "../assets/fast_icn.svg";
import Icn2 from "../assets/whtsapp_icn.svg";
import Icn3 from "../assets/local_icn.svg";


import Illus1 from "../assets/illus_1.svg";
import Illus2 from "../assets/illus_2.svg";
import Illus3 from "../assets/illus_3.svg";

import Pic1 from "../assets/pic1.svg";
import Pic2 from "../assets/pic2.svg";

import {ReactComponent as Art_two} from '../assets/art2.svg';
import {ReactComponent as Person_add} from '../assets/person_add.svg';
import Verticals from "./Verticals.js";
import FAQ from "./FAQ.js"






export default function DifferPage() {
  return (
    <div className="boxb">
        <div className="box_mid_w">
      <div className="comp1">
        <Art_two/>
      </div>
      <div className="comp2">
        <h3>
        Find Work Near You
        </h3>
        <p>Complete the sign-up process to be eligible for hundreds of jobs.

</p>
<a  href="https://www.raabtaa.co" rel="noreferrer">
<div className="cont_btn">
    <div className="icn">
      <Person_add/>
    </div>
    <p>SIGN UP</p>
</div>
</a>
      </div>
      </div>
    <div className="box_mid_w2">
      <div className="heading">
        <p>Why Choose Raabtaa</p>
      </div>
      <div className="boxes_w">
        <div className="box_w">
          <div className="icon">
            <img src={Icn1} alt="Fast Response Icon"/>
          </div>
          <h3>Fast<br/>Responses</h3>
          <p>Apply & get response within 24 hours.</p>
        </div>
        <div className="box_w">
          <div className="icon">
            <img src={Icn2} alt="Whatsapp Icon"/>
          </div>
          <h3>Whatsapp<br/>Alerts</h3>
          <p>Receive real time job alerts on daily basis via Whatsapp.</p>
        </div>
        <div className="box_w">
          <div className="icon">
            <img src={Icn3} alt="Localized Icon"/>
          </div>
          <h3>Localize<br/>Oppurtunities</h3>
          <p>Opportunities based on your location & experience.</p>
        </div>
      </div>
    </div>
    <div className="box_mid_w3">
      <div className="heading">
        <p>Steps To Sign Up</p>
      </div>
      <div className="illus_boxes">
        <div className="illus_box">
        <div className="illus">
          <img src={Illus1} alt="Illustration"/>
        </div>
        <div className="text">
          <h3>Get Started</h3>
          <p>
          Sign up on Raabtaa and fill out your information along with your job category preference.
          </p>
        </div>
        </div>
        <div className="illus_box">
        <div className="illus">
        <img src={Illus2} alt="Illustration"/>
        </div>
        <div className="text">
          <h3>Verify Yourself</h3>
          <p>
          Complete the stage two of the sign-up process along with your documentation and skill test to become eligible for jobs.
          </p>
        </div>
        </div>
       <div className="illus_box">
       <div className="illus">
        <img src={Illus3} alt="Illustration"/>
        </div>
        <div className="text">
          <h3>Find Jobs</h3>
          <p>
          Get notification for jobs that match your skills and preferences. Apply with a single click!
          </p>
        </div>
       </div>
        </div>
        
        </div>
       
        <Verticals text={"Jobs By Categories"} />
        <div className="box_mid_w5">
          <div className="heading">What Do Our Users Say</div>
          <div className="user_boxes">
            <div className="user_box">
            <div className="pic"><img src={Pic1} alt="user picture"/></div>
              <div className="text">
                <p>
                “Raabtaa is beneficial to blue collar workers like us as we have the opportunity to create a profile which is sent out to companies. This helps us save time and effort.”<br/>
                <br/><span>Amir Gujjar</span>
                <br/>Sales Officer
                </p>
              </div>
            </div>
            <div className="user_box second">
            <div className="pic"></div>
              <div className="text">
                <p>“I liked the fact that i didn't have to go door to door to companies to drop my CV off. I just had to make my profile at one place and was then contacted by the company themselves.”
                  <br/>
                  <br/><span>Muhammad Faisal</span>
                  <br/>Order Booker</p>
              </div>
              <div className="pic"><img src={Pic2} alt="user picture"/></div>
            </div>
          </div>
        </div>
        
        <FAQ/>
      </div>
   
    
  );
}
