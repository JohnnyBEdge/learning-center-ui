import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../comp-styling/add-resource-modal.css';

const EditResource = ({resource, getResources}) => {

const [modal, setModal] = useState(false);
const [art_name, setTitle] = useState(resource.art_name);
const [author, setAuthor] = useState(resource.author);
const [url, setUrl] = useState(resource.url);
const [keywords, setKeywords] = useState(resource.keywords);

  const editResource = () => {
      console.log("edited")
    fetch(`http://localhost:5001/api/resources/${resource._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({art_name, author, url, keywords})
    }).then(getResources)
    .then(toggle());
};

  const toggle = () => setModal(!modal);
  return (
    <td>
        <Button color="warning" onClick={toggle}>Edit</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Resource</ModalHeader>
            <ModalBody>
                <div className="add-article">
                    <input type="text"
                        id="art_name"
                        name="art_name"
                        onChange={({target}) => setTitle(target.value)}
                        value={art_name} />
                    <input type="text"
                        id="url"
                        name="url"
                        onChange={({target}) => setUrl(target.value)}
                        value={url} />
                    <input type="text"
                        id="author"
                        name="author"
                        onChange={({target}) => setAuthor(target.value)}
                        value={author} />
                    <input type="text"
                        id="keywords"
                        name="keywords"
                        onChange={({target}) => setKeywords(target.value)}
                        value={keywords} />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="success" id="edit_art_btn" onClick={()=>editResource()}>Submit Changes</Button>
            </ModalFooter>
      </Modal>
    </td>
  );
}

export default EditResource;