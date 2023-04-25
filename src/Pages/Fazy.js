import React, { useEffect, useState } from 'react'
import Fuse from  'fuse.js'
import axios from 'axios';



const Fazy = () => {



    const [data, setData] = useState([
        { name: "John Doe", position: "Manager" },
        { name: "Jane Doe", position: "Developer" },
        { name: "Jim Smith", position: "Designer" },
        {name:"akash", position:"Developer"},

      ]);
    
     const [data1,setdata1]=useState("")
     const [searchterm, setsearchterm]=useState("")





     const [searchresults,setsearchresults]=useState([])



    const options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["name", ],
       };
      

      const fuse = new Fuse( data1 , options);

      const handlechange=(e)=>{
        setsearchterm(e.target.value)
        setsearchresults(fuse.search(searchterm))

      }

      console.log(searchresults)



     useEffect(()=>{

        axios.get("http://localhost:4000/data")      //http://localhost:4000/data  https://jsonplaceholder.typicode.com/users
         .then((res)=>{
                  
            setdata1(res.data)
         })

     },[])
         
  return (



    <div style={{margin:'20px'}}>


        <input type="text" placeholder='...somthing needed' value={searchterm} onChange={handlechange}  style={{padding:'10px', width:'300px'}}   />
     

      
          {
            searchresults.map((entry,index)=>{
                return(

                    <div key ={index}>

                       <p>{entry.item.name} </p>


                    </div>
                )
            })
          }


    </div>


  )
}

export default Fazy