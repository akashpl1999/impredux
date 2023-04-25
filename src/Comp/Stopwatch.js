import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';




const Stopwatch = () => {


    const [count, setcount] = useState(0)
    const [open, setOpen] = useState(false);

    const [isRunning, setIsRunning] = useState(false);


    const [color, setcolor] = useState("")


    const handleClose = () => {

        setOpen(false);
    };



    useEffect(() => {


        setTimeout(() => {

            if (count == 10) {
                setOpen(true)
                handlereset()
            }

        }, 500)



    }, [count])




    useEffect(() => {

        let intervalid = null
        if (isRunning) {
            intervalid = setInterval(() => {

                setcount(count + 1)


            }, 1000);

        } else if (!isRunning && count !== 0) {

            clearInterval(intervalid)

        }
        return () => clearInterval(intervalid)


    }, [count, isRunning])


    const handlereset = () => {
        setcount(0)
        setIsRunning(false)
    }



    const handlestopstart = () => {
        setIsRunning(!isRunning)
    }


    return (

        <div style={{ position: "relative", backgroundColor: `${color}` }}>


            <img src="https://img.freepik.com/free-vector/digital-device-mockup_53876-90960.jpg?w=500" style={{ margin: '20px', padding: "10px", borderRadius: "20px  " }} />

            <h4 style={{ position: "absolute", top: '95px', left: '220px', color: "white", fontSize: "100px", fontWeight: "900" }}>{count}</h4>

            <button onClick={handlestopstart} style={{ position: "absolute", top: '400px', left: '260px', padding: "10px", backgroundColor: `${isRunning ? 'red' : 'green'}` }}></button>



            <button onClick={handlereset} style={{ position: "absolute", top: '140px', left: '260px', padding: "10px" }}></button>


            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="ADD NEW TIME BLOCK"
                action={

                    <React.Fragment >


                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                        </Button>


                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>



                    </React.Fragment>
                }
            />



        </div>
    )
}

export default Stopwatch