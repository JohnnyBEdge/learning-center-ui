import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class EditVocabForm extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            term: this.props.card.term,
            answer: this.props.card.answer
        }
    }

    handleChange = ({target}) => {
        const key = target.name;
        this.setState({[key]: target.value})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5001/api/vocab/${this.props.card._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(this.props.getVocab)
            .then(this.props.closeModal)
    };

    render(){
        return(
            <Modal isOpen={this.props.modalIsOpen} onRequestClose={this.props.closeModal}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                            name="term"
                            placeholder="Term or question"
                            value={this.state.term}
                            onChange={this.handleChange} />
                    <input type="text"
                            name="answer"
                            placeholder="Answer"
                            value={this.state.answer}
                            onChange={this.handleChange} />
                    <button type="submit">Submit Changes</button>
                    <button type="button" onClick={() => this.props.closeModal()}>Cancel</button>
                </form>
            </Modal>
        );
    };
};

export default EditVocabForm;