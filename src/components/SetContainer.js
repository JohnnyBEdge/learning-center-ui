import React from 'react';
import '../comp-styling/set-container.css'

class SetContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="set_container">
                <div id="tab_nav">
                    <ul>
                        <li>All</li>
                        <li>Review</li>
                        <li>+New Set</li>
                    </ul>
                </div>
                <div id="tab_content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eaque aspernatur fuga modi itaque facilis dolorum velit molestias. Similique quis laborum aliquam nulla neque in! Voluptatem repellat omnis ullam delectus quia cum optio eaque non aliquam dolorum id, exercitationem quisquam distinctio, reprehenderit, enim eligendi odit esse architecto provident? Suscipit, et!</p>
                </div>
            </div>
        );
    };

};

export default SetContainer;