import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../comp-styling/add-resource-modal.css';

const AddResource = (props) => {

  const [modal, setModal] = useState(false);
  const [art_name, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState('');

  function addArticle(){
    fetch(`http://localhost:5001/api/resources`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({art_name, author, url, keywords})
    }).then(props.getResources)
    .then(setTitle(''), setAuthor(''), setUrl(''), setKeywords(''), toggle())
};

  const toggle = () => setModal(!modal);

  return (
    <div>
      
        <Button color="success" onClick={toggle}>Add Article</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Resource</ModalHeader>
        <ModalBody>
            <div className="add-article">
                <input type="text"
                    id="art_name"
                    name="art_name"
                    placeholder="Article Title"
                    onChange={({target}) => setTitle(target.value)}
                    value={art_name} />
                <input type="text"
                    id="url"
                    name="url"
                    placeholder="URL"
                    onChange={({target}) => setUrl(target.value)}
                    value={url} />
                <input type="text"
                    id="author"
                    name="author"
                    placeholder="Author"
                    onChange={({target}) => setAuthor(target.value)}
                    value={author} />
                <input type="text"
                    id="keywords"
                    name="keywords"
                    placeholder="Keywords"
                    onChange={({target}) => setKeywords(target.value)}
                    value={keywords} />
            </div>
        </ModalBody>
        <ModalFooter>
            <Button color="success" id="add_art_btn" onClick={()=>addArticle()}>Add Article</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddResource;


// const AddResource = (props) => {

    // const [art_name, setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    // const [url, setUrl] = useState('');
    // const [keywords, setKeywords] = useState('');

    // function addArticle(){
    //     fetch(`http://localhost:5001/api/resources`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({art_name, author, url, keywords})
    //     }).then(props.getResources)
    //     .then(setTitle(''), setAuthor(''), setUrl(''), setKeywords(''))
    // };

//     return(
//         <Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal}>
//         <div className="add-article">
//             <input type="text"
//                 id="art_name"
//                 name="art_name"
//                 placeholder="Article Title"
//                 onChange={({target}) => setTitle(target.value)}
//                 value={art_name} />
//             <input type="text"
//                 id="url"
//                 name="url"
//                 placeholder="URL"
//                 onChange={({target}) => setUrl(target.value)}
//                 value={url} />
//             <input type="text"
//                 id="author"
//                 name="author"
//                 placeholder="Author"
//                 onChange={({target}) => setAuthor(target.value)}
//                 value={author} />
//             <input type="text"
//                 id="keywords"
//                 name="keywords"
//                 placeholder="Keywords"
//                 onChange={({target}) => setKeywords(target.value)}
//                 value={keywords} />
//             <Button color="success" id="add_art_btn" onClick={()=>addArticle()}>Add Article</Button>
            

//         </div>
//         </Modal>
//     )
// };

// export default AddResource;