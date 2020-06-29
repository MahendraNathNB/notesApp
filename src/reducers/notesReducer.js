const initialState = [] 

const notesReducer = (state=initialState,action) => {
    switch(action.type) {
        case 'GET_NOTES' : {
            return [...action.payload]
        }
        case 'ADD_NOTES' : {
            return [...state,action.payload]
        }
        case 'REMOVE_NOTES' : {
            return state.filter(note=>note._id!=action.payload._id)
        }
        case 'UPDATE_NOTES' : {
            return state.map(note=> {
                if(note._id ==action.payload){
            } else { 
                return note
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default  notesReducer 