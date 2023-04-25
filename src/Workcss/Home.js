import { Button, Typography } from '@material-ui/core'
import React from 'react'
import './Home.css'


  
const Home = () => {




    return (


        <div>

            <div className='homemain'>

                
                <div className='homeside1'>

                    <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/5a4d4de3a27d542687388e59/dff-min.jpg" />

                    <div className='heading'>

                        <h3>

                            Arch Agency

                        </h3>


                        <p>

                            Duis ultricies lacus sed turpis tincidunt id aliquet risus. Bibendum est ultricies integer quis auctor. Id eu nisl nunc mi. Eget nunc scelerisque  in aliquam. Malesuada proin libero nunc consequat interdum.


                        </p>




                    </div>
                  


                </div>

            </div>




            <div className='cityblock'>

                <div className='first1'>

                    <img className='img1' src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/b3b2ef01d896582296b5f908/group-architect-discussing-layout-plan-blueprint-office_23-2147842995.jpg" />

                </div>

                <div className='first2'>

                    <img className='img2' src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/3ac814e20676527ab438250d/two-male-engineers-looking-blueprint_23-2147842989.jpg" />

                </div>


                <div className='citytext'>


                    <h3>Future City</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <Button className='btn' variant='outlined' color="secondary" >CONTACT AS</Button>


                </div>




            </div>






            <div className='priblock'>


                <div className='priheading'>
                   
                    <h2>Company Principles</h2>
                    {/* <img src="https://images01.nicepage.com/93/c8/93c8d638317c741291e390fb2c10a215.png"  style={{width:"50px" }}/> */}

                    <p>
                        Sample text. Click to select the text box. Images from
                    </p>

                </div>

                <div className='priimgblock'>

                    <div className='img1card'>

                        <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/7740f3ca7e1856a3ae8d3694/gf.jpg"  />
                         
                          <div>

                            <h1>01</h1>
                          
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                          
                          
                          </div>


                    </div>


                    <div className='img1card'>
                        <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/5a4d4de3a27d542687388e59/dff-min.jpg"/>

                        <div>
                            <h1>01</h1>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                          </div>


                    </div>


                    <div className='img1card'>

                        <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/9d1b04a0910e5b9494238ce4/fv.jpg"  />
                     
                        <div>

                            <h1>01</h1>

                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                         
                         
                         
                          </div>


                          <p className='hover-line'>Learn more</p>


                    </div>






                </div>



            </div>




        </div>

    )
}

export default Home