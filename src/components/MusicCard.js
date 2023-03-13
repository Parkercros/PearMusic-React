import React, { useState } from "react";
import { Link } from "react-router-dom";

function MusicCards({ Album, MyPlaylist = [], setMyPlaylist }) {
  const { albumTitle, year, albumImage, artist, tracks } = Album;
  const [liked, setLiked] = useState(false);

  function handleLike() {
    console.log(handleLike)
    setLiked(true);
    setMyPlaylist([...MyPlaylist, Album]);
  }

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
            <button
              className="LikedButton"
              onClick={handleLike}
              style={{
                position: "absolute",
                bottom: "13%",
                right: "19%",
                transform: "translate(50%, 50%)",
              }}
            >
              ...
            </button>
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
//ok

export default MusicCards;
