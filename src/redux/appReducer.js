import {FINISH_GAME, SET_USER_ANSWER, SET_GAME_POINTS, SET_RIGHT_ANSWER, CHANGE_CURRENT_SCORE, START_NEW_GAME, START_NEXT_LEVEL} from './types'

export const initialState = {
  currentScore: 0,
  activePage: 0,
  rightAnswer: false,
  rightAnswerNumber: Math.floor(Math.random() * 6) + 1,
  userAnswer: null,
  gamePoints: 5,
  gameOver: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_GAME:
      return {...state, gameOver: true}
    case SET_USER_ANSWER:
      return {...state, userAnswer: action.payload}
    case SET_GAME_POINTS:
      return {...state, gamePoints: state.gamePoints - 1}
    case SET_RIGHT_ANSWER:
      return {...state, rightAnswer: true}
    case CHANGE_CURRENT_SCORE:
      return {...state, currentScore: state.currentScore + state.gamePoints}
    case START_NEW_GAME:
      return { ...state, ...initialState, rightAnswerNumber: Math.floor(Math.random() * 6) + 1}
    case START_NEXT_LEVEL:
      return {...state, activePage: state.activePage + 1, rightAnswerNumber: Math.floor(Math.random() * 6) + 1,
        userAnswer: initialState.userAnswer, rightAnswer: initialState.rightAnswer, gamePoints: initialState.gamePoints}
    default: 
      return state
  }
}

