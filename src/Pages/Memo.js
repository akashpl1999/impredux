// import React, { useMemo } from 'react'

import { useCallback } from "react";






// const Memo = () => {


//      const mean=useMemo(()=>{
//         const sum=0
//         for(const item of data){
//             sum+=item
//         }
//          return sum/data.lenght
//      })
 

//      console.log(mean)




//          const sortdata= [...data].sort((a,b)=>a-b)  ///asssending data
//          consr mid= math.floor(data.lenght/2)
//               return data.length%2===0 ?
//                sortdata[mid-1]  + sordteddata[mid]/2 
//                : sortted [mid]

 
 
//     return (


//     <div>
  
      
       


//     </div>


//   )
// }

// export default Memo

 /// maindata=[...data]

const data=useMemo(()=>{
   const sum=0;
   for(const item of maindata){
      sum+=item
   }
   return sum


},[maindata])  //when the main data change then only ot performnce the opertion as we speified


const funtiondata=useCallback(()=>{
      console.log("loged")
},[maindata])


it also some as useMemo but the differnce is that it memorize function ., values 

  opetmized permance of the the  hook