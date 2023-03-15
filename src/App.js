import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MusicPage from "./components/MusicPage";
import Header from "./components/Header";
import MyPlaylist from "./components/MyPlaylist";
import TopAlbums from "./components/TopAlbums";
import NewMusicForm from "./components/NewMusicForm";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  function handleAddNewAlbum(album) {
    setNewAlbums([...newAlbums, album]);
  }

  return (
    <div className="app-container">
      
      <Header />
      <div className="d-flex">
        <div className="sidebar">
          <div className="top-section">
            <img src="./Logo.png" alt="Logo" />
          </div>
          <div id="navbar" className="btn-group btn-group-vertical">
            <button
              className="btn btn-active"
              onClick={() => (window.location.href = "/")}
            >
              <img
                src="/musiclogo.png"
                alt="Music Logo"
                width="12"
                height="12"
              />
              Albums
            </button>
            <button
              className="btn"
              onClick={() => (window.location.href = "/topAlbums")}
            >
              <img
                src="./albumslogo.png"
                alt="Top Albums"
                width="15"
                height="15"
              />{" "}
              Top Albums
            </button>
            <button
              className="btn"
              onClick={() => (window.location.href = "/MyPlaylist")}
            >
              <img
                src="./playlistlogo.png"
                alt="My Playlist"
                width="12"
                height="12"
              />{" "}
              My Playlist
            </button>
            <button
              className="btn"
              onClick={() => (window.location.href = "/newAlbums")}
            >
              <img
                src="./newalbumimage.png"
                alt="Add New Album"
                width="12"
                height="12"
              />{" "}
              Add New Album
            </button>
          </div>
        </div>
        <div className="main-content">
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <MusicPage
                      newAlbums={newAlbums}
                      setMyPlaylist={setMyPlaylist}
                      MyPlaylist={myPlaylist}
                    />
                  </>
                )}
              />
              <Route exact path="/topAlbums" render={() => <TopAlbums />} />
              <Route
                exact
                path="/MyPlaylist"
                render={() => (
                  <MyPlaylist
                    MyPlaylist={myPlaylist}
                    setMyPlaylist={setMyPlaylist}
                  />
                )}
              />
              <Route
                exact
                path="/newAlbums"
                render={() => (
                  <NewMusicForm handleAddNewAlbum={handleAddNewAlbum} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
