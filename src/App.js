import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { CLIENT_SECRET, CLIENT_ID } from "./config";

function App() {
  const [accessToken, setAccessToken] = useState("");

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
