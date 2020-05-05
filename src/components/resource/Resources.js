import React from 'react';
import Resource from './Resource';
import { Table, Button } from 'reactstrap';
import AddResource from './AddResource';

class Resources extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resources: []
        }
    }
    getResources = () => {
        fetch(`http://localhost:5001/api/resources`)
        .then(response => response.json())
        .then(data => this.setState({resources: data}))
    }
    componentDidMount(){
        this.getResources();
    }

    render(){
        console.log("RESOURCES",this.state.resources);
        const displayResource = this.state.resources.map((resource) => {
            return <Resource key={resource._id} title={resource.title} author={resource.author} date={resource.date_added} />
        })

        return(
            <>
                <Button color="info">+Add Article</Button>
                <AddResource getResources={this.getResources} />
                <Table hover>
                    <thead>
                        <tr>
                            <th>Article</th>
                            <th>Author</th>
                            <th>Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayResource}
                    </tbody>
                </Table>
            </>
        )
    };
};

export default Resources