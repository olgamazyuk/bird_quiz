import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import Question from '../question';
import Answer from '../answer';
import Notification from '../notification';
import Button from '../button';
import * as S from './styled';

class App extends Component {

  pages = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы','Морские птицы']

  render() {

    if(!this.props.gameOver) {
      return (
        <S.Container>
          <Header pages={this.pages} />
          <Question />
          <Answer />
          <Button />
        </S.Container>
      )
    } else {
      return (
        <S.Container>
          <Header pages={this.pages} />
          <Notification  />
          </S.Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  gameOver: state.gameOver
})

export default connect(mapStateToProps, null)(App)
