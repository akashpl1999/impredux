import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Cred = () => {


    const [open, setOpen] = useState(false);

    const [open1, setOpen1] = useState(false);

    const [data, setData] = useState([])

    const [show, setshow] = useState(null)

    const [subshow, setsubshow] = useState(null)


    const [dept, setdept] = useState("")


    const [uname, setuname] = useState("")

    const [position, setposition] = useState("")


    const handlemaindelete = (id) => {
        setData(data.filter((elm) => {
            return elm.id !== id
        }))

    }

    const handlemainedit = (id) => {
        setshow(id)
        setOpen(true)

    }


    const handlesubeditdata = (id) => {
        setsubshow(id)
        setOpen1(true)

    }

    const editmain = (dept, id) => {
        console.log("dvvbgdv")
        setData(data.map((sub) => {
            if (dept && id === sub.id) {
                return { ...sub, name: dept }
            }
            setshow(null)
            return sub
        }))
    }


    const handlesubedit = (id, subid, namedata, position) => {
        console.log("done")

        setData(
            data.map(elm => {
                if (id === elm.id) {
                    return {
                        ...elm,
                        employees: elm.employees.map((subelm) => {
                            if (subelm.id === subid) {
                                return { ...subelm, name: namedata, position: position }

                            }
                            setsubshow(null)
                            return subelm
                        }
                        )
                    }
                }
                return elm;
            })
        );


    }


    const handleClose = () => {
        setOpen(false);
    };


    const handleClose1 = () => {
        setOpen1(false);
    };


    const handleSubDelete = (id, subid) => {
        console.log("done")
        setData(
            data.map(elm => {
                if (id === elm.id) {
                    return {
                        ...elm,
                        employees: elm.employees.filter(subelm => subelm.id !== subid)
                    };
                }
                return elm;
            })
        );
    };



    useEffect(() => {

        axios.get('http://localhost:8000/data')
            .then(res => {
                setData(res.data)
            })
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '100px' }}>

            {
                data?.map((sub) => {



                    return (
                        <>

                            <h2>Department :{sub?.name}</h2>

                            <h3>employees:</h3>


                            {
                                sub?.employees?.map((elm) => {
                                    return (

                                        <>
                                            <ul >

                                                <li>NAME:{elm.name}</li>

                                                Position:  {elm.position}

                                                {
                                                    subshow === elm.id && (


                                                        <>

                                                            <Dialog open={open1} onClose={handleClose1}>

                                                                <DialogTitle>Edit</DialogTitle>


                                                                <DialogContent>

                                                                    <DialogContentText>


                                                                        <TextField
                                                                            autoFocus
                                                                            margin="dense"
                                                                            id="name"
                                                                            label="name"
                                                                            type="text"
                                                                            onChange={(e) => setuname(e.target.value)} 
                                                                            fullWidth
                                                                        />


                                                                        <TextField
                                                                            autoFocus
                                                                            margin="dense"
                                                                            id="name"
                                                                            label="Position"
                                                                            type="text"
                                                                            onChange={(e) => setposition(e.target.value)}
                                                                            fullWidth
                                                                        />





                                                                    </DialogContentText>


                                                                </DialogContent>

                                                                <DialogActions>

                                                                    <Button onClick={() => handlesubedit(sub.id, elm.id, uname, position)}>Edit</Button>


                                                                    <Button onClick={handleClose1}>close</Button>

                                                                </DialogActions>

                                                            </Dialog>




                                                        
                                                        </>
                                                    )
                                                }
                                                <div>
                                                    <Button onClick={() => handlesubeditdata(elm.id)} style={{padding:'6px', color:'black', backgroundColor:'lightblue'}}>Edit</Button>
                                                    <Button onClick={() => handleSubDelete(sub.id, elm.id)} style={{padding:'6px', color:'black', backgroundColor:'lightpink'}}>Delete</Button>

                                                </div>


                                            </ul>

                                        </>


                                    )
                                })
                            }

                            {
                                show == sub.id && (


                                    <>

                                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={{ width: '1000px' }}>
                                            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    -----------   Edit the Department Title  -------------
                                                </DialogContentText>

                                                
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="Department Title"
                                                    type="text"
                                                    onChange={(e) => setdept(e.target.value)}
                                                    fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>


                                                <Button onClick={() => editmain(dept, sub.id)} variant="outlined" color="primary">
                                                    Edit
                                                </Button>

                                                <Button onClick={handleClose} color="primary" variant="outlined">
                                                    Cancel
                                                </Button>


                                              
                                            </DialogActions>
                                        </Dialog>


                                    </>
                                )
                            }
                            <div style={{ margin: '20px', padding: '20px' }}>
                                <Button onClick={() => handlemainedit(sub.id)} style={{ margin: '5px', padding: '10px', backgroundColor: "blue", color: 'white', borderRadius: '10px' }}>Edit main</Button>
                                <Button onClick={() => handlemaindelete(sub.id)} style={{ margin: '5px', padding: '10px', backgroundColor: "red", color: 'white', borderRadius: '10px' }}>Delete main</Button>

                            </div>

                        </>
                    )
                })
            }






        </div>
    )
}

export default Cred