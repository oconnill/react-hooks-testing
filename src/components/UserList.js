import React from "react"
import useResources from "./useResources"


const UserList = ({resource}) => {
    const resources = useResources(resource);

    return (
        <div>
            <ul>
                {resources.map(record =>
                    (
                        <li id={record.id}>{record.name}</li>
                    ))}
            </ul>
            {resources.length}
        </div>
    )
};

export default UserList;

