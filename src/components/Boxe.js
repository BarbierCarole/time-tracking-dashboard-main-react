import React, {useState} from 'react';
import suspendingPoints from './../images/icon-ellipsis.svg';

const Boxe = (props) => {
    console.log('props',props);
    
    const [box, setBox] = useState(props.data);
    console.log('box :',box);

    return (
        <div className={box.title.toLowerCase()}>
        {/* <div className="work"> */}
            <div className="header">
                {/* <img src={work} className="icon" alt="icone" />  */}
                <span className="icon"></span>
            </div>
            <div className="content">
                <div className="content-title">
                    <span>{box.title}</span>
                    <span><img src={suspendingPoints} alt="..."/> </span>
                </div>
                <div className="content-detail">
                    <div class="daily">
                        <h3>{box.timeframes.daily.current}</h3> {/* <!-- daily--> */}
                        <h2> Last day - 7hrs </h2>{/* <!-- daily--> */}
                    </div>
                    <div class="weekly">
                        <h3>5hrs</h3> {/* <!-- daily--> */}
                        <h2> Last Week - 21hrs </h2>{/* <!-- daily--> */}
                    </div> 
                    <div class="monthly">
                        <h3>55hrs</h3> {/* <!-- daily--> */}
                        <h2> Last month - 97hrs </h2>{/* <!-- daily--> */}
                    </div>   
                </div>
            </div>            
        </div>
    );
};

export default Boxe;