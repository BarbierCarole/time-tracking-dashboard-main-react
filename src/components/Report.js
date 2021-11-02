import React from 'react';
import jeremy from '../images/image-jeremy.png';
const Report = () => {
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
            Daily
            Weekly
            Monthly  
          </div>
        </div>
    );
};

export default Report;