import styled from "styled-components";
import Controllers from "./Components/Controllers";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiOutlineHeart } from 'react-icons/ai';
import data from './services/data'


const Player = styled.div`
  background: #282f38;
  width: 20em;
  height: 28em;
  box-shadow: 33px 33px 66px #20252c, -33px -33px 66px #303944;
  border-radius: 50px;
`;

const Git = styled.div`
  text-align: center;
  color: #455870;
  margin-top: 1em;
`;

const SocialLink = styled.a`
  cursor: pointer;
  color: #455870;

  &:hover{
    color: #2d4766;
  }
`;

function App() {

  const [playlist, setPlaylist] = useState([{}])

  useEffect(() => {
    setPlaylist(data)
  }, [])

  return (
    <>
    <Player>
      { playlist.length > 1 ? <Controllers playlist={playlist}/> : <Loader/>}
    </Player>
      <Git>
        <p style={{ fontSize: "0.7em" }}>made with <AiOutlineHeart style={{ color: "red"}}/> by Emile Nascivet :) </p>
        <SocialLink href="https://github.com/emilenasc" target="_blank"><AiOutlineGithub/></SocialLink>
        <SocialLink href="https://www.linkedin.com/in/emile-nascivet/" target="_blank"><AiOutlineLinkedin/></SocialLink>
        <SocialLink href="https://twitter.com/Pok3mile" target="_blank"><AiOutlineTwitter/></SocialLink>
        <SocialLink href="https://www.instagram.com/emilenascivet/" target="_blank"><AiOutlineInstagram/></SocialLink>
      </Git>
    </>
  );
}

export default App;
