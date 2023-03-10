import React from "react";
import MusicCards from "./MusicCard";
import { Link } from "react-router-dom";

function MyPlaylist({ MyPlaylist }) {
  console.log(MyPlaylist)
  return (
    <div>
      <h1></h1>
      {MyPlaylist.length > 0 ? (
        <ul className="my-playlist-cards">
          {MyPlaylist.map((album) => (
            <MusicCards key={album.id} Album={album} />
          ))}
        </ul>
      ) : (
        <p></p>
      )}
      
    </div>
  );
}
//ok


export default MyPlaylist;