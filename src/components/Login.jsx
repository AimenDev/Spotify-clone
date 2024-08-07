import React from "react";
import Styled from "styled-components";

export default function Login() {
  const handleClick = () => {
    const clientId = "ead9cd13252041bfb25289804904eafd";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png"
        alt="spotify logo"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #1db954;
gap: 5rem;
img{
height: 20vh;
}
button{
  background-color: black;
  padding: 1rem 5rem;
  border-radius:5rem;
  border:none;
  color: #49f585;
  font-size:1.4rem;
  cursor:pointer;
}
`;
