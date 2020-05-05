import React from 'react';

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
        console.log("RESOURCES",this.state.resources)
        return(
            <>
            </>
        )
    };
};

export default Resources