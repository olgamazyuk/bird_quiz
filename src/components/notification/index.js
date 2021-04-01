import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startNewGame} from '../../redux/actions';
import * as S from './styled';

class Notification extends Component {

  playAgainHandler = () => {
    this.props.startNewGame()
  }

  render() {
    return (
      this.props.currentScore === 30 ?
        <S.Notification>
          <h2>Поздравляем</h2>
          <p>Вы набрали максимальное количество баллов!</p>
          <S.Button onClick={this.playAgainHandler}>Закрепить знания!</S.Button>
        </S.Notification> :
        <S.Notification>
          <h2>Поздравляем</h2>
          <p>{`Вы прошли викторину и набрали ${this.props.currentScore} из 30 возможных баллов`}</p>
          <S.Button onClick={this.playAgainHandler}>Попробовать еще раз!</S.Button>
        </S.Notification>
    )
  }
}

const mapStateToProps = state => ({
  currentScore: state.currentScore
})

const mapDispatchToProps = {
  startNewGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)