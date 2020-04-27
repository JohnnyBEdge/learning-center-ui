import React from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm';
 
class CardDisplay extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="card_display">
                <AddCardForm />
                <Card />
            </div>
        )
    };
};

export default CardDisplay;
