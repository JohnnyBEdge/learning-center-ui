import React from 'react'
import '../comp-styling/card.css'

 
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card: "card",
        }

    }
    flipCard = () => {
        if(this.state.card === "card"){
            this.setState({card: "card is-flipped"})
        } else {
            this.setState({card: "card"})
        }
    }

    render(){
        return(
            <div className="scene scene--card" onClick={this.flipCard}>
                <div className={this.state.card}>
                    <div className="card__face card__face--front">{this.props.currentCard.term}</div>
                    <div className="card__face card__face--back">{this.props.currentCard.answer}</div>
                </div>
            </div>

             
        );
    };
};


export default Card;
