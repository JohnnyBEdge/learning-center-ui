import React from 'react'
import '../comp-styling/card.css'

    const Card = (props) => {
        return(
            <div className="scene scene--card" onClick={props.flipCard}>
                <div className={props.card}>
                    <div className="card__face card__face--front">{props.currentCard.term}</div>
                    <div className="card__face card__face--back">{props.currentCard.answer}</div>
                </div>
            </div>
        );
    };
export default Card;
