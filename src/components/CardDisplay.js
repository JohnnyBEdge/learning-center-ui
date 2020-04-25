import React from 'react'
import Card from './Card'
 
class CardDisplay extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="card_display">
                <Card />
            </div>
        )
    };
};

export default CardDisplay;
