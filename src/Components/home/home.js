import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import './home.css';
import Header from '../header/header'


function Home() {
  
return(<>   
<Header/>
 <div className="contact-list">
      {data.map((contact) => (
        <div className="contact-card" key={contact.email}>
          <img src={contact.picture.medium} alt={contact.name} />
          <div className="contact-details">
            <h3>Name: <p>{contact.name.first}</p></h3>
            <br/>
            <h3>Contact No : <p>{contact.phone}</p></h3>
            
          </div>
        </div>
      ))}
    </div>
    </>

)
}

export default Home;
