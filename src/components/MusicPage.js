import React, { useEffect, useState } from "react";
import MusicCards from "./MusicCard";
import NewMusicForm from "./NewMusicForm";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";

function MusicPage({ MyPlaylist, setMyPlaylist }) {
  const [music, setmusic] = useState([]);
  const [search, setsearch] = useState("");
  const [activeButton, setActiveButton] = useState("Albums");
  let history = useHistory();

  useEffect(() => {
    fetch("https://website-data.onrender.com/albums")
      .then((r) => r.json())
      .then((music) => setmusic(music));
  }, []);

  const filteredmusic = music.filter((music) => {
    return (
      music.albumTitle.toLowerCase().includes(search.toLowerCase()) ||
      music.artist.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main>
      <div className="sidebar">
        <div className="top-section">
          <img src="./Logo.png" alt="Logo" />
        </div>
        <Search search={search} setsearch={setsearch} />
        <div id="navbar" className="btn-group btn-group-vertical">
          <button
            className={`btn ${activeButton === "Albums" ? "btn-active" : ""}`}
            onClick={() => {
              setActiveButton("Albums");
              window.location.href = "/";
            }}
          >
            <img src="/musiclogo.png" alt="Music Logo" width="12" height="12" />
            Albums
          </button>
          <button
            className={`btn ${activeButton === "TopAlbums" ? "btn-active" : ""}`}
            onClick={() => {
              setActiveButton("TopAlbums");
              window.location.href = "/topAlbums";
            }}
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
            className={`btn ${activeButton === "MyPlaylist" ? "btn-active" : ""}`}
            onClick={() => {
              setActiveButton("MyPlaylist");
              history.push("/MyPlaylist");
            }}
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
            className={`btn ${
              activeButton === "AddNewAlbum" ? "btn-active" : ""
            }`}
            onClick={() => {
              setActiveButton("AddNewAlbum");
              window.location.href = "/newAlbums";
            }}
          >
            <img
              src="./newalbumimage.png"
              alt="Add New Album"
              width="12"
              height="12"
            />{" "}
            Add New Album
          </button>
          <MusicPlayer /> {/* Add MusicPlayer component here */}
          <button className="btn btn-square loading"></button>
        </div>
      </div>
      <div className="main-content">
        <h2 className="fixed-header">Albums</h2>
        <div className="ui link cards">
          {filteredmusic.map((music) => (
            <MusicCards
              key={music.id}
              Album={music}
              MyPlaylist={MyPlaylist}
              setMyPlaylist={setMyPlaylist}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MusicPage;
