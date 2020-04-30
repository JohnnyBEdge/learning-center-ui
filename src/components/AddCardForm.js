import React, {useState, useContext} from 'react';
// import {CardSetContext} from '../context/card-sets';

const AddCardForm = (props) => {
    const [term, setTerm] = useState('');
    const [answer, setAnswer] = useState('');
    // const {getVocab} = useContext(CardSetContext);

        function addToSet(){
// NEED TO ADD VALIDATION
        fetch(`http://localhost:5001/api/vocab`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({term,answer})
        })
        .then(props.getVocab)
        .then(setTerm(''), setAnswer(''));
    };

    return(
        <div> 
            <input type="text" 
                name="term"
                onChange={({target}) => setTerm(target.value)} 
                placeholder="Question or Term"
                value={term} />
            <input type="text" 
                name="answer"
                onChange={({target}) => setAnswer(target.value)}
                placeholder="Answer"
                value={answer} />
            <button onClick={() => addToSet()}>Add Card</button>
        </div>
);
};



// class AddCardForm extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             term: '',
//             answer: ''
//         }
//     };

//     handleChange = ({target}) => {
//         const key = target.name;
//         this.setState({[key]:target.value})
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();
// // NEED TO ADD VALIDATION
// console.log(this.state)
//         fetch(`http://localhost:5001/api/vocab`,{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(this.state)
//         }).then(() => this.setState({
//                 term: '',
//                 answer: ''
//         })).then(this.props.getVocab)
//     };



//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" 
//                     name="term"
//                     onChange={this.handleChange} 
//                     placeholder="Question or Term"
//                     value={this.state.term} />
//                 <input type="text" 
//                     name="answer"
//                     onChange={this.handleChange}
//                     placeholder="Answer"
//                     value={this.state.answer} />
//                 <button type="submit">Add Card</button>
//             </form>
//         );
//     };
// };

export default AddCardForm;