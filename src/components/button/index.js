import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startNewGame, startNextLevel} from '../../redux/actions';
import './style.css';
import * as S from './styled';

class Button extends Component {

   nextLevelHandler = () => {
      if (this.props.activePage === 5) {
         this.props.startNewGame()
      }
      this.props.startNextLevel()
   }

   render() {
      return (
         <S.Button
            onClick={this.nextLevelHandler}
            className={this.props.rightAnswer ? 'nextButton' : 'buttonDisabled'}
            disabled={!this.props.rightAnswer}
         >Next level
         </S.Button>
      )
   }
}

const mapStateToProps = state => ({
   rightAnswer: state.rightAnswer,
   activePage: state.activePage
})

const mapDispatchToProps = {
   startNewGame,
   startNextLevel
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)