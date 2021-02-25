import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Change from './todos'

function Users() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setPosts(data)
            console.log(data);
        }
        getData();
    }, [setPosts]);

    function nameList(array) {
        const mapped = array.map((post, index) => {
            return <li key={index} onClick={() => <Change id={post.id} />}> {post.name} </li>
        });
        return mapped;
    }
    const map = nameList(posts);

    return (
        <div className="App">
            <ul>
                {map}
            </ul>
            <Change  />
        </div>
    );
}

export default Users;