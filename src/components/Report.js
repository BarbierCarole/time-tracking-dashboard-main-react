import React from 'react';
import { useState } from 'react/cjs/react.development';
import jeremy from '../images/image-jeremy.png';
import boxesList from './../data/data.json';

const Report = ({option, setOption}) => {
  
  const [data, setData] = useState({boxesList});

  const myChoiseOption = (e) => {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    console.log('e',e.target.className);
    setOption(e.target.className);
    e.target.className += " active";
  }


  return (
      <div className="report">
        <div className="header">
          <img src={jeremy} className ="profil-img" alt="Jérémy" />
          <div className="profil-name">
            <h2>Report for</h2>
            <h1>Jeremy Robson</h1>
          </div>            
        </div>
        <div className="content">
          <ul onClick= {(e) => myChoiseOption(e)}>
            <li className="daily" >
              Daily
            </li>
            <li className="weekly active" >
              Weekly
            </li>
            <li className="monthly" >
              Monthly
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Report;