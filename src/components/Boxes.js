import React, { useState } from 'react';

import Boxe from './Boxe'; 
import boxesList from './../data/data.json';

const Boxes = (props) => {

    const [data, setData] = useState({boxesList});

    return (
        <div className="boxes">
            
            {data.boxesList.map((boxe) =>
                <div>
                <Boxe data={boxe}/>
                </div>
            )}  
        
            
        </div>
    );
};

export default Boxes;