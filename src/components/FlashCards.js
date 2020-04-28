import React from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm';
import Nav from './Nav';
import ReactToolTip from 'react-tooltip';
import Modal from 'react-modal'
import EditVocabForm from './EditVocabForm';
 
class FlashCards extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            modalIsOpen: false,
            editVocab: {}
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
        const displayVocab = this.state.cards.map((card) => {
            return <li>{card.term}
                    <button onClick={() => this.deleteVocab(card._id)}>&#128465;</button>
                    <button onClick={() => this.editVocab(card)}>&#9998;</button>
                    </li>
        })

        const displayEditForm = <EditVocabForm key={this.state.editVocab._id} 
                                               modalIsOpen={this.state.modalIsOpen}
                                               closeModal={this.closeModal}
                                               card={this.state.editVocab}
                                               getVocab={this.getVocab} />

        return(
            <div id="card_display">
                <Nav />
                <AddCardForm getVocab={this.getVocab}/>
                <Card />
                <ul>
                    {displayVocab}
                    {displayEditForm}
                </ul>
            </div>
        )
    };
};

export default FlashCards;
