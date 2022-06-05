import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiPlay, FiSkipForward, FiSkipBack, FiPause, FiYoutube } from "react-icons/fi";


const BigButton = styled.button`
    height: 5em;
    width: 5em;
    border-radius: 150px;
    background: #282f38;
    box-shadow: 7px 7px 14px #20262d, -7px -7px 14px #303843;
    border: none;
    cursor: pointer;

    &:hover{
        box-shadow: inset 7px 7px 14px #20262d, inset -7px -7px 14px #303843;
    }
`;

const LittleButton = styled.button`
    height: 3em;
    width: 3em;
    border-radius: 150px;
    background: #282f38;
    box-shadow: 7px 7px 14px #20262d, -7px -7px 14px #303843;
    border: none;
    cursor: pointer;

    &:hover{
        box-shadow: inset 7px 7px 14px #20262d, inset -7px -7px 14px #303843;
    }
`;

const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2em;
`;

const Title = styled.h3`
  margin: 0;
  margin-top: 2em;
`;

const Artist = styled.p`
  font-size: 0.9em;
  margin: 0;
  margin-top: 1em;
`;

const Informations = styled.div`
  height: 17em;
  margin-right: 1em;
  margin-left: 1em;
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Cover = styled.img`
  margin-left: auto;
  margin-right: auto;
  border-radius: 27px;
  height: 10em;
  width: 10em;
  box-shadow: 33px 33px 66px #20252c, -33px -33px 66px #303944;
`;

const Youtube = styled.a`
  font-size: 0.9em;
  margin: 0;
  margin-top: 1em;
  cursor: pointer;
  color: red;
`;

const Controllers = ({ playlist }) => {

  const [nowPlaying, setNowPlaying] = useState(playlist[0])
  const [play, setPlay] = useState(true)
  const [audio, setAudio] = useState(new Audio(nowPlaying.mp3))

  // --------------------------------------------------------------
  // -------------------------- EVENT -----------------------------
  // --------------------------------------------------------------

  // Pour remettre le bouton play lorsque la chanson est terminée
  useEffect(() => {
    // Je set le timeout sur 32 secondes car chaque piste ne contient que 30 secondes de la chanson
    // mais peut etre remplacé par une variable de durée contenue dans chacun des objets de chanson
    setTimeout(() => {
      if (!play) {
        setPlay(true)
      }
    }, "32000")
  }, [play === false])

  const skipBack = () => {
    for (let i = 0; i < playlist.length; i++) {
      if (nowPlaying.id === playlist[i].id) {
        if (i - 1 >= 0) {
          const np = playlist[i - 1]
          setNowPlaying(np)
          setPlay(true)
          audio.pause()
          setAudio(new Audio(np.mp3))
        }
      }
    }
  }

  const skipForward = () => {
    for (let i = 0; i < playlist.length; i++) {
      if (nowPlaying.id === playlist[i].id ) {
        if (i + 1 <= playlist.length - 1) {
          const np = playlist[i + 1]
          setNowPlaying(np)
          setPlay(true)
          audio.pause()
          setAudio(new Audio(np.mp3))
        }
      }
    }
  }

  const handlePlayPause = () => {
    
    if (play) {
      audio.play()
    } else {
      audio.pause()
    }

    setPlay(prev => !prev)
  }

  return (
    <>
      <Informations>
      <Cover src={nowPlaying.cover} />
        <Title>{nowPlaying.title}</Title>
        <Artist>{nowPlaying.artist}</Artist>
        <Youtube href={nowPlaying.youtube} target="_blank"><FiYoutube style={{transform: 'scale(1.5)'}}/></Youtube>
      </Informations>
      <ButtonsGroup>
        <LittleButton>
          <FiSkipBack onClick={skipBack} style={{color: '#979fa8', transform: 'scale(1.4)', marginTop: '2px'}}/>
        </LittleButton>
        <BigButton>
          { play ? <FiPlay onClick={handlePlayPause} style={{color: '#979fa8', transform: 'scale(2)', marginTop: '5px', marginLeft: '5px'}}/> :
          <FiPause onClick={handlePlayPause} style={{color: '#979fa8', transform: 'scale(2)', marginTop: '5px', marginLeft: '2px'}}/>}
        </BigButton>
        <LittleButton>
          <FiSkipForward onClick={skipForward} style={{color: '#979fa8', transform: 'scale(1.4)', marginTop: '2px'}}/>
        </LittleButton>
      </ButtonsGroup>
    </>
  );
};

export default Controllers;
