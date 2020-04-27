import React from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm';
 
class CardDisplay extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cards: []
        }
    };

    getVocab = () => {
        fetch(`http://localhost:5001/api/vocab`)
            .then(response => response.json())
            .then(data => this.setState({cards: data}, () => console.log(this.state.cards)))
    };

    componentDidMount(){
        this.getVocab();
    };

    

    render(){
        const displayVocab = this.state.cards.map((card) => {
            return <li>{card.term}</li>
        })
        return(
            <div id="card_display">
                <AddCardForm />
                <Card />
                <ul>
                    {displayVocab}
                </ul>
            </div>
        )
    };
};

export default CardDisplay;
