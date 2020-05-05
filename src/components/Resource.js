import React from 'react';

const Resource = (props) => {
    return(
        <div className="resource">
            <p className="resource-title">{props.title}</p>
            <p className="resource-author">{props.author}</p>
            <p className="resource-date-added">{props.data}</p>
        </div>
    )
};

export default Resource;