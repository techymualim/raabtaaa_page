import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
 
    rows: [
        {
            title: <p>What are the requirements of signing up on Raabtaa?</p>,
            content: <p>The following are the requirements of signing up on Raabtaa:
                <ul>
                    <li>•You are a Pakistani citizen</li>
                    <li>•You are at least 18 years old</li>
                    <li>•You own a smartphone</li>
                    <li>•You have Raabtaa application installed on your phone</li>
                </ul>           
           </p>,
        },
        {
            title: <p>Why is the Raabtaa application not working on my phone?</p>,
            content:
            <p>We are sorry you are experiencing problems. To resolve the problems, you can check the following things:
            <ul>
                <li>•Make sure you have a stable internet connection</li>
                <li>•Make sure you have the latest version of the application installed</li>
            </ul>
            
           </p>
        },
        {
            title: <p>What will my data be used for?</p>,
            content:<p>Your personal data will be used to 
            ensure the security of your account and alert any jobs 
            available according to your preferences. Raabtaa maintains 
            the confidentiality of all data and does not share it with a third party.</p>
          },
        {
            title: <p>I am facing issues while signing up, who do I contact?</p>,
            content: <p>Please use the following helpline to resolve your issues:<br/>
            <span>+92-305-3511818</span></p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    rowTitleTextSize:'25px',
    rowContentTextSize:'large'
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


export default function FAQ(){
    return(
        <div className="box_mid_w6">
            <div className="heading">
                <p>Frequently Asked Questions (FAQs)</p>
            </div>
            <div className="faq">
            <Faq
            data={data}
            styles={styles}
            config={config}
        />
            </div>
        
    </div>
    );
}