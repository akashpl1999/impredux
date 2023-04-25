import React, { useEffect, useState } from 'react'
import { CssBaseline, makeStyles, Paper, Typography, Box, Grid, TextField, Button } from '@material-ui/core'
import '../css/Form.css'
import axios  from 'axios'

const usestyles = makeStyles((theme) => ({

    root:{
        margin: theme.spacing(4),
        padding: theme.spacing(1),
        marginLeft: "70px",
        padding: "3px",
      },


    div1: {
        backgroundColor: "#002D62",
    },


    textField: {

        width: 2000,
    },

    form: {
        display: "flex",
        flexDirection: "column"
    }


}))



const Form = () => {



     const [name, setname]=useState("")

     const [email, setemail]=useState("")
   
     const [phone, setphone]=useState("")


     const [mesg, setmesg]=useState("")


     const [nameerr,setnameerr]=useState()
     const [emailerr,setemailerr]=useState()
     const [phoneerr,setphoneerr]=useState()
      




     const nameregex =  /^(?=.{10,15}$)[a-zA-Z\s]+$/
     const emailregex=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const phoneregex= /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;









     const handlesubmit=()=>{

      
          

          if(!nameregex.test(name) ){

              setnameerr("nameerr")
              alert(nameerr)

        
            } 
            
             else if(!emailregex.test(email)){

                setemailerr("email err")
                alert(emailerr)
            }

            else if(!phoneregex.test(phone)){
               
               
                setphoneerr("phone err")

                alert(phoneerr)


            }else{


                const data ={  name, email, phone}


                 axios.post('http://localhost:4000/data', data)


                  .then(res=>{


                    console.log(res.data)


                  })

                alert("done")
                


            }

        }



      useEffect(()=>{

        axios.get('http://localhost:4000/data')
        .then(res=>{
            console.log(res.data)
        })

      },[])  

    const classes = usestyles()





    return (



        <>

            <div className="grid" style={{margin:'10px', padding:"40px"}}>
               
               
                <Grid  container spacing={2} >

                    <Grid item container xs={4} className={classes.div1}>

                        <Typography variant='h4' style={{ fontFamily: 'Aboreto', color: "white", margin: "20px" }}>

                            Get in Touch

                        </Typography>

                        <Typography variant='subtitle1' style={{ fontFamily: "cursive", color: "white", textAlign: "left", padding: '10px', margin: "30px" }}>

                            Duis aute irure dolor in reprehenderit in voluptate<br></br> velit esse cillum dolore eu fugiat nulla<br></br> pariatur.

                        </Typography>


                        <Grid container direction='column' >

                            <Grid item xs={12} style={{ marginLeft: '30px' }} >
                                <Box style={{ display: 'flex', flexDirection: "row" }}>
                                  
                                    <img src="https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png" style={{ width: "80px", height: "50px" }} />
                                  
                                    <Typography variant='h6' style={{ color: "white", margin: '10px' }}>CHART TO US</Typography>
                               
                               
                               
                                </Box>

                                <Box>

                                    <p style={{ color: "white", textAlign: "left", marginLeft: "30px" }}>  Our friendly team is here to help.  </p>

                                    <p style={{ color: "white", marginLeft: "30px" }}>hi@mycomponey.com</p>

                                </Box>


                            </Grid>
                        </Grid>


                        <Grid container direction='column' >

                            <Grid item xs={12} style={{ marginLeft: '30px' }}>

                                <Box style={{ display: 'flex', flexDirection: "row" }}>

                                    <img src="https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png" style={{ width: "80px", height: "50px" }} />

                                    <Typography variant='h6' style={{ color: "white", margin: '10px' }}>CHART TO US</Typography>

                                </Box>

                                <Box>


                                    <p style={{ color: "white", textAlign: "left", marginLeft: "30px" }}>

                                        Our friendly team is here to help.

                                    </p>

                                    <p style={{ color: "white", marginLeft: "30px" }}>hi@mycomponey.com</p>

                                </Box>

                            </Grid>
                        </Grid>

                        <Grid container direction='column' >


                            <Grid item xs={12} style={{ marginLeft: '30px' }}>

                                <Box style={{ display: 'flex', flexDirection: "row" }}>

                                    <img src="https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png" style={{ width: "80px", height: "50px" }} />

                                    <Typography variant='h6' style={{ color: "white", margin: '10px' }}>CHART TO US</Typography>


                                </Box>

                                <Box>

                                    <p style={{ color: "white", textAlign: "left", marginLeft: "30px" }}>   Our friendly team is here to help.  </p>
                                    <p style={{ color: "white", marginLeft: "30px" }}>hi@mycomponey.com</p>

                                </Box>
                            </Grid>
                        </Grid>


                        <div style={{ display: 'flex', margin: "20px", flexWrap:"wrap" }}>


                            <img src="https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png" style={{ width: "80px", height: "50px" }} />
                            <img src="https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png" style={{ width: "80px", height: "50px" }} />
                            <img src="https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png" style={{ width: "80px", height: "50px" }} />
                            <img src="https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png" style={{ width: "80px", height: "50px" }} />


                        </div>

                    </Grid>






                    <Grid item container xs={8}>

                        <Grid container spacing={2} >

                           
                           
                            <Grid item container xs={12} direction="column">

                                <h1> Level up your brand</h1>


                                <p>You can reach us anytime via </p>



                                <h2 style={{ margin: '20px' }}>Name</h2>

                                <TextField variant='filled' label="Name"  onChange={(e)=>setname(e.target.value)}   style={{ width: '500px', padding: '10px' }} />



                                <h2 style={{ margin: '20px' }}>Email</h2>

                                <TextField fullWidth variant='filled'   onChange={(e)=>setemail(e.target.value)} label="Email" style={{ width: '500px', padding: '10px' }} />



                                <h2 style={{ margin: '20px' }}>Phone</h2>

                                <TextField fullWidth variant='filled' label="Phone"  onChange={(e)=>setphone(e.target.value)} style={{ width: '500px', padding: '10px' }} />


                                <h2 style={{ margin: '20px' }}>How can we Help</h2>

                                <TextField
                                    id="outlined-multiline-static"
                                    label="Multiline Text Area"
                                    variant="filled" multiline
                                    rows={4}
                                    style={{ width: '500px', padding: '10px' }}
                                    onChange={(e)=>setmesg(e.target.value)}
                                />



                            
                             <Button variant='outlined' onClick={handlesubmit}  style={{ backgroundColor: "yellow", color: 'black', width: '500px', padding: '10px', margin: "20px" }}>  Submit  </Button>



                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>


            </div>




        </>





    )
}

export default Form






