import React, {useState} from 'react';
import CheckLForm from './CheckLForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function CheckL({todos, completeTodo, removeTodo, updateTodo, showButton}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',
        });
    };

    if (edit.id){
        return <CheckLForm edit={edit} 
        onSubmit={submitUpdate}/>;
    };
    return todos.map((todo, index)=> (
        <div className= {todo.isComplete ? 'todo-row complete':'todo-row'} key={index}>
            
                <div>
                    {todo.text}
                    
                    <IconButton aria-label='delete' size='small'>
                        <DeleteIcon color='danger' fontSize='small' onClick={() => removeTodo(todo.id)} sx={{ml:2,flex: 1}} />
                    </IconButton>
                    <IconButton aria-label='edit' size='small'>
                        <EditIcon color='success'fontSize='small' onClick={() => setEdit({id: todo.id, value: todo.text})}  sx={{ml: 1,flex: 1}}/>
                    </IconButton>
                    {!showButton &&
                    <IconButton aria-label='done' size='small'>
                        <TaskAltIcon color='primary' fontSize='small' onClick={() => completeTodo(todo.id)}  sx={{ml: 2, flex: 1}}/>                        
                    </IconButton>
                    }
                   
                     
                </div>
        </div>
    ));
};

export default CheckL