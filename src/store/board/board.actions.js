import { boardService } from "../../services/board.service.js";
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'

export function loadBoards() {
    return async (dispatch) => {
        try {
            const miniBoards = await boardService.query()
            console.log('load boards action:', miniBoards)
            dispatch({ type: 'SET_BOARDS', miniBoards })
        } catch (err) {
            console.log('Cannot load boards', err)
            throw err
        }
    }
}

export function loadBoard(boardId) {
    return async (dispatch) => {
        try {
            const newBoard = await boardService.getBoardById(boardId)
            dispatch({ type: 'SET_BOARD', newBoard })
        } catch (err) {
            showErrorMsg('Cannot load board')
            console.log('Cannot load board', err)
        }
    }
}

export function addBoard(board) {
    return async (dispatch) => {
        try {
            const newBoard = await boardService.save(board)
            dispatch({ type: 'SET_BOARD', newBoard })
        } catch (err) {
            console.log('Cannot add board', err)
        }
    }
}

// export function removeBoard(boardId) {
//     return async (dispatch) => {
//         try {
//             await boardService.remove(boardId)
//             console.log('Deleted Successfully!')
//             // dispatch(getActionRemoveBoard(boardId))
//             showSuccessMsg('Board removed')
//         } catch (err) {
//             showErrorMsg('Cannot remove board')
//             console.log('Cannot remove board', err)
//         }
//     }
// }

export function updateBoard(board) {
    return async (dispatch, getState) => {
        try {
            const updatedBoard = await boardService.save(board)
            dispatch({ type: 'UPDATE_BOARD', updatedBoard })
        } catch (err) {
            console.log('Cannot update board', err)
            throw err
        }
    }
}