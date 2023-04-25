import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, FormLabel, InputLabel, Select } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',

    margin: '40px'
  }
});


const Search = () => {



  const classes = useStyles();



  const [data, setdata] = useState([])

  const [search, setsearch] = useState("")

  const [results, setresults] = useState([])

  const [selected, setselected] = useState([])


  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
    "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic"]



  const [storecountry, setstorecountry] = useState({
    name: []
  })





  useEffect(() => {
    axios.get("http://localhost:4000/data")
      .then(res => {
        console.log(res.data)

        setdata(res.data)


      }
      )

  }, [])


  const handlechange = (e) => {

    setsearch(e.target.value)

    const filterdata = data.filter((elm) => {

      return elm.name.toLowerCase().includes(search.toLowerCase()) || elm.color.toLowerCase().includes(search.toLowerCase())

    })

    setresults(filterdata)

  }



  const handlechangecountry = (e) => {

     setstorecountry(prevs=>{


      if(e.target.value.length > 2){

        return prevs;

      }

        return{

          ...prevs,
           [e.target.name]:e.target.value
  
        } 
      
      })

   

    console.log(storecountry)
  };









  return (


    <div>
      <div style={{ margin: '20px' }}>

        <input type="text" placeholder='enter text' value={search} onChange={handlechange} style={{ padding: '10px', width: '400px', }} />

        {
          results.map((elm) => {
            return (
              <>
                <p>{elm.name}</p>

                <p>{elm.color}</p>


              </>
            )
          })

        }


      </div>


      <div className={classes.root}>


        <FormControl>

          <InputLabel >select country</InputLabel>


          <Select labelId='demo-multiple-name-lable' id='demo-multiple-name' multiple   value={storecountry.name} onChange={handlechangecountry}   inputProps={{
            name: 'name',
            id: 'demo-mutiple-name',
          }}
  >

            {
              countries.map((elm) => {

                return <MenuItem style={{ width: '200px' }} value={elm}>{elm}</MenuItem>

              })
            }



          </Select>




        </FormControl>



      </div>






    </div>

  )
}

export default Search