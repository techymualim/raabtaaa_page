import "../styles/styles.css";

import Emp1 from '../assets/emp1.svg';
import Emp2 from '../assets/emp2.svg';
import Emp3 from '../assets/emp3.svg';
import Emp4 from '../assets/emp4.svg';
import Emp5 from '../assets/emp5.svg';
import raabtaa_white_logo from '../assets/white_logo.svg';



export default function Footer(){
    return(
      
        <div className="box_one5">
    <div className="heading"><p>Trusted Employers With<br/><span>Raabtaa</span></p></div>
    <div className="companies_boxes">
   
     <div className="comp_bx">
      <img src={Emp1} alt="Company Logo"></img>
    </div>
    <div className="comp_bx">
      <img src={Emp2} alt="Company Logo"></img>
    </div>
    <div className="comp_bx">
      <img src={Emp3} alt="Company Logo"></img>
    </div>
    <div className="comp_bx">
      <img src={Emp4} alt="Company Logo"></img>
    </div>
    <div className="comp_bx">
      <img src={Emp5} alt="Company Logo"></img>
    </div>
    </div>
    <div className="footer">
      <div className="logo"><img src={raabtaa_white_logo} alt="raabtaa_logo"/></div>
      <div className="address"><p>Plot 100 C, 1st Floor, 11th Commercial St,<br/>
Phase 2 Ext Defence Housing Authority, Karachi, 75500</p></div>
    <div className="phone"><p>+92-305-3511818</p></div>
    <div className="copyright"><p>© 2022 Raabtaa Tech</p></div>
    <div className="icons">
      <div className="icon">
      <a href="">
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.25" x="0.75" y="0.75" width="36.3646" height="36.3646" rx="18.1823" stroke="white" stroke-width="1.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0398 26.2138V18.9315H15.5342V16.4219H17.0398V14.9152C17.0398 12.8678 17.89 11.6504 20.3053 11.6504H22.3162V14.1603H21.0593C20.119 14.1603 20.0568 14.511 20.0568 15.1656L20.0534 16.4216H22.3304L22.064 18.9312H20.0534V26.2138H17.0398Z" fill="white"/>
</svg>
</a>
<a href="https://www.linkedin.com/company/raabtaa" rel="noreferrer">
<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect opacity="0.25" x="1.20706" y="0.75" width="36.3646" height="36.3646" rx="18.1823" stroke="white" stroke-width="1.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9913 25.2429H13.0786V16.5049H15.9913V25.2429Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5263 14.5631H14.5097C13.6405 14.5631 13.0786 13.9155 13.0786 13.1062C13.0786 12.2798 13.6576 11.6504 14.5433 11.6504C15.429 11.6504 15.9745 12.2798 15.9913 13.1062C15.9913 13.9155 15.429 14.5631 14.5263 14.5631Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6709 25.2426H23.8088V20.6752C23.8088 19.5279 23.3946 18.7451 22.3585 18.7451C21.5678 18.7451 21.0968 19.2728 20.8899 19.7826C20.8142 19.9653 20.7956 20.2198 20.7956 20.4749V25.2429H17.9331C17.9331 25.2429 17.9708 17.5067 17.9331 16.7056H20.7956V17.9148C21.1755 17.3335 21.8559 16.5049 23.3756 16.5049C25.259 16.5049 26.6711 17.7253 26.6711 20.3476L26.6709 25.2426Z" fill="white"/>

</svg>
</a>
<a href="">
<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.25" x="1.66412" y="0.75" width="36.3647" height="36.3646" rx="18.1823" stroke="white" stroke-width="1.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.6641 16.4336L19.6915 16.8955L19.2355 16.839C17.5757 16.6221 16.1257 15.8868 14.8945 14.6519L14.2926 14.0391L14.1376 14.4916C13.8092 15.5003 14.019 16.5656 14.703 17.2821C15.0678 17.678 14.9857 17.7346 14.3564 17.4989C14.1376 17.4235 13.946 17.3669 13.9278 17.3952C13.864 17.4612 14.0828 18.3191 14.2561 18.6584C14.4932 19.1298 14.9766 19.5917 15.5055 19.8651L15.9524 20.0819L15.4234 20.0914C14.9127 20.0914 14.8945 20.1008 14.9492 20.2988C15.1316 20.9115 15.8521 21.562 16.6546 21.8448L17.22 22.0428L16.7276 22.3445C15.998 22.7781 15.1407 23.0232 14.2835 23.0421C13.8731 23.0515 13.5356 23.0892 13.5356 23.1175C13.5356 23.2118 14.6483 23.7397 15.2958 23.9471C17.2383 24.5599 19.5456 24.2959 21.2783 23.2495C22.5095 22.5047 23.7407 21.0247 24.3152 19.5917C24.6253 18.8281 24.9354 17.4329 24.9354 16.7636C24.9354 16.3299 24.9627 16.2733 25.4734 15.7548C25.7744 15.4532 26.0571 15.1232 26.1118 15.0289C26.203 14.8498 26.1939 14.8498 25.7288 15.0101C24.9536 15.2929 24.8442 15.2552 25.2272 14.831C25.5099 14.5293 25.8474 13.9825 25.8474 13.8223C25.8474 13.794 25.7106 13.8411 25.5555 13.926C25.3914 14.0202 25.0266 14.1616 24.753 14.2465L24.2605 14.4067L23.8136 14.0956C23.5674 13.926 23.2209 13.7374 23.0385 13.6809C22.5734 13.5489 21.862 13.5677 21.4425 13.7186C20.3025 14.1428 19.5821 15.2363 19.6641 16.4336Z" fill="white"/>
</svg>
</a>
</div>
    </div>
      </div>
  </div>
    );

}