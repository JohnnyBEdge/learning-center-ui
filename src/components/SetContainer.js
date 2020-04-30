import React from 'react';
import '../comp-styling/set-container.css'
import {CardSetContext} from '../context/card-sets';

class SetContainer extends React.Component{
    constructor(props){
        super(props);

        // this.state={
        //     cards: props.cards
        // }
    }

    render(){

        const displayVocabBank = this.props.cards.map((card) => {
            return <li key={card._id}>{card.term}
                        {/* <button onClick={() => this.deleteVocab(card._id)}>&#128465;</button>
                        <button onClick={() => this.editVocab(card)}>&#9998;</button> */}
                    </li>
        });
        console.log("card",this.props.cards)

        return(
            <CardSetContext.Consumer>
                <div id="set_container">
                    <div id="tab_nav">
                        <ul>
                            <li className="tab active">All</li>
                            <li className="tab">Review</li>
                            <li className="tab">+New Set</li>
                        </ul>
                    </div>
                    <div id="tab_content">
                        {/* <p>test</p> */}

                        <ul>
                            {displayVocabBank} 
                        </ul>
                                            
                    </div>
                </div>
            </CardSetContext.Consumer>
        );
    };

};

export default SetContainer;