export const ADD="ADD"
export const REMOVE="REMOVE"
export const UPDATE="UPDATE"



export const adddata=(data)=>{
    return{
        type:'ADD',
        payload:data


    }
}


export const removedata=(data)=>{
    return{
        type:'ADD',
        payload:data


    }
}

export const updatedata=(id, data)=>{
    return{
        type:'ADD',
        payload:{id,data}


    }
}