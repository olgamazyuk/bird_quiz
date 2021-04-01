import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import bird from '../../assets/bird.png';
import * as S from './styled';
import './style.css';
import data from '../../data/birdsData';


const Question = ({rightAnswer, rightAnswerNumber, currentArray}) => {

  return (
    <S.RandomBird>
      <S.BirdImage alt="bird" src={rightAnswer ? currentArray[rightAnswerNumber - 1].image : bird} />
      <S.BirdTitlePlayer>
        <h2>{rightAnswer ? `${currentArray[rightAnswerNumber - 1].name}` : '********'}</h2>
        <AudioPlayer
          className="audioPlayer"
          src={currentArray[rightAnswerNumber - 1].audio}
          showJumpControls={false}
        />
      </S.BirdTitlePlayer>
    </S.RandomBird>
  );
}

const mapStateToProps = state => ({
  rightAnswer: state.rightAnswer,
  rightAnswerNumber: state.rightAnswerNumber,
  currentArray: data[state.activePage]
})

export default connect(mapStateToProps, null)(Question)

