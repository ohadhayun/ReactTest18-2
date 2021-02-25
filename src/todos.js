import { React, useEffect, useState } from 'react';
import axios from 'axios';

function Change(props){

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const getTasks = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTasks(data)
        }
        getTasks();
    }, [setTasks])

    function nameList(array) {
        const mapped = array.map((tasks, index, ) => {
            if(tasks.userId == props.id){
                return <li key={index}> {tasks.title}, {tasks.userId} </li>
            }
        });
        return mapped;
    }
    const map = nameList(tasks);

    return(
        <div>
            <ul>
                {map}
            </ul>
        </div>
    )
}

export default Change;