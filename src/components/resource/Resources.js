import React from 'react';
import Resource from './Resource';
import { Table } from 'reactstrap';
import AddResource from './AddResource';
import { ResourceContext } from '../../context/resources';
import '../../comp-styling/resource-table.css';

class Resources extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resources: [],
            deleteResource: this.deleteResource
        }
    }
    getResources = () => {
        fetch(`http://localhost:5001/api/resources`)
        .then(response => response.json())
        .then(data => this.setState({resources: data}))
    };
    deleteResource = (id) => {
        if(window.confirm("Are you sure you want to remove this resource?")){
            fetch(`http://localhost:5001/api/resources/${id}`,{
                method: "DELETE",
            }).then(response => response.json())
            .then(this.getResources);
        }
    };
    closeModal = () => {
        this.setState({modalIsOpen: false})
    };
    componentDidMount(){
        this.getResources();
    }

    render(){
        console.log("RESOURCES",this.state.resources);

        return(
            <div id="resource_display">
                <ResourceContext.Provider value={this.state}>
                    <h1>Resources</h1>

                    <AddResource getResources={this.getResources} />

                    <Table hover id="resource_table">
                        <thead>
                            <tr>
                                <th>Article</th>
                                <th>Author</th>
                                <th>Date Added</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Resource getResources={this.getResources}/>
                        </tbody>
                    </Table>
                </ResourceContext.Provider>
            </div>
        )
    };
};

export default Resources