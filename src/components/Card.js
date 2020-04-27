import React from 'react'
import '../comp-styling/card.css'
 
const Card = ({card}) => {

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <p>Test Front</p>
                </div>

                <div className="card-back">
                    <p>Test Back</p>
                </div>
            
            </div>
        </div>
    );
}

export default Card;
