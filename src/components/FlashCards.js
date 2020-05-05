import React from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm';
// import Nav from './Nav';
import EditVocabForm from './EditVocabForm';
import SetContainer from './SetContainer';
import {CardSetContext} from '../context/card-sets';
import { Button } from 'reactstrap';
import '../comp-styling/flash-cards.css';
// import Resources from './Resources'
 
class FlashCards extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            allCards: [],
            modalIsOpen: false,
            currentCard: 0,
            editVocab: this.editVocab,
            deleteVocab: this.deleteVocab,
            card: "card"
        }
        this.getVocab = this.getVocab.bind(this);
    };

    getVocab = () => {
        fetch(`http://localhost:5001/api/vocab`)
            .then(response => response.json())
            .then(data => this.setState({allCards: data}, () => console.log(this.state.allCards)))
    };


    deleteVocab = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            fetch(`http://localhost:5001/api/vocab/${id}`,{
                method: "DELETE"
            }).then(response => response.json())
            .then(this.getVocab);
        };
    };

    navigateFlashCards = (e) => {
        if (e.keyCode === 37) {
            this.previousCard();
        } else if(e.keyCode === 39){
            this.nextCard();
        } else if(e.keyCode === 38 || e.keyCode === 40){
            this.flipCard();
        };
    };

    editVocab = (card) => {
        this.setState({
            editVocab:card,
            modalIsOpen: true
        });
    };

    nextCard = () => {
        let card = this.state.currentCard;

        if(card === this.state.allCards.length -1){
            card = 0;
            this.setState({currentCard: card});
        } else {
            card ++; 
            this.setState({currentCard: card});
        };
    };
    previousCard = () => {
        let card = this.state.currentCard;
        let previous;
        if(card === 0){
            previous = this.state.allCards.length-1;
            card = previous;
            this.setState({currentCard: card});
        } else {
            previous = card -1;
            this.setState({currentCard: previous});
        };
    };
    flipCard = () => {
        if(this.state.card === "card"){
            this.setState({card: "card is-flipped"})
        } else {
            this.setState({card: "card"})
        };
    };


    closeModal = () => {
        this.setState({modalIsOpen:false})
    };

    componentDidMount(){
        this.getVocab();
        document.addEventListener("keydown", this.navigateFlashCards);
    };

    render(){
        const displayEditForm = <EditVocabForm key={this.state.editVocab._id} 
                                               modalIsOpen={this.state.modalIsOpen}
                                               closeModal={this.closeModal}
                                               card={this.state.editVocab}
                                               getVocab={this.getVocab} />


        const currentCard = this.state.allCards[this.state.currentCard];


        return(
            <>
                {/* <Nav /> */}
                <CardSetContext.Provider value ={this.state}>
                    <p id="card_set">Card Set: All</p>
                    
                    {currentCard ? <Card currentCard={currentCard} 
                                        card={this.state.card} 
                                        flipCard={this.flipCard} />:""}
               
                    <div id="card_controls">
                        <Button outline color="primary" onClick={this.previousCard}>&#60;&#60; Previous</Button>
                        <p>Click Card to Flip</p>
                        <Button outline color="primary" onClick={this.nextCard}>Next &#62;&#62;</Button>
                    </div>
                    <AddCardForm getVocab={this.getVocab}/>
                    <SetContainer />
                        
                            <ul>
                                {displayEditForm}
                            </ul>
                </CardSetContext.Provider>
                {/* <Resources /> */}
            </>
        )
    };
};

export default FlashCards;
