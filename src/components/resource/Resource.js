import React from 'react';

const Resource = (props) => {
    return(
        <tr className="resource">
            <th className="resource-title">{props.title}</th>
            <th className="resource-author">{props.author}</th>
            <th className="resource-date-added">{props.date}</th>
        </tr>
    )
};

export default Resource;