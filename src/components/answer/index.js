import React from 'react';
import { connect } from 'react-redux';
import BirdsItem from '../birdsItem';
import BirdDetails from '../birdDetails';
import * as S from './styled';
import data from '../../data/birdsData';

const Answer = ({currentArray, userAnswer}) => {

  return (
    <S.Container>
      <S.BirdsListGroup>
        <S.BirdsList >
          {currentArray.map(data => {
            return (
              <BirdsItem
                key={data.name}
                data={data.name}
                id={data.id}
              />
            )
          })}
        </S.BirdsList>
      </S.BirdsListGroup>
      <S.BirdDetailsGroup>
        {userAnswer !== null ?
          <BirdDetails 
            birdImage={currentArray[userAnswer-1].image}
            birdName={currentArray[userAnswer-1].name}
            birdSpecies={currentArray[userAnswer-1].species}
            birdAudio={currentArray[userAnswer-1].audio}
            birdDescription={currentArray[userAnswer-1].description}
          />
          : <p>Послушайте плеер и выберите птицу из списка</p>}
      </S.BirdDetailsGroup>
    </S.Container>
  );
}

const mapStateToProps = state => ({
  currentArray: data[state.activePage],
  userAnswer: state.userAnswer
})

export default connect(mapStateToProps, null)(Answer)