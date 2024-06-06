import { combineReducers } from "redux"

export const counterReducer = (state = 0, action)=>{
    switch(action.type){
        case "INCREMENT": return state + 1
        case "DECREMENT": return state + 1
        case "RESET": return state + 1
        case "INCREMENTBYVALUE": return state + action.payload
        default:return state

    }
}

const movieListReducer = () =>{
    return [
        {
            id:1, title:"iron Man",
            lead:"Robert Downey Jr",
            year:2008
        },

        {
            id:2, title:"Caption America",
            lead:"Chris evans",
            year:2007
        },

        {
            id:3,
             title:"thor",
            lead:"chis Hemsworth",
            year:2011
        },
        {
            id:4,
             title:"Hulk",
            lead:"Edword Norton",
            year:2009
        },
    ]
}

const seletctedMovieReducer = (state = null,action) => {
    switch(action.type){
        case  "SELECTEDMOVIE" : return action.payload;
        default : return state
    }

}

const reducer = combineReducers({
    count: counterReducer,
    movies: movieListReducer,
    seletctedMovie: seletctedMovieReducer
})

export default reducer