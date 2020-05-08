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
        console.log(resource)

        return  <tr className="resource" key={resource._id}>
                    <td className="resource-title"><a href={resource.url}>{resource.title}</a></td>
                    <td className="resource-author">{resource.author}</td>
                    <td className="resource-type">{resource.resource_type}</td>
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