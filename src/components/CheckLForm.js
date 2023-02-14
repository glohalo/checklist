import React, {useState, useEffect, useRef} from 'react'
import { Button, Input} from '@mui/material';

function CheckLForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef?.current) {
            inputRef.current.focus()
        }
    }, [inputRef]);
    const handleChange = e=>{
        setInput(e.target.value)
    };

    const handleSubmit = e=>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        });
        setInput('');
    };

  return (
    <form className='check-form' onSubmit={handleSubmit}>
        {props.edit ?(
        <>           
            <Input
            sx={{width:'75%'}}
            type='text'
            value={input}
            onChange={handleChange}
            ref={inputRef}/>
        </>
        ):(
        <>
            <Input
                sx={{ ml: 3, mr: 2, flex: 3, width:'75%'}}
                placeholder='Add a todo'
                value={input}
                name='text'
                className='check-list-input'
                onChange={handleChange}
                ref={inputRef}/>
            <Button color='primary' disableRipple={true} variant='contained' size='small' onClick={handleSubmit} >Add a todo</Button>
        </>
        )}
    </form>
  )
}

export default CheckLForm
