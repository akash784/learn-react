import { useEffect, useState, useReducer } from "react";
import './TaskManager.scss';

const FORMFIELDS = {
    ID: 'id',
    TASKNAME: 'task',
    AUTHOR: 'author',
    STATUS: 'completed'
}

export default function TaskManager() {
    const [taskList, setTaskList] = useState([]);

    const [task, setTask] = useState({
        id: 1,
        author: '',
        taskName: '',
        completed: false
    });

    function handleSubmit(e) {
        e.preventDefault();
        setTask({...task, id: task.id + 1})
        localStorage.setItem('taskList', JSON.stringify([...taskList, task]));
        setTaskList(prevTask => [...prevTask, task]);
    }
    
    function handleChange(e) {
        const fieldName = e.target.name;
        switch (fieldName) {
            case FORMFIELDS.TASKNAME:
                setTask({
                    ...task,
                    taskName: e.target.value
                });
                break;
            case FORMFIELDS.AUTHOR:
                setTask({
                    ...task,
                    author: e.target.value
                });
                break;
            default:
                setTask({...task});
        }
    }

    function handleStatus(e) {
        taskList.map(item => {
            if(item.id == e.target.id){ 
                item.completed = e.target.checked;
            }
            return item;
        })
        localStorage.setItem('taskList', JSON.stringify([...taskList]));
    }

    useEffect(()=> {
        const localTasks = JSON.parse(localStorage.getItem('taskList'));
        console.log(localTasks)
        if(!localTasks ) {
            setTaskList([]);
        } else {
            setTaskList([...localTasks]);
        }
    },[]);

    return (
        <>
            <h2>TASK MANAGER</h2>
            <section className="task-container">
                <div>
                    <form className="task-form" onSubmit={handleSubmit}>
                        <input type="text" name={FORMFIELDS.AUTHOR} placeholder="Who is creating task" onChange={handleChange}/>
                        <input type="text" name={FORMFIELDS.TASKNAME} placeholder="Please enter task name" onChange={handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
                <div className="task-table">
                    <div className="table-head">
                        {Object.keys(task).map((h, i) => {
                            return <div key={i}>{h.toUpperCase()}</div>
                        })}
                    </div>
                    <div className="table-content">
                        {taskList.map((item, i) => {
                            return <div key={i} className="content-row">{
                                Object.keys(task).map((h, j) => {
                                    if(h == FORMFIELDS.STATUS) {
                                        return <div role={h} key={j}>
                                            <input id={item.id} type="checkbox" value={item[h]} onChange={handleStatus}/>
                                        </div>
                                    } else {
                                        return <div role={h} key={j}>{item[h]}</div>
                                    }
                                })
                            }</div>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}