import React, { useState } from "react";

function NewMusicForm() {
  const [albumName, setAlbumName] = useState("");
  const [albumImage, setAlbumImage] = useState("");
  const [year, setYear] = useState(0);
  const [artist, setArtist] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newAlbum = {
      albumTitle: albumName,
      albumImage: albumImage,
      year: year,
      artist: artist
    };
    fetch("https://website-data.onrender.com/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAlbum)
    })
      .then(response => response.json())
      .then(data => {
        setAlbumName("");
        setAlbumImage("");
        setYear("");
        setArtist("");
      });
  }

  return (
    <div className="new-music-form">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          name="albumName"
          placeholder="Album name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <input
          type="text"
          name="albumImage"
          placeholder="Album Image URL"
          value={albumImage}
          onChange={(e) => setAlbumImage(e.target.value)}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <button type="submit">Add Album</button>
      </form>
    </div>
  );
}

export default NewMusicForm;
