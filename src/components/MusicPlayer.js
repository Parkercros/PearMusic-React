// MusicPlayer.js
import React, { useState, useRef } from 'react';

const audioSources = [  
  '/Audio/Marvin Gaye -Sexual Healing.mp3'
];

function MusicPlayer() {
  const containerStyle = {
    
    
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackTitle, setCurrentTrackTitle] = useState(audioSources[currentTrackIndex]);

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.src = audioSources[currentTrackIndex];
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    const audio = audioRef.current;
  
 
    if (currentTrackIndex < audioSources.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      audio.src = audioSources[currentTrackIndex + 1];
      setCurrentTrackTitle(audioSources[currentTrackIndex + 1]);
      audio.play();
    } else {
   
      audio.pause();
      audio.currentTime = 0;
      setCurrentTrackIndex(0);
      setCurrentTrackTitle(audioSources[0]);
      audio.src = audioSources[0];
      audio.play();
    }
  };

  return (
    <div style={containerStyle}>
      <audio ref={audioRef} onEnded={handleEnded} />
      <button onClick={handlePlayPause}>
        {isPlaying ? '⏸️' : '▶'}
      </button>
    </div>
  );
}

export default MusicPlayer;
