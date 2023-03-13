import React, { useEffect, useState } from "react";
import MusicCards from "./MusicCard";

function TopAlbums({ limit }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://website-data.onrender.com/albums")
      .then((r) => r.json())
      .then((albums) => {
        albums.sort(() => Math.random() - 0.5);
        const topAlbums = albums.slice(0, limit = 12);
        setAlbums(topAlbums);
      });
  }, [limit]);

  return (
    <div>
      <h1 className="top-albums-title">Todays Top Albums</h1>
      <ul className="album-cards" style={{ display: "flex", flexWrap: "wrap", padding: 0 }}>
        {albums.map((album) => (
          <MusicCards
            key={album.id}
            Album={album}
            showLikeButton={false}
          />
        ))}
      </ul>
    </div>
  );
}

export default TopAlbums;
