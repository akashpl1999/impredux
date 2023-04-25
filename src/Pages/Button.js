import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';


const usestyles = makeStyles((theme) => ({

  form: {

    margin: '50px',
    display: 'flex',
    flexDirection: 'column'

  },

  control: {
    margin: '10px',
    padding: '10px'
  }
}))

const Button1 = () => {

  const classes = usestyles();

  const [value, setValues] = useState("")
  const [error, setError] = useState(false);

  const [helperText, setHelperText] = useState("");
  const [helperText1, setHelperText1] = useState("");


  const ans = 17;

  
 





  const [dataoption, setdataoption] = useState([{ option: 1, value: "14"}, { option: 2, value: "13"}, { option: 3, value: "17"}, { option: 4, value: "20"}])

  // console.log(value)
  const handleChange = (e) => {
    setValues(e.target.value)
  }



  const handleSubmit1 = (event) => {

    event.preventDefault();

    if (ans == value) {
      setHelperText('You got it!');
      setError();
    } else {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    }
  };



  










  const [state, setstate] = useState({ })

  const { a, b, c, d } = state

  

 
  const handleChange2 = (e) => {

    setstate({ ...state, [e.target.name]: e.target.checked,})
  }

  console.log(state)

  const error2 = [a,b,c,d].filter((v) => v).length !==2 
  console.log(error2)

  const correctAnswers = { a: true, b:false, c:false,  d: true };


   console.log(Object.keys(state).every((key) => state[key] === correctAnswers[key] ))
 
  
  const handlesubmit2=()=>{


    if(Object.keys(state).every((key) => state[key] === correctAnswers[key])){


      setHelperText1("done its correct")
    }else{

      setHelperText1(" its incorrect")
  
    }
  }

  return (


    <div className={classes.form}>




      <FormControl component="fieldset" className={classes.control}>


        <FormLabel component="legend">what is sum of 12+5 =</FormLabel>



        <RadioGroup value={value} onChange={handleChange}>


          {

            dataoption.map((option)=>(
              <FormControlLabel value={option.value} control={<Radio />} label={option.value}  key={option.value}/>

            )

     
            )
          }

        </RadioGroup>
        <FormHelperText style={{ color: 'red' }}> {helperText} </FormHelperText>

        <Button onClick={handleSubmit1} variant="contained" color="primary" style={{ width: '120px' }}>

          submit

        </Button>


      </FormControl>












      <FormControl required error={error2} component="fieldset" className={classes.control}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>


          <FormControlLabel
            control={<Checkbox checked={a}  onChange={handleChange2} name="a" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={b} onChange={handleChange2} name="b" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={c} onChange={handleChange2} name="c" />}
            label="Antoine Llorca"
          />

          <FormControlLabel
            control={<Checkbox checked={d} onChange={handleChange2} name="d" />}
            label="others"
          />
        </FormGroup>
        <FormHelperText style={{ color: 'red' }}> {helperText1} </FormHelperText>


        <Button onClick={handlesubmit2} variant="contained" color="primary" style={{ width: '120px' }}>
          submit
        </Button>

       

      </FormControl>














    </div>





  )
}

export default Button1


// import React, { useState } from 'react';


// import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core';

// const CheckboxGroup = () => {


//   const [selected, setSelected] = useState([]);


//   const options=[{ label: 'Option 1', value: 'optiongbhb1' },    { label: 'Option 2', value: 'optionjnjnj2' },    { label: 'Option 3', value: 'opthhbion3' },  ]



//   const handleChange = (event) => {



//     const currentSelection = selected;


//     const { value } = event.target;


//     if (currentSelection.includes(value)) {

//       setSelected(currentSelection.filter((item) => item !== value));


//     } else {


//       setSelected([...currentSelection, value]);


//     }
//   };

//   console.log(selected)

//   return (
//     <FormControl component="fieldset">
//       {options?.map((option) => (
//         <FormControlLabel
//           key={option.value}
//           control={
//             <Checkbox
//               checked={selected.includes(option.value)}
//               onChange={handleChange}
//               value={option.value}
//             />
//           }
//           label={option.label}
//         />
//       ))}
//     </FormControl>
//   );
// };

// export default CheckboxGroup;
