import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MusicCards.css"; // Import CSS file

function MusicCards({ Album, MyPlaylist = [], setMyPlaylist }) {
  const { albumTitle, year, albumImage, artist, tracks } = Album;
  const [liked, setLiked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleLike() {
    setLiked(true);
    setMyPlaylist([...MyPlaylist, Album]);
  }

  function handleClick() {
    setShowDropdown((prevState) => !prevState);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (showDropdown && !event.target.closest(".dropdown")) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <li style={{ listStyleType: "none" }} className="card">
      <div className="card__body">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={albumImage} alt={albumTitle} />
          {!liked && (
            <div
              className="dropdown"
              style={{
                position: "absolute",
                bottom: "13%",
                right: "13%",
                transform: "translate(50%, 50%)",
              }}
            >
              <button
                className="like-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
              >
                ...
              </button>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={handleLike}>Add To Playlist</button>
                  </li>
                  <li>
                  <button >Delete</button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
        <h4 className="card__title" style={{ textAlign: "center" }}>
          {albumTitle}
        </h4>
        <h5 className="card__artist" style={{ textAlign: "center" }}>
          {artist}
        </h5>
      </div>
    </li>
  );
}

export default MusicCards;
