import React, {useState} from 'react';
import '../../comp-styling/add-card-form.css'

const AddCardForm = (props) => {
    const [term, setTerm] = useState('');
    const [answer, setAnswer] = useState('');
    const [categories, setCategory] = useState(['all']);

        function addToSet(){
// NEED TO ADD VALIDATION
        fetch(`http://localhost:5001/api/vocab`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({term,answer,categories})
        })
        .then(props.getVocab)
        .then(setTerm(''), setAnswer(''));
    };



    return(
        <div id="add_form"> 
            <select id="category_selector" 
                name="categories"
                onChange={({target}) => setCategory([...categories, target.value])}
                value={categories}>
                <option>JS</option>
                <option>CS</option>
                <option>HTML</option>
            </select>
            <input type="text" 
                id="term"
                name="term"
                onChange={({target}) => setTerm(target.value)}
                placeholder="Question or Term"
                value={term} />

            <textarea 
                id="answer"
                name="answer"
                onChange={({target}) => setAnswer(target.value)}
                placeholder="Answer"
                value={answer} />
            <button id="add_card_btn" onClick={() => addToSet()}>Add Card</button>
        </div>
);
};

export default AddCardForm;