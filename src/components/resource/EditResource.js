import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import '../../comp-styling/edit-resource-form.css';

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
                <Form>
                    <FormGroup>
                        <Input type="text"
                            id="title"
                            name="title"
                            placeholder="Article Title"
                            onChange={({target}) => setTitle(target.value)}
                            value={title} />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text"
                            id="author"
                            name="author"
                            placeholder="Author"
                            onChange={({target}) => setAuthor(target.value)}
                            value={author} />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input type="url"
                            id="url"
                            name="url"
                            placeholder="URL"
                            onChange={({target}) => setUrl(target.value)}
                            value={url} />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    {/* <Label for="keywords">Keywords</Label> */}
                        <Input type="text"
                            id="keywords"
                            name="keywords"
                            placeholder="Keywords"
                            onChange={({target}) => setKeywords(target.value)}
                            value={keywords} />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                    {/* <FormText>Example help text that remains unchanged.</FormText> */}
                    </FormGroup>
                    <FormGroup id="sel_type">
                        <Input type="select"
                                id="resource_type"
                                name="resource_type"
                                placeholder="Resource Type"
                                onChange={({target}) => setType(target.value)}
                                value={resource_type} >
                                <option>Article</option>
                                <option>Website</option>
                                <option>Podcast</option>
                                <option>Video</option>
                        </Input>
                    <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="success" id="edit_art_btn" onClick={()=>editResource()}>Submit Changes</Button>
            </ModalFooter>
      </Modal>
    </td>
  );
}

export default EditResource;