const initialState = {
    currVideoId: null
}

export function videoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CURR_VIDEO_ID':
            return { currVideoId: action.videoId }

        default:
            return state
    }

    // For debug:
    // window.boardState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    // return newState
}
