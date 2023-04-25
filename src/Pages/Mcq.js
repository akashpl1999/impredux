import React, { useEffect, useState } from 'react'
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
import axios from 'axios';



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


const Mcq = () => {

    const classes = usestyles();
    const [data, setdata] = useState()
    const [helperText, setHelperText] = useState("");
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState(0);

   const questioncheck=data?.map((elm)=>elm.id)


    const [selectedmultipleAnswers, setSelectedmultipleAnswers] = useState({});
   
    const [show, setshow] = useState(null)
    
  
    const [selected, setSelected] = useState([]);


    const handlemultiple = (questionId, e) => {
      
        if (selected.length === 2 && !selected.includes(e.target.name)) return;


        let newSelected = [...selected];



        if (selected.includes(e.target.name)) {

          newSelected = selected.filter(o => o !== e.target.name);

        } else {
          
          newSelected.push(e.target.name);
            
        }
        setSelected(newSelected);
   
        setSelectedmultipleAnswers({...selectedmultipleAnswers, [questionId]:newSelected})
         
        
      };
    


 


    const handleOptionSelect = (questionId, optionId) => {

        setSelectedAnswers({ ...selectedAnswers, [questionId]: optionId });


    };


    const checkAnswer2 = (questionId) => {
      
        setshow(questionId)
        console.log(questionId)

        console.log(selectedmultipleAnswers)

         const selectedoption=selectedmultipleAnswers[questionId]

           console.log(selectedoption.sort())

           const correctOption = data.find(question => question.id === questionId)


                console.log(correctOption.answer)
      
                     if(correctOption){

                        if (JSON.stringify(correctOption.answer) === JSON.stringify(selectedoption.sort())) {
                   
                   
                            setHelperText("correct")
        
                            console.log("The arrays are equal.");
                           
                           
                          
                        
                          } else {
                            setHelperText("incorrect")
        
                             console.log(selectedoption)
                          }
                     


                     }
                  

                }

            








                   


                


    

    const checkAnswer = (questionId) => {

        setshow(questionId)


        const selectedOption = selectedAnswers[questionId];
 


        const correctOption = data.find(question => question.id === questionId).answer;


        if (selectedOption === correctOption) {




            setCorrectAnswers(correctAnswers + 1);


            setHelperText("correct")


        } else {


            setHelperText("incorrect")


        }
    };




    console.log(selectedAnswers)


    console.log(correctAnswers)

    console.log(selected)

    useEffect(() => {

        axios.get('http://localhost:7000/data')

            .then((res) => {
                console.log(res.data)

                setdata(res.data)

            })


    }, [])



    return (


        <div className={classes.form}>

            {


                data?.map((elm) => {


                    return (

                        <FormControl component="fieldset" className={classes.control}>


                            <FormLabel component="legend">{elm.question}</FormLabel>





                            {elm.qid === 1 ?  (

                                <FormControl  component="fieldset" className={classes.control}>

                                    <FormGroup>

                                        {
                                            elm.options.map((option) => {

                                                return <FormControlLabel control={<Checkbox checked={selected.includes(option.values)}
                                                    name={option.id} value={option.values}
                                                        onChange={(e)=>handlemultiple(elm.id, e)}
                                              
                                                    
                                                      />} label={option.values} />


                                            })
                                        }


                                        {

                                            show === elm.id && <FormHelperText style={{ color: 'red' }}> {helperText} </FormHelperText>

                                        }


                                        <Button onClick={() => checkAnswer2(elm.id)} variant="contained" color="primary" style={{ width: '120px' }}>

                                            submit

                                        </Button>
                                                <p>{JSON.stringify(elm.answer)}</p>

                                    </FormGroup>
                                </FormControl>

                           

                             ) : (

                                  

                                <RadioGroup value={selectedAnswers[elm.id]} onChange={e => handleOptionSelect(elm.id, e.target.value)}>


                                    {

                                        elm.options.map((option) => {
                                            return <FormControlLabel value={option.id} control={<Radio />} label={option.values} />
                                        })

                                    }


                                    {show === elm.id && <FormHelperText style={{ color: 'red' }}> {helperText} </FormHelperText>
                                    }
                                    <Button onClick={() => checkAnswer(elm.id)} variant="contained" color="primary" style={{ width: '120px' }}>

                                        submit

                                    </Button>

                                </RadioGroup>

                            )

                            }







                        </FormControl>




                    )
                })
            }




        </div>



    )
}

export default Mcq






    // const handlesubmit = () => {


    //     let ans = 0;

    //     data.forEach((elm) => {
    //         const selectedOption = selectedAnswers[elm.id];

    //         if (selectedOption === elm.answer) {


    //             setCorrectAnswers(correctAnswers + 1);


    //             ans += 1;



    //         } else {

    //         }


    //     });



    // }
