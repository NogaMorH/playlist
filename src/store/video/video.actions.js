export function selectVideo(videoId) {
    return (dispatch) => {
        console.log('videoId:', videoId)
        dispatch({ type: 'SET_CURR_VIDEO_ID', videoId })
    }
}