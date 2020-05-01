import React, {useContext} from 'react';
import '../comp-styling/set-container.css'
import {CardSetContext} from '../context/card-sets';


const SetContainer = () => {
    // usecontxt and map allcards to display
    const {
        allCards,
        editVocab,
        deleteVocab
        } = useContext(CardSetContext);

    const listItem = allCards.map((card) => {
        return <li key={card._id}> {card.term}
                    <button onClick={() => deleteVocab(card._id)}>&#128465;</button>
                    <button onClick={() => editVocab(card)}>&#9998;</button> 
             </li>
    });

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
                        <ul id="all_cards_list">
                            {listItem}
                        </ul>
                        
                    </div>
                </div> 
    )
}

export default SetContainer;