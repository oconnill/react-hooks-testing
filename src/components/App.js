import React, {useState} from "react"
import ResourceList from "./ResourceList"


const App = () => {
        const [resource, setResource] = useState('posts');

        return (
            <div>
                <div>
                    <button onClick={() => setResource('posts')}>
                        Posts
                    </button>
                    <button
                        onClick={() => setResource('todos')}>
                        Todos
                    </button>
                    <button
                        onClick={() => setResource('users')}>
                        Users
                    </button>
                </div>
                <div>
                    {resource}
                </div>
                <ResourceList
                    resource={resource}
                />
            </div>
        );
    }
;

export default App;