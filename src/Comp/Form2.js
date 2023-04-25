import React from 'react'
import { useFormik } from 'formik'
import { ErrorSharp } from '@material-ui/icons'



const Form2 = () => {



    const formik=useFormik({


        initialValues:{
            name:'',
            email:'',
            phone:''
        },
        onSubmit:(values)=>{
            console.log(values)
        },
       
       
        validate:(values)=>{
    
            const  errors = {};


            if(!values.name){

                errors.name="name is required"


            }else if(values.name.length < 4){

                   errors.name="name should be more then 4 chareters"

            
            }else if(!values.email){

                errors.email="email required"
          
            }else if(!/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(values.email)){
        
        
                errors.email="invalid formate"
        
            }else if(!values.phone){
              
                errors.phone='phone is required'


            }else if(!/^(7|8|9)[0-9]{9}$/.test(values.phone)){
                
                errors.phone="phone is invalide"
            
            } else{

                alert("done")


            }

            return errors





        }

        

    })
  
  
    


  
  
    return (



    <form style={{display:'flex', flexDirection:'column',  marginTop:'80px',marginLeft:'80px'}} onSubmit={formik.handleSubmit}>

      
      
        <input type="text" placeholder='name' name="name" onChange={formik.handleChange} value={formik.values.name} style={{padding:'10px', margin:'10px',width:'300px'}} />
        
        {
            
            formik.errors.name && <div>{formik.errors.name }</div>
       
       }

        <input type="text" placeholder='email' name="email"  onChange={formik.handleChange} value={formik.values.email}   style={{padding:'10px', margin:'10px',width:'300px'}} />


        {
            formik.errors.email && <div>{formik.errors.email }</div>
        }


        <input type="text" placeholder='phone'name="phone"  onChange={formik.handleChange} value={formik.values.phone}    style={{padding:'10px', margin:'10px',width:'300px'}}/>

        {
            formik.errors.phone && <div>{formik.errors.phone}</div>
        }


    
    
         <button type='submit' style={{padding:'10px', marginLeft:"80px",width:'100px', borderRadius:'20px'}}>Submit</button>  


    </form>

  )
}

export default Form2