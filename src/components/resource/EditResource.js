import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../comp-styling/add-resource-modal.css';

const EditResource = ({resource, getResources}) => {

const [modal, setModal] = useState(false);
const [title, setTitle] = useState(resource.title);
const [author, setAuthor] = useState(resource.author);
const [resource_type, setType] = useState(resource.resource_type);
const [url, setUrl] = useState(resource.url);
const [keywords, setKeywords] = useState(resource.keywords);

  const editResource = () => {
    fetch(`http://localhost:5001/api/resources/${resource._id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, author,resource_type, url, keywords})
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
                        id="title"
                        name="title"
                        onChange={({target}) => setTitle(target.value)}
                        value={title} />
                    <input type="text"
                        id="url"
                        name="url"
                        onChange={({target}) => setUrl(target.value)}
                        value={url} />
                    <input type="text"
                        id="resource_type"
                        name="resource_type"
                        onChange={({target}) => setType(target.value)}
                        value={resource_type} />
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