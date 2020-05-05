import React from 'react';
import Resource from './Resource';

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
                {displayResource}
            </>
        )
    };
};

export default Resources