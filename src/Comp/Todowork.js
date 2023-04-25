











import React, { useState } from 'react';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Take out the trash', editable: false },
    { id: 2, task: 'Do the dishes', editable: false },
    { id: 3, task: 'Mow the lawn', editable: false }
  ]);

  const [name,setname]=useState("")

  const [update, setupdate]=useState("")
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };




  const handlesubmit = (e) => {
    e.preventDefault()
  
    setTasks([...tasks, { id: Math.floor(Math.random() * 1000), task: name, editable: false }])



  }

  const handleEdit = (id) => {
    setTasks(
      
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, editable: true };
        }
        return { ...task, editable: false };
      })
    );
  };

  const handleUpdate = (id, task) => {
    setTasks(
      tasks.map(t => {
        if (t.id === id) {
          return { ...t, task, editable: false };
        }
        return t;
      })
    );
  };

  return (
    <div>

      <input type="text" placeholder='enter data' onChange={(e) => setname(e.target.value)} />
      <button onClick={handlesubmit}>Submit</button>


      {tasks.map((task) => (
        <div key={task.id}>
          {task.editable ? (
            <form>
              <input
                type="text"
                
                onChange={(e) => setupdate( e.target.value)}
              />
              <button onClick={()=>handleUpdate(task.id, update)}>Update</button>
            </form>
          ) : (
            <p>{task.task}</p>
          )}
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoApp;









// import React, { useState } from 'react'



// const Todowork = () => {

//   const [name, setname] = useState("")
//   const [uname, setuname] = useState("")
//   const [data, setdata] = useState([
//     { id: 1, name: 'Take out the trash', editable: false },
    
//   ])


//   const handlesubmit = () => {
  
//     console.log(data);

//     setdata([...data, { id: Math.floor(Math.random() * 1000), name: name, edit: false }])



//   }


//   console.log(data)


//   const Edithandle = (id) => {

//     setdata(data.map((elm) => {

//       if (elm.id === id) {
//         return { ...elm, edit: true }

//       } else {

//         return { ...elm, edit: false }

//       }
//     }))

//   }


//   const handledelete = (id) => {
//     console.log(data)

//     setdata(data.filter((elm) => {
//       return id !== elm.id
//     }))


//   }

//   const handleupdate = (id, data) => {



//     setdata(
//       data.map((elm) => {
//       if (elm.id === id) {
//         return { ...elm, name: data , edit:false}
//       }
//       return elm;
//     }))

//   }


//   return (



//     <div>


//       <input type="text" placeholder='enter data' onChange={(e) => setname(e.target.value)} />
//       <button onClick={handlesubmit}>Submit</button>

//       {
//         data.map((todo) => (
//           <div key={todo.id}>
//             {todo.edit ? (
//               <form>
//                 <input type="text" placeholder='enter update data' onChange={(e) => setuname(e.target.value)} />
//                 <button onClick={()=> handleupdate(todo.id, uname)}>update</button>
//               </form>

//             ) : (

//               <p>{todo.name}</p>

//             )

//             }

//               <button onClick={()=>handledelete(todo.id)}>delete</button>
//               <button onClick={()=>Edithandle(todo.id)}>update</button>
                 

//           </div>

//         ))
//       }














      
         






//     </div >




//   )
// }

// export default Todowork




// // import React, { useState } from 'react';

// // const ToDoApp = () => {
// //   const [tasks, setTasks] = useState([
// //     { id: 1, task: 'Take out the trash', editable: false },
// //     { id: 2, task: 'Do the dishes', editable: false },
// //     { id: 3, task: 'Mow the lawn', editable: false }
// //   ]);

// //   const handleDelete = (id) => {
// //         setTasks(tasks.filter(task => task.id !== id));
// //   };

// //   const handleEdit = (id) => {
// //     setTasks(
// //       tasks.map(task => {
// //         if (task.id === id) {
// //           return { ...task, editable: true };
// //         }
// //         return { ...task, editable: false };
// //       })
// //     );
// //   };

// //   const handleUpdate = (id, task) => {
// //     setTasks(
// //       tasks.map(t => {
// //         if (t.id === id) {
// //           return { ...t, task, editable: false };
// //         }
// //         return t;
// //       })
// //     );
// //   };

// //   return (
// //     <div>
// //       {tasks.map((task) => (
// //         <div key={task.id}>
// //           {task.editable ? (
// //             <form>
// //               <input
// //                 type="text"
// //                 value={task.task}
// //                 onChange={(e) => handleUpdate(task.id, e.target.value)}
// //               />
// //               <button type="submit">Update</button>
// //             </form>
// //           ) : (
// //             <p>{task.task}</p>
// //           )}
// //           <button onClick={() => handleEdit(task.id)}>Edit</button>
// //           <button onClick={() => handleDelete(task.id)}>Delete</button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ToDoApp;


// import React, { useState } from 'react';

// const ToDoApp = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, task: 'Take out the trash', editable: false },
//     { id: 2, task: 'Do the dishes', editable: false },
//     { id: 3, task: 'Mow the lawn', editable: false }
//   ]);

//   const [name,setname]=useState("")

//   const [update, setupdate]=useState("")
//   const handleDelete = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };




//   const handlesubmit = (e) => {
//     e.preventDefault()
  
//     setTasks([...tasks, { id: Math.floor(Math.random() * 1000), task: name, editable: false }])



//   }

//   const handleEdit = (id) => {
//     setTasks(
//       tasks.map(task => {
//         if (task.id === id) {
//           return { ...task, editable: true };
//         }
//         return { ...task, editable: false };
//       })
//     );
//   };

//   const handleUpdate = (id, task) => {
//     setTasks(
//       tasks.map(t => {
//         if (t.id === id) {
//           return { ...t, task, editable: false };
//         }
//         return t;
//       })
//     );
//   };

//   return (
//     <div>

//       <input type="text" placeholder='enter data' onChange={(e) => setname(e.target.value)} />
//       <button onClick={handlesubmit}>Submit</button>


//       {tasks.map((task) => (
//         <div key={task.id}>
//           {task.editable ? (
//             <form>
//               <input
//                 type="text"
                
//                 onChange={(e) => setupdate( e.target.value)}
//               />
//               <button onClick={()=>handleUpdate(task.id, update)}>Update</button>
//             </form>
//           ) : (
//             <p>{task.task}</p>
//           )}
//           <button onClick={() => handleEdit(task.id)}>Edit</button>
//           <button onClick={() => handleDelete(task.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ToDoApp;
