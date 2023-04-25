import { ADD, REMOVE, UPDATE } from './Action'




const todoreducer = (state = [], action) => {

    const { type, payload } = action


    switch (type) {

        case ADD:
            return [


                ...state,

                {
                    id: Math.floor(Math.random() * 100000),

                    name: payload
                }

            ]


        case REMOVE:

            return state.filter((elm) => elm.id !== payload)



        case UPDATE:
            return state.map((elm) => {
                
                if (elm.id === payload.id) {
                    return payload
                }
                return elm
            })

        default: return state


    }
}

export default todoreducer;