import React from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm';
import Nav from './Nav';
import EditVocabForm from './EditVocabForm';
 
class FlashCards extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            modalIsOpen: false,
            editVocab: {},
            currentCard: 0
        }
        this.getVocab = this.getVocab.bind(this);
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
    };

    editVocab = (card) => {
        this.setState({
            editVocab:card,
            modalIsOpen: true
        })
    };

    nextCard = () => {
        let card = this.state.currentCard;

        if(card == this.state.cards.length -1){
            card = 0;
            this.setState({currentCard: card});
        } else {
            card ++; 
            this.setState({currentCard: card});
        }
    }
    previousCard = () => {
        let card = this.state.currentCard;
        let previous;
        if(card == 0){
            previous = this.state.cards.length-1;
            card = previous;
            this.setState({currentCard: card});
        } else {
            previous = card -1;
            this.setState({currentCard: previous});
        }
    }


    


    closeModal = () => {
        this.setState({modalIsOpen:false})
    };

    componentDidMount(){
        this.getVocab();
    };

    render(){
        const displayVocabBank = this.state.cards.map((card) => {
            return <li key={card._id}>{card.term}
                    <button onClick={() => this.deleteVocab(card._id)}>&#128465;</button>
                    <button onClick={() => this.editVocab(card)}>&#9998;</button>
                    </li>
        })

        const displayEditForm = <EditVocabForm key={this.state.editVocab._id} 
                                               modalIsOpen={this.state.modalIsOpen}
                                               closeModal={this.closeModal}
                                               card={this.state.editVocab}
                                               getVocab={this.getVocab} />


        const currentCard = this.state.cards[this.state.currentCard];


        return(
            <div id="card_display">
                <Nav />
                <p id="card_set">Card Set: All</p>
                {currentCard ? <Card currentCard={currentCard}/>:""}
                <div id="card_controls">
                    <p onClick={this.previousCard}>Previous Card</p>
                    <p>Click Card to Flip</p>
                    <p onClick={this.nextCard}>Next Card</p>
                </div>
                
                <div className="word_bank">
                    <AddCardForm getVocab={this.getVocab}/>
                    <ul>
                        {displayVocabBank}
                        {displayEditForm}
                    </ul>
                </div>


            </div>
        )
    };
};

export default FlashCards;
