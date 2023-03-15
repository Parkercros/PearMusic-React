import React from "react";
import { useLocation } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";

function Header() {
  const location = useLocation();

  if (location.pathname === "/topAlbums" || location.pathname === "/newAlbums"
  || location.pathname === "/MyPlaylist"){
    return null;
  }

  return (
    <header className="banner">
      <h1>Albums</h1>
      <span className="logo" role="img"></span>
    </header>
  );
}

export default Header;
