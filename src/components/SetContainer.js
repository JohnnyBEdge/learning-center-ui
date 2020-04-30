import React from 'react';
import '../comp-styling/set-container.css'

class SetContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="set_container">
                <div id="tab_nav">
                    <ul>
                        <li className="tab active">All</li>
                        <li className="tab">Review</li>
                        <li className="tab">+New Set</li>
                    </ul>
                </div>
                <div id="tab_content">
                    <p>test</p>
                    
                </div>
            </div>
        );
    };

};

export default SetContainer;