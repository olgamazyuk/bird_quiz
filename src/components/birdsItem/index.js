import React, { Component } from 'react';
import { connect } from 'react-redux';
import {finishGame, setUserAnswer, setGamePoints, setRightAnswer, changeCurrentScore} from '../../redux/actions';
import correct from '../../assets/right-answer.mp3';
import incorrect from '../../assets/wrong-answer.mp3';
import * as S from './styled';

class BirdsItem extends Component {

  state = {
    isClicked: false,
    isCorrectAnswer: false,
  }

  getSoundAnswer = () => {

    const { rightAnswerNumber, id, rightAnswer, activePage } = this.props
    const rightAnswerSound = new Audio()
    const wrongAnswerSound = new Audio()
    rightAnswerSound.src = correct
    wrongAnswerSound.src = incorrect
    this.props.setUserAnswer(id)
    if (!rightAnswer) {
      if (id !== rightAnswerNumber) {
        wrongAnswerSound.play()
        this.setState({ isClicked: true })
      } else {
        rightAnswerSound.play()
        this.setState({ isCorrectAnswer: true })
        this.props.setRightAnswer()
        this.props.changeCurrentScore()
        if (activePage === 5) {
          this.props.finishGame()
        }
      }
      this.props.setGamePoints()
    }
  }

  render() {
    const { data, id } = this.props
    return (
      <S.BirdsItem
        onClick={this.getSoundAnswer}
        id={id}
      >{data}
      </S.BirdsItem>
    )
  }
}

const mapDispatchToProps = {
  finishGame,
  setUserAnswer,
  setGamePoints,
  setRightAnswer,
  changeCurrentScore
}

const mapStateToProps = state => ({
  rightAnswer: state.rightAnswer,
  rightAnswerNumber: state.rightAnswerNumber,
  activePage: state.activePage
})

export default connect(mapStateToProps, mapDispatchToProps)(BirdsItem)




