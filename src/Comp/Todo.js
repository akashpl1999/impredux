import React, { useState } from 'react'
import { adddata, removedata, updatedata } from '../Redux/Action'
import { useSelector, useDispatch } from 'react-redux'
import TodoList from './TodoList'


const Todo = () => {

   const [data,setdata]=useState("")

   const dispatch=useDispatch()

   





   const handlesubmit=(e)=>{
    e.preventDefault()

      console.log(data)

    dispatch(adddata(data))

   }


   
  return (

    <div>



       <input type="text" placeholder='enter text' value={data}  onChange={(e)=>setdata(e.target.value)}/>

       <button onClick={handlesubmit}>Submit</button>

      {
        <TodoList/>
      }




    </div>
  )
}

export default Todo