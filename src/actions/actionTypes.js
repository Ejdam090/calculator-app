export const UPDATE = 'UPDATE';
export const ADD = "ADD";
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";
export const CLEAR = "CLEAR";
export const EQUAL = "EQUAL";
export const DELL = "DELL";


export const updateDisplay = content => ({
    type:UPDATE,
    payload:{
        input: content,
        operation:'num'
    }
})

export const addition = content =>({
    type: ADD,
    payload:{
        operation:'operator'
    }
})
export const backspace = content =>({
    type: DELL,
    payload:{
        operation:'operator'
    }
})

export const subtraction = content =>({
    type: SUBTRACT,
    payload:{
        operation:'operator'
    }
})

export const multiplication = content => ({
    type: MULTIPLY,
    payload:{
        operation: 'operator'
    }
})

export const division = content =>({
    type: DIVIDE,
    payload:{
        operation:'operator'
    }
})

export const clearDIsplay = content =>({
    type:CLEAR,
    payload:{
        operation: 'clear'
    }
})

export const equal = content =>({
    type:EQUAL,
    payload:{
        operation: 'equal'
    }
})