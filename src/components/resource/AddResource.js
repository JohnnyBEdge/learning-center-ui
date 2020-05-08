import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import '../../comp-styling/add-resource-modal.css';

const AddResource = (props) => {

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  const [resource_type, setType] = useState('');

  function addArticle(){
    fetch(`http://localhost:5001/api/resources`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, author, url, resource_type, keywords})
    }).then(props.getResources)
    .then(setTitle(''), setAuthor(''), setUrl(''), setKeywords(''), setType(''), toggle())
};

  const toggle = () => setModal(!modal);

  return (
    <div>
      
        <Button color="success" onClick={toggle}>Add Article</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Resource</ModalHeader>
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
            <FormGroup>
              <Input type="select"
                    id="resource_type"
                    name="resource_type"
                    placeholder="Resource Type"
                    onChange={({target}) => setType(target.value)}
                    value={resource_type} >
                    <option>Article</option>
                    <option>Podcast</option>
                    <option>Video</option>
              </Input>
              <FormFeedback>You will not be able to see this</FormFeedback>
            </FormGroup>
            

          </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" id="add_art_btn" onClick={()=>addArticle()}>Add Article</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddResource;