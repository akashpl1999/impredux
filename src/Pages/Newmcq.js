import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, FormGroup } from '@material-ui/core'
import axios from 'axios';
import { Checkbox } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: '50px',
        display: 'flex',
        flexDirection: 'column'

    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },

    control: {

        margin: '10px',
        padding: '10px'
    }
}));


const Newmcq = () => {

    const classes = useStyles();

    const [data, setData] = useState([])
    const [show, setshow] = useState(null)

    const [helperText, setHelperText] = useState("");


    const [radioselect, setradioselect] = useState({})

    

    const [multiselect, setmultiselect] = useState({})




    const [selected, setselected] = useState([])


    const [selectedOptions, setSelectedOptions] = useState({});



    const handlechangeradio = (questionid, optionid) => {

        setradioselect({ ...radioselect, [questionid]: optionid })

    }


    const radiosubmit = (questionid) => {

        setshow(questionid)

        const correctanswer = data.find((elm) => elm.id == questionid).answer;
        const sellectedanswer = radioselect[questionid]
        console.log(`selected ${sellectedanswer} and correct ${correctanswer}`)
        if (sellectedanswer === correctanswer) {
            setHelperText("correct")
        } else {
            setHelperText("incorrect")
        }


    }

    const handlechangemultiple = (questionId, optionId) => {

        let newSelectedOptions = { ...selectedOptions };
        newSelectedOptions[questionId] = newSelectedOptions[questionId] || [];

     

        if (newSelectedOptions[questionId].includes(optionId)) {

            newSelectedOptions[questionId] = newSelectedOptions[questionId].filter(id => id !== optionId);
        } else {
            newSelectedOptions[questionId].push(optionId);
        }
        console.log(newSelectedOptions)

        setSelectedOptions(newSelectedOptions);
    };


    const handleChange2 = (questionId, option) => {
        if (selectedOptions[questionId] && selectedOptions[questionId].length !== 2) {
            // display error message or perform other action to prevent selection
            return;
        }
        setSelectedOptions({
            ...selectedOptions,
            [questionId]: [...(selectedOptions[questionId] || []), option]
        });

        console.log(selectedOptions)
    };


    const checkAnswer2 = (questionId) => {

        setshow(questionId)
        console.log(questionId)


        const selectedoption = selectedOptions[questionId]

        console.log(selectedoption.sort())

        const correctOption = data.find(question => question.id === questionId)


        console.log(correctOption.answer)

        if (correctOption) {

            if (JSON.stringify(correctOption.answer) === JSON.stringify(selectedoption.sort())) {



                console.log("The arrays are equal.");
                setHelperText("correct")


         
            } else {

                console.log(selectedoption)
                setHelperText("incorrect")

            }



        }


    }






    useEffect(() => {

        axios.get('http://localhost:7000/data')

            .then((res) => {
                console.log(res.data)

                setData(res.data)

            })


    }, [])



    return (

        <div>

            {

                data.map((elm) => {

                    return (

                        <>

                            {elm.qid == 1 ? (

                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">{elm.id}.{elm.question}</FormLabel>

                                    <FormGroup>


                                        {
                                            elm.options.map((option) => {
                                                return <FormControlLabel control={
                                                    <Checkbox
                                                        checked={selectedOptions[elm.id] && selectedOptions[elm.id].includes(option.id)}
                                                        name={option.id}
                                                        onChange={(e) => handlechangemultiple(elm.id, e.target.name)}
                                                    />
                                                }
                                                    label={option.values}
                                                />


                                            })
                                        }

                                        {

                                            show === elm.id && <FormHelperText style={{ color: 'red' }}> {helperText} </FormHelperText>

                                        }


                                        <Button onClick={() => checkAnswer2(elm.id)} variant="contained" color="primary" style={{ width: '120px' }}>

                                            submit

                                        </Button>

                                    </FormGroup>
                                </FormControl>



                            ) : (


                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">{elm.id}.{elm.question}</FormLabel>
                                    <RadioGroup value={radioselect[elm.id]} onChange={(e) => handlechangeradio(elm.id, e.target.value)} >

                                        {
                                            elm.options.map((option) => {

                                                return <FormControlLabel value={option.id} name={option.values} control={<Radio />} label={option.values} />

                                            })



                                        }

                                        {

                                            show === elm.id && <FormHelperText style={{ color: 'red' }}> {helperText} </FormHelperText>

                                        }

                                        <Button onClick={() => radiosubmit(elm.id)} variant="contained" color="primary" style={{ width: '120px' }}>

                                            submit

                                        </Button>

                                    </RadioGroup>
                                </FormControl>




                            )
                            }


                        </>

                    )
                })
            }









        </div>


    )
}

export default Newmcq