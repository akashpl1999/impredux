import React, { useState ,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        display: "flex",
        flexDirection: "column"
     
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Work() {
    const classes = useStyles();


    const [selectedOption, setSelectedOption] = useState("");

    const [options, setOptions] = useState(["name", "age", "city"]);


    const [data, setData] = useState({

        name: ["a1", "a2", "a3"],
        age: ["21", "22", "23"],
        city: ["c1", "c2", "c3"]

    });







    const handleChange = (e) => {

        setSelectedOption(e.target.value)
    }
 
   


    return (


        <div style={{ margin: '20px', padding: "20px" }}>



            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">select</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"

                    value={selectedOption}
                    onChange={handleChange}>



                    {
                        options.map((elm) => {

                          return  <MenuItem value={elm} style={{margin:"10px", width:'200px'}}>{elm}</MenuItem>

                        })
                    }



             </Select>
            </FormControl>

           


            <div>



                 
                        <FormControl variant="filled" className={classes.formControl}>
                       
                       
                        <InputLabel id="demo-simple-select-filled-label">sub-select</InputLabel>
                       
                       
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled">
                            <MenuItem value="">None</MenuItem>
                         
                            {
                                data[selectedOption]?.map((elm) => {
   
                                  return  <MenuItem value={elm}>{elm}</MenuItem>
        
                                })
                            }
                     </Select>
                    </FormControl>
        
                    
                      
                


            </div>


        </div>
    );
}



