
// import { combineReducers } from "redux"


// import { createStore, applyMiddleware, compose } from "redux"


// import thunk from "redux-thunk"


// const middleware=[thunk]


// export const ADD='ADD'
// export const REMOVE='REMOVE'
// export const UPDATE='UPDATE'



//    const initialstate={
//     data:[]

//    }


// export const adddata=(data)=>{
//     return{
//         type:'ADD',
//         paylode:data
//     }
// }



// export const removedata=(data)=>{
//     return{
//         type:'REMOVE',
//         paylode:data
//     }
// }

// export const updatedata=(id,data)=>{
//     return{
//         type:'UPDATE',
//         paylode:{id,data}
//     }
// }



// const reducers=combineReducers=(state=initialstate, action)=>{


//     const {type,paylode}=action


//     switch(type){

//         case ADD:
//             return{

//                 ...state , data:[...state.data, paylode]
//             }

//         case REMOVE :
        
//               return  {

//                 ...state ,data:state.data.filter((elm)=>elm.id  !==paylode)
                
            

//               }


//          case UPDATE:
//             return {


//                 ...state, data:state.data.map((elm)=>{
//                     if(elm.id === paylode.id){
//                         return  paylode
//                     }

//                     return elm


//                 })
//             }
            


//              default:return state

//     }

// }



//  export const rootreducer= combineReducers=({
//     data:reducers
// })


// const store =createStore(


//     combineReducers,

//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 

//     )
// )


// export default {store, reducers}
 







import { createStore , applyMiddleware,compose} from "redux";



import thunk from "redux-thunk";


import  rootreducer from '.reducer/index'


const midleware=[thunk]



const store =createStore(
    rootreducer,
    
    compose(

        applyMiddleware(...midleware),
        link
    )
)

export default store;