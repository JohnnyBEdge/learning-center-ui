import React, {useContext} from 'react';
import {Button} from 'reactstrap';
import {ResourceContext} from '../../context/resources'

const Resource = () => {
    const {
        resources,
        deleteResource
        } = useContext(ResourceContext);

    const displayResource = resources.map((resource) => {
        console.log("context", resources)

        return  <tr className="resource" key={resource._id}>
                    <th className="resource-title">{resource.art_name}</th>
                    <th className="resource-author">{resource.author}</th>
                    <th className="resource-date-added">{resource.date_added}</th>
                    <th><Button color="warning">Edit</Button></th>
                    <th><Button color="danger" onClick={()=>deleteResource(resource._id)}>Delete</Button></th>
                </tr>
    })

    return(
        <>
            {displayResource}
        </>
    )
};

export default Resource;