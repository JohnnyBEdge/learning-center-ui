import React, {useContext} from 'react';
import {Button} from 'reactstrap';
import {ResourceContext} from '../../context/resources'
import EditResource from './EditResource';

const Resource = (props) => {
    const {
        resources,
        deleteResource
        } = useContext(ResourceContext);

    const displayResource = resources.map((resource) => {
        console.log("context", resources)

        return  <tr className="resource" key={resource._id}>
                    <td className="resource-title">{resource.art_name}</td>
                    <td className="resource-author">{resource.author}</td>
                    <td className="resource-date-added">{resource.date_added}</td>
                    <EditResource key={resource._id} resource={resource} getResources={props.getResources}/>
                    <td><Button color="danger" onClick={()=>deleteResource(resource._id)}>Delete</Button></td>
                </tr>
    })

    return(
        <>
            {displayResource}
        </>
    )
};

export default Resource;