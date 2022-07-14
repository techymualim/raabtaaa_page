
import { useState } from 'react';


import "../styles/styles.css";
import Header from "./Header.js";
import HomePage from "./HomePage.js";
import DifferPage from "./DifferPage.js";
import Footer from "./Footer.js";




export default function App() {
  const [homeActive, setHomeActive] = useState(true);

  return (
    <div className="box_one">
      <Header homeActive={homeActive} setHomeActive={setHomeActive} />
      {homeActive ? <HomePage /> : <DifferPage />}
      <Footer/>
      
    </div>
  );
}
