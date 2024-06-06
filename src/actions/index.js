//actions


export const incrementAction =() => {
    return {
        type:"INCREMENT",
    }
}

export const decrementAction =() => {
    return {
        type:"DECREMENT",
    }
}


export const resetAction =() => {
    return {
        type:"RESET",
    }
}

export const incrementByValueAction =(val) => {
    return {
        type:"INCREMENTBYVALUE",
        payload:val
    }
}

// export const selectMovieAction =(movie) => {
//     return {
//         type:"SELECTEDMOVIE",
//         payload:movie
//     }
// }