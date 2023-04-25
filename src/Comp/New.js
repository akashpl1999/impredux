import React, { useState } from 'react'

const New = () => {



    const [name, setname] = useState("")
    const [editid, seteditid] = useState()
    const [toggle, settoggle] = useState(false)
    const [data, setdata] = useState([

    ])


    const handlesubmit = () => {

        if (!name) {
            alert("err")
        } else if (name && toggle) {
            console.log(editid)

            setdata(data.map((todo) => {
                if (todo.id === editid) {
                    return { ...todo, name: name }
                }

                return todo

            }))
            settoggle(false)



        } else {
            setdata([...data, { id: new Date().getTime().toString(), name: name }])

            setname("")
        }

    }

    const handledelete = (id) => {
        setdata(data.filter((elm) => elm.id !== id))
    }


    const edithandle = (id) => {

        settoggle(true)
          
         data.map((elm)=>{
            if(elm.id===id){
                seteditid(id)
               
                return id;
            }
          })
      

    }


    return (



        <div>

            <input type="text" placeholder='enter data' onChange={(e) => setname(e.target.value)} defaultValue={name} />

            
            {
                toggle ? <button onClick={handlesubmit}>edit</button> : <button onClick={handlesubmit}>submit</button>


            }

            {
                data.map((todo) => (

                    <div key={todo.id}>

                        <p>{todo.name}</p>

                        <button onClick={() => handledelete(todo.id)}>delete</button>

                        <button onClick={() => edithandle(todo.id)}>update</button>


                    </div>
                ))

            }






        </div>




    )
}

export default New