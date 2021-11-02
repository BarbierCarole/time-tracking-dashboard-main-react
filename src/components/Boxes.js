import React from 'react';

const Boxes = () => {
    return (
        <div className="boxes">
            <div className="work">
                <div className="header">
                    {/* <img src={work} className="icon" alt="icone" />  */}
                    <span className="icon"></span>
                </div>
                <div className="content">
                    5hrs {/* <!-- daily--> */}
                    Previous - 7hrs {/* <!-- daily--> */}
                    32hrs {/* <!-- weekly--> */}
                    Previous - 36hrs {/* <!-- weekly--> */}
                    103hrs {/* <!-- monthly--> */}
                    Previous - 128hrs {/* <!-- monthly--> */}
                </div>            
            </div>
            <div className="play">
                <div className="header">
                </div>
                <div className="content">
                    1hr {/* <!-- daily--> */}
                    Previous - 2hrs {/* <!-- daily--> */}
                    10hrs {/* <!-- weekly--> */}
                    Previous - 8hrs {/* <!-- weekly--> */}
                    23hrs {/* <!-- monthly--> */}
                    Previous - 29hrs {/* <!-- monthly--> */} 
                </div>
            </div>
            <div className="study">
                <div className="header">
                </div>
                <div className="content">
                    0hrs {/* <!-- daily--> */}
                    Previous - 1hr {/* <!-- daily--> */}
                    4hrs {/* <!-- weekly--> */}
                    Previous - 7hrs {/* <!-- weekly--> */}
                    13hrs {/* <!-- monthly--> */}
                    Previous - 19hrs {/* <!-- monthly--> */} 
                </div>   
            </div>
            <div className="exercise">
                <div className="header">
                </div>
                <div className="content">
                    1hr {/* <!-- daily--> */}
                Previous - 1hr {/* <!-- daily--> */}
                4hrs {/* <!-- weekly--> */}
                Previous - 5hrs {/* <!-- weekly--> */}
                11hrs {/* <!-- monthly--> */}
                Previous - 18hrs {/* <!-- monthly--> */} 
                </div>    
            </div>
            <div className="social">
                <div className="header">
                </div>
                <div className="content">
                    1hr {/* <!-- daily--> */}
                Previous - 3hrs {/* <!-- daily--> */}
                5hrs {/* <!-- weekly--> */}
                Previous - 10hrs {/* <!-- weekly--> */}
                21hrs {/* <!-- monthly--> */}
                Previous - 23hrs {/* <!-- monthly--> */} 
                </div>    
            </div>
            <div className="selfcare">
                <div className="header">
                </div>
                <div className="content">
                    0hrs {/* <!-- daily--> */}
                Previous - 1hr {/* <!-- daily--> */}
                2hrs {/* <!-- weekly--> */}
                Previous - 2hrs {/* <!-- weekly--> */}
                7hrs {/* <!-- monthly--> */}
                Previous - 11hrs {/* <!-- monthly--> */}
                </div>
            </div>
        </div>
                
    );
};

export default Boxes;