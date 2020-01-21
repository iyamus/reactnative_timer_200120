// ## redux ducks
// import

// actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// action creator
function start_timer() {
    return {
        type: START_TIMER
    }
}
function restart_timer() {
    return {
        type: RESTART_TIMER
    }
}
function addSecond() {
    return {
        type: ADD_SECOND
    }
}

// reducer
const TIME_DURATION = 1500;
const initState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

// action = function
function reducer(state = initState, action) {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
    }
}
// reducer fucntions
function applyStartTimer(state) {
    return {
        ...state, //read current state.
        isPlaying: true //overwrite the value
    }
}

function applyRestartTimer(state) {
    return {
        ...state, //read current state.
        isPlaying: false, //overwrite the value
        elapsedTime: 0
    }
}
function applyAddSecond(state) {
    if (state.elapsedTime < TIME_DURATION) {
        return {
            ...state, //read current state.
            elapsedTime: state.elapsedTime + 1 //overwrite the value
        }
    } else {
        return {
            ...state, //read current state.
            isPlaying: false //overwrite the value
        }
    }

}

// export action creator

const actionCreators = {
    start_timer,
    restart_timer,
    addSecond
}
// export reducer

export default reducer;