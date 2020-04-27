import React from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm';
import Nav from './Nav';
 
class FlashCards extends React.Component{
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


    deleteVocab = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            fetch(`http://localhost:5001/api/vocab/${id}`,{
                method: "DELETE"
            }).then(response => response.json())
            .then(this.getVocab);
        };
        }


    componentDidMount(){
        this.getVocab();
    };

    

    render(){
        const displayVocab = this.state.cards.map((card) => {
            return <li>{card.term}<button onClick={() => this.deleteVocab(card._id)}>X</button></li>
        })

        return(
            <div id="card_display">
                <Nav />
                <AddCardForm getVocab={this.getVocab}/>
                <Card />
                <ul>
                    {displayVocab}
                </ul>
            </div>
        )
    };
};

export default FlashCards;
