import React from 'react';

class AddCardForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            term: '',
            answer: ''
        }
    // handleChange = ({target}) => {
    //     const key = target.name;
    //     this.setState({[key]:target.value})
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch(`http://localhost:5001/api/gear`,{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify([this.state])
    //     }).then(() => this.setState({
    //             term: '',
    //             answer: ''
    //     })).then(this.props.getVocab)
    // };

    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    name="question"
                    onChange={this.handleChange} 
                    placeholder="Question or Term"
                    value={this.state.question} />
                <input type="text" 
                    name="answer"
                    onChange={this.handleChange}
                    placeholder="Answer"
                    value={this.state.answer} />
                <button type="submit">Add Card</button>
            </form>
        );
    };
};

export default AddCardForm;