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
                    <p>Previous Card</p>
                    <p>Click Card to Flip</p>
                    <p>Next Card</p>
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
