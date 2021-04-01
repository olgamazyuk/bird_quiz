import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import * as S from './styled';

const BirdDetails = ({birdImage, birdName, birdSpecies, birdAudio, birdDescription}) => {

  return (
    <>
      <S.Container>
        <S.BirdImage 
          src={birdImage} 
        />
        <S.ListGroup>
          <S.ListGroupItem>
            <h3>{birdName}</h3>
          </S.ListGroupItem>
          <S.ListGroupItem>
            <p>{birdSpecies}</p>
          </S.ListGroupItem>
          <S.ListGroupItem>
            <AudioPlayer 
              className="audioPlayer"
              src={birdAudio}
            />
          </S.ListGroupItem>
        </S.ListGroup>
      </S.Container>
      <br />
      <S.BirdDescription>
        {birdDescription}
      </S.BirdDescription>
    </>
  )
}

export default BirdDetails
