// const array1 = [4, 6, 5, 2, 3, 1];
// const array2 = [
//   { a: 1 },
//   { b: 2 },
//   { c: 3 },
//   { d: 4 },
//   { e: 5 },
//   { f: 6 },
//   { g: 7 },
//   { h: 8 },
//   { i: 9 },
//   { j: 10 },
// ];

// const output = array2.sort((a, b) => {
  
    
//     console.log(a)
//   const aKey = Object.keys(a)[0];
//  //   console.log({aKey})
//   const bKey = Object.keys(b)[0];
//  //  console.log({bKey})


 

//   const aIndex = array1.indexOf(a[aKey]);




//   const bIndex = array1.indexOf(b[bKey]);

//   console.log(aIndex)

//   if (aIndex !== -1 && bIndex !== -1) {

//     return aIndex - bIndex;
//   }


//   if (aIndex !== -1) {

//     return -1;

//   }

//   if (bIndex !== -1) {

//         return 1;

//   }

//   return 0;
// });

// console.log(output);



// var numArray = [5, 10, 12, 9, 31, 21, 18, 55, 39, 40];
// numArray.sort((a, b) => {
//     console.log(a,b)

//    return b-a;
// });
// console.log(numArray);

// array.forEach(element => {
    
// });



// const array1 = [4, 6, 5, 2, 3, 1];
// const array2 = [
//   { a: 1 },
//   { b: 2 },
//   { c: 3 },
//   { d: 4 },
//   { e: 5 },
//   { f: 6 },
//   { g: 7 },
//   { h: 8 },
//   { i: 9 },
//   { j: 10 },
// ];

  
//const output = []
// array1.forEach(element => {
//   const index = array2.findIndex(obj => Object.values(obj) === element);
//   console.log(index)
//   output.push(array2[index]);//4,6,5,2,3,1 

// });
// output.push(...array2);
// console.log(output)

// const output = []

//  array1.forEach((element)=>{

//          const index=array2.findIndex((obj)=>Object.values(obj)[0]===element)

//           output.push(array2[index])
       
//           array2.splice(index,1)


//  })

//    output.push(...array2)
//    console.log(output)

  


const array1 = [4, 6, 5, 2, 3, 1];
const array2 = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { d: 4 },
  { e: 5 },
  { f: 6 },
  { g: 7 },
  { h: 8 },
  { i: 9 },
  { j: 10 },
];

 const arr=[1,2,3,4,7,5,8,9]


const sort =arr.sort((a,b)=>{

   // console.log(a)
   //console.log(b)

     
    return a-b
})

console.log(sort)

//    Array methods: concat(), join(), pop(), push(), reverse(),
//   shift(), slice(), sort(), splice(), toString(), unshift(), 
//   indexOf(), lastIndexOf(), includes(), forEach(), map(), filter(),
//   reduce(), reduceRight(), every(), some()



// const data= array2.map((elm)=>Object.values(elm)[0])
//   console.log(data)


//const data=array1.concat(array2)


// const data=array1.join('')


// const data1=array1.splice(2,0,'1','2')

// console.log(data1)
 

//const fruits = ["Banana", "Orange", "Apple", "Mango"];

//   fruits.splice(2, 1)  ///splice.(index, no of removel items)

//  console.log(fruits)  //["Banana", "Orange",  "Mango"];



 //const data=fruits.slice(1,3)  //slice.(index, endindex(notinclued))

     // console.log(data)         //[ "Orange",  "Apple"];




//arr.includes(data) //retuns true are false



const data = [
    {
      name: 'John',
      age: 30,
      city: 'New York'
    },
    {
      name: 'Jane',
      age: 25,
      city: 'Los Angeles'
    },
    {
      name: 'Jim',
      age: 35,
      city: 'New York'
    }
  ];

  
  const result=data.reduce((acc,cur)=>{

      if(!acc[cur.city]){
         acc[cur.city]=[]
      }
      acc[cur.city].push(cur)
      return acc;


  },{})

  console.log(result)

  const arrdata= [1,2,3,4]

  const resultdata=arrdata.reduce((acc,cur)=>{
     return acc*cur
  })
  console.log(resultdata)



  const data2 = [
    {  age: 30, city: 'New York' , num:"jnjnj"},
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Jim', age: 35, city: 'New York' },
    { name: 'Jack', age: 30, city: 'Los Angeles' }
  ];
  

   const resultdata2=data2.reduce((acc,cur)=>{
            Object.keys(cur).forEach((key)=>{
                //console.log(key)
                if(!acc[key]){

                    acc[key] = 0

                 //   console.log(acc[key])
              
                }

                 acc[key] ++;  
                 console.log(acc[key])
               

            })
            return acc;
         
     


   },{})

   console.log(resultdata2)



   const numdata=[1,2,2,3,1,4,5,5,7,6,2]


   const resultdata1= numdata.reduce((acc,cur)=>{
      
            if(!acc[cur]){

                 acc[cur]= 0

            }
             acc[cur]++
             return acc;

   },{})

   console.log(resultdata1)


   const fruits = ["Banana", "Orange", "Apple", "Mango"];


   const result11=fruits.reduce((acc,cur)=>{
    
       return (acc.concat(cur))
   })

   console.log(result11)



   const data221 = [

    { age: 30, city: 'New York' , num:"jnjnj"},
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Jim', age: 35, city: 'New York' },
    { name: 'Jack', age: 30, city: 'Los Angeles' }



  ];
  

  const resultdata12=(data, city)=>{

  
  
    return data.reduce((acc,cur)=>{
            
    
             
          acc.push(cur[city])

          return acc;
        
  }, [])

}

const result111=resultdata12(data221,'city')

console.log(result111)