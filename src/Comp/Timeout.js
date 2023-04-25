import React, { useState } from 'react'

const Timeout = () => {

    const [text,settext]=useState("")



    const [color,setcolor]=useState("")


     const handleclick=()=>{


         if(text){
            setTimeout(()=>{

                setcolor("green")

            },1000)

         }else{

            setTimeout(()=>{

                setcolor("red")

            },1000)

         }
         
          


     }







  return (






    

    
    <div style={{backgroundColor:`${color}`, width:'100vw', height:'100vh'}} >


       
       
         <input type="text" placeholder='enter the text' style={{padding:'15px', margin:'25px', width:"250px",}}  onChange={(e)=>settext(e.target.value)} />

          <button onClick={handleclick} style={{padding:'13px', backgroundColor:'red', color:"white"}}>ADD</button>



    </div>




  )
}

export default Timeout




  