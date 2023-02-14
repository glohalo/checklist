import { Paper } from '@mui/material';
import React, {useState} from 'react'
import CheckL from './CheckL';
import CheckLForm from './CheckLForm';
import NotesIcon from '@mui/icons-material/Notes';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Container } from '@mui/system';

function CheckList() {

    const [todos, setTodos] = useState([]);


    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        };
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id===todoId ? newValue : item ))
        );
    };

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    };
         
    const completeTodo = id=>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;

            }
            return todo;
        });
        setTodos(updatedTodos);
        
    };
    return (
        <div>
            <Container sx={{marginTop: 5}}>
                <Paper style={{padding: 2}}>
                    <div style={{width: 50, height: 50, padding: 6, marginTop: -25, background:'#00bbf0'}}>             
                        <BeenhereIcon  fontSize='large' sx={{padding: 1, color:'black'}}/>
                    </div>
                        <div style={{marginLeft: 70, marginBottom: -10, marginTop: -50}}>
                            <h2 style={{color:'#6f6f6f'}}>What's the Plan for Today?</h2>    
                        </div>
                    <CheckLForm onSubmit={addTodo} />
                </Paper>
            </Container >
            <Container sx={{marginTop: 10}}>
            <Paper style={{padding: 2}}>
                <div style={{width: 50, height: 50, background:'#fdb44b', padding: 6, marginTop: -25}}>
                    <NotesIcon fontSize='large' sx={{padding: 1, color:'black'}}/>
                </div>
                    <div style={{marginLeft: 70, marginBottom: -10, marginTop: -50}}>
                        <h2 style={{color:'#6f6f6f'}}>To-Do List</h2>    
                    </div>
                <CheckL 
                    todos={todos.filter((todo) => !todo.isComplete)} 
                    completeTodo={completeTodo}
                    removeTodo={removeTodo} 
                    updateTodo={updateTodo}
                  />
            </Paper>
            </Container>
            <Container sx={{marginTop: 10}}>
                <Paper style={{padding:2}}>
                    <div style={{width: 50, height: 50, background:'linear-gradient(to top, #0fd850 0%, #f9f047 100%)', padding: 6, marginTop: -25}}>
                        <FormatListBulletedIcon fontSize='large' sx={{padding: 1}}/>
                    </div>
                        <div style={{marginLeft: 70, marginBottom: -10, marginTop: -50}}>
                            <h2 style={{color:'#6f6f6f'}}>Completed</h2>    
                        </div>
                    <CheckL 
                        todos={todos.filter((todo) => todo.isComplete)}
                        showButton
                        completeTodo={completeTodo}
                        removeTodo={removeTodo} 
                        updateTodo={updateTodo}
                       />
                </Paper>
            </Container>
        
        </div>
    )
}

export default CheckList