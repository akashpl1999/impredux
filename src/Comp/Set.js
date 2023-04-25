import React, { useState, useEffect } from 'react';

function Set() {

    const [currentIndex, setCurrentIndex] = useState(0);


    const divs = [


        <div style={{ display: 'flex', position: "relative", flexDirection: 'column', height: "100vh", width: '100vw' }}>

            <div >

                <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8f200ad4059f5a528df1fea4/gr4.png" style={{ width: '1300px', height: '650px', margin: '10px', padding: '1px' }} />


                <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c765238cd628544aa482c0af/86.png" style={{ width: '550px', height: '550px', position: 'absolute', bottom: '100px', right: '170px' }} />



            </div>




            <div style={{ position: 'absolute', top: '50px', left: "90px" }}>


                <h1 style={{ fontWeight: '2000', fontSize: '60px', color: 'white', textAlign: "left" }}> Discover <br></br> a world <br></br> without limits</h1>

                <p style={{ textAlign: "left", color: "white" }}>

                    It doesn't take a genius to see   why switching to the  <br></br>Galaxy S9 | S9+ is a good idea.

                </p>


            </div>




        </div>,


        < div style={{ height: '100vh', width: "100vw" }}>

            <h1 style={{ fontWeight: "2000", textAlign: "center" }}> Explore other Galaxy devices.</h1>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", margin: "40px" }}>

                <div style={{ display: 'flex', flexDirection: "column" }} >

                    <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/bcc9b32cf64c533db2cedeed/5.jpg" style={{ width: "200px", height: "300" }} />
                    <h1>Phones</h1>

                </div>


                <div style={{ display: 'flex', flexDirection: "column" }} >

                    <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3660823838d75564b952ee28/Explore_Tab_S_080818.jpg" style={{ width: "200px", height: "300px" }} />
                    <h1>Tablets</h1>


                </div>



                <div style={{ display: 'flex', flexDirection: "column" }} >

                    <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/01310563dc405a29a5b9bf20/Explore_Watch_S_v2.jpg" style={{ width: "200px", height: "300px" }} />
                    <h1>Wearables</h1>

                </div>


                <div style={{ display: 'flex', flexDirection: "column" }} >

                    <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/6336d6c766b357eb823760e8/Explore_Virtual_S_080818.jpg" style={{ width: "200px", height: "300px" }} />

                    <h1>Virtual Reality</h1>


                </div>

            </div>




        </div>,


        <div style={{ display: 'flex', backgroundColor: 'pink', height: '100vh', width: "100vw" }}>

            <div style={{ position: 'absolute', top: '50px', left: "90px" }}>


                <h1 style={{ fontWeight: '2000', fontSize: '60px', color: 'black', textAlign: "left" }}> Discover <br></br> a world <br></br> without limits</h1>

                <p style={{ textAlign: "left", color: "black" }}>

                    It doesn't take a genius to see   why switching to the  <br></br>Galaxy S9 | S9+ is a good idea.

                </p>


            </div>



        </div>,
        <div style={{ display: 'flex', backgroundColor: 'darkcyan', height: '100vh', width: "100vw" }}>

            <div style={{ position: 'absolute', top: '50px', left: "90px" }}>


                <h1 style={{ fontWeight: '2000', fontSize: '60px', color: 'black', textAlign: "left" }}> Discover <br></br> a world <br></br> without limits</h1>

                <p style={{ textAlign: "left", color: "black" }}>

                    It doesn't take a genius to see   why switching to the  <br></br>Galaxy S9 | S9+ is a good idea.

                </p>


            </div>



        </div>,

        <div style={{ display: 'flex', backgroundColor: 'goldenrod', height: '100vh', width: "100vw" }}>

            <div style={{ position: 'absolute', top: '50px', left: "90px" }}>


                <h1 style={{ fontWeight: '2000', fontSize: '60px', color: 'black', textAlign: "left" }}> Discover <br></br> a world <br></br> without limits</h1>

                <p style={{ textAlign: "left", color: "black" }}>

                    It doesn't take a genius to see   why switching to the  <br></br>Galaxy S9 | S9+ is a good idea.

                </p>


            </div>



        </div>





    ];





    useEffect(() => {

        const showdata = setInterval(() => {

            setCurrentIndex((currentIndex + 1) % divs.length)

        }, 3000)

        return ()=>clearInterval(showdata)

          

    }, [currentIndex, divs.length])


    const handleNextClick = () => {

        setCurrentIndex((currentIndex + 1) % divs.length)


    }

    return (
        <div style={{ position: 'relative ' }}>

            {divs[currentIndex]}

            <button style={{ position: 'absolute', right: '10px', top: "50%", padding: '10px' }} onClick={handleNextClick}> </button>
        </div>
    );
}



export default Set;