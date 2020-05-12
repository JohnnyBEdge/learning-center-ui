import React, {useState} from 'react';
import '../../comp-styling/card.css';

    const Card = (props) => {

        const [reviewCards, addReviewCard] = useState([])

        // const addToReview = () => {
        //     addReviewCard([...reviewCards, {currentCard}])
        // }

        return(
            <div className="scene scene--card" onClick={props.flipCard}>
                {/* <p className="review-btn" onClick={() => addToReview()}>R</p> */}
                <div className={props.card}>
                    <div className="card__face card__face--front">{props.currentCard.term}</div>
                    <div className="card__face card__face--back">{props.currentCard.answer}</div>
                </div>
            </div>
        );
    };
export default Card;
