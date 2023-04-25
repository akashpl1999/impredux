import React, { useEffect, useState } from 'react'
import { CssBaseline, makeStyles, Paper, Typography, Box, Grid, TextField, Button } from '@material-ui/core'
import '../css/Form.css'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'






const schema = yup.object().shape({

    name: yup.string().matches(/^[A-Za-z/s]+$/,"bhbhbhbh").min(7).max(15).required(),

    email: yup.string().email().required(),

    phone: yup.string().matches(/^[0-9]+$/).min(10).max(10).required(),





})







const usestyles = makeStyles((theme) => ({

    root: {
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



const Formik = () => {









    const formik = useFormik({

        initialValues: {

            name: "",
            email: "",
            phone: ""
        },

        validationSchema: schema,


        onSubmit: (values) => {

            console.log(values)
        }

    })


 








    const classes = usestyles()

     return (



        <>

            <div className="grid" style={{ margin: '10px', padding: "40px" }}>


                <Grid container spacing={2} >

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


                        <div style={{ display: 'flex', margin: "20px", flexWrap: "wrap" }}>


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

                                <TextField variant='filled' label="Name" name='name' onChange={formik.handleChange} value={formik.values.name} style={{ width: '500px', padding: '10px' }} />

                                {formik.errors.name && <div>{formik.errors.name}</div>}


                                <h2 style={{ margin: '20px' }}>Email</h2>

                                <TextField fullWidth variant='filled' name="email" onChange={formik.handleChange} value={formik.values.email} label="Email" style={{ width: '500px', padding: '10px' }} />


                                {formik.errors.email && <div>{formik.errors.email}</div>}


                                <h2 style={{ margin: '20px' }}>Phone</h2>

                                <TextField fullWidth variant='filled' label="Phone" name='phone' onChange={formik.handleChange} value={formik.values.phone} style={{ width: '500px', padding: '10px' }} />

                                {formik.errors.phone && <div>{formik.errors.phone}</div>}






                                <Button variant='outlined' onClick={formik.handleSubmit} style={{ backgroundColor: "yellow", color: 'black', width: '500px', padding: '10px', margin: "20px" }}>  Submit  </Button>



                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>


            </div>




        </>





    )
}

export default Formik






