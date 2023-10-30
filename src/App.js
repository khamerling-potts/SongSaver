import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { CLIENT_SECRET, CLIENT_ID } from "./config";
import { Outlet } from "react-router-dom";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [savedSongs, setSavedSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((data) => console.log(data));
  });

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    })
      .then((r) => r.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  if (accessToken) {
    fetch(
      "https://api.spotify.com/v1/search?q=see+you+again&type=track&limit=6",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((r) => r.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
