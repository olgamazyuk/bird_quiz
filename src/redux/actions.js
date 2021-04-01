import {FINISH_GAME, SET_USER_ANSWER, SET_GAME_POINTS, SET_RIGHT_ANSWER, CHANGE_CURRENT_SCORE, START_NEW_GAME, START_NEXT_LEVEL} from './types'

export function finishGame() {
  return {
    type: FINISH_GAME,
  }
}

export function setUserAnswer(id) {
  return {
    type: SET_USER_ANSWER,
    payload: id
  }
}

export function setGamePoints() {
  return {
    type: SET_GAME_POINTS,
  }
}

export function setRightAnswer() {
  return {
    type: SET_RIGHT_ANSWER
  }
}

export function changeCurrentScore() {
  return {
    type: CHANGE_CURRENT_SCORE
  }
}

export function startNewGame() {
  return {
    type: START_NEW_GAME
  }
}

export function startNextLevel() {
  return {
    type: START_NEXT_LEVEL
  }
}

