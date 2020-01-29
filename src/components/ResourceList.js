import React from "react"
import useResources from "./useResources"

const ResourceList = ({resource}) => {
    const resources = useResources(resource);

    return (
        <div>
            <ul>
                {resources.map(record =>
                    (
                        <li id={record.id}>{record.title}</li>
                    ))}
            </ul>
            {resources.length}
        </div>
    )
}

export default ResourceList;