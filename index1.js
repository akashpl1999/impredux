

// const a=4
// const b=20


// for(let i=a ; i<=b; i++){

//     let flog=1

//      for(let j=2; j<i; j++){
//         if(i%j==0){
//             flog=0
//             break
//         }
//      }

//      if(flog==1){
//         console.log(i)
//      }

// }

//  const num=6
//  if(num >= 2){
//      let fact=1;
//     for(i = 1; i <= num; i++){

//         fact *= i;

//     }
//     console.log(fact)

//  }


// const fruits = ["Banana", "Orangqe", "Apple", "Mango"];



//      const results=fruits.reduce((acc,cur)=>{
//         return  cur.length > acc.length ? cur :acc
//      })

//      console.log(results)


// const data = [

//     {id:1, name:'anms' , age: 30, city: 'New Yorik' },
//     {id:3, name: 'Jim', age: 35, city: 'New Yorki' },
//     {id:2, name: 'Jane', age: 25, city: 'Los Angeles' },
//     {id:4, name: 'Jack', age: 30, city: 'Los Angeles' }


//   ];



//   const mainfunction=(data, id)=>{

//      return data.reduce((acc, cur)=>{

//           if(!acc.includes(cur[id])){
//             acc.push(cur[id])

//           }
//           return acc;

//      },[])

//   }


//   const results=mainfunction(data, 'city')

//    console.log(results)


// const arr=[1,2,3,28,4,6,8,9,12,21,23]


//  const result= arr.sort((a,b)=>b-a)[0]
//  console.log(result)

// const results=arr.reduce((acc,cur)=>{
//     return cur > acc ? cur : acc
// })
// console.log(results)



const data = [

    { id: 1, name: 'anms', age: 30, city: 'New Yorik' },
    { id: 3, name: 'Jim', age: 35, city: 'New Yorki' },
    { id: 2, name: 'Jane', age: 25, city: 'Los Angeles' },
    { id: 4, name: 'Jack', age: 30, city: 'Los Angeles' }


];


// const myfunction = (data, age) => {

//     return data.reduce((acc, cur) => acc + cur[age], 0) / data.length;
// }


// const result = myfunction(data, 'age')
// console.log(result)



const result =data.some((value)=>{
   
          // console.log(val)
           typeof(value) === Number





    
})
   console.log(result)