import React from 'react'
import { useState } from 'react';
import { Box, Paper, TextField, Typography, Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Utils/todoSlice';


export default function AddTodos() {

    const dispatch= useDispatch()

    const todoItems= useSelector(store=>store.todo?.items);
    // console.log(todoItems);

    const [newTodo, setNewTodo] = useState({
        title: '',
        status: 'To-do'
      });
      
      const handleChange = (event) => {
        const updatestatus = event?.target?.value;
        setNewTodo({...newTodo, status: updatestatus});
      };

      

      const handleSubmit=()=>{
        alert(`added ${newTodo.title}`)
        dispatch(addTodo(newTodo))
      }

  return (
    <div className='addTodo'>
        <Box width={300} marginX={'auto'} textAlign={'center'}>
            <Typography variant='h6'>Add Todo</Typography>
            <Paper elevation={3} sx={{padding:4, justifyContent: 'center', display:'flex',gap:2, flexDirection:'column'}}>
                <TextField value={newTodo.title} onChange={(e)=>setNewTodo({...newTodo, title:e.target.value})} id="outlined-basic" label="Add Todo" variant="outlined" />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={newTodo.status}
                    onChange={handleChange}
                    label="Status"
                    >
                    <MenuItem value={'To-do'}>To-do</MenuItem>
                    <MenuItem value={'In-progress'}>In-progress</MenuItem>
                    <MenuItem value={'Completed'}>Completed</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </Paper>
        </Box>
      
    </div>
  )
}
