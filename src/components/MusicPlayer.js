// MusicPlayer.js
import React, { useState, useRef } from 'react';

const audioSources = [  
  {
  src: '/Audio/1.mp3',
  title: 'Sexual Healing',
  artist: 'Marvin Gaye',
  },
  {
  src: '/Audio/2.mp3',
  title: 'Fly Away',
  artist: 'Lenny Kravitz',
  }
];

function MusicPlayer() {
  const containerStyle = {
    
    
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackTitle, setCurrentTrackTitle] = useState(
    `${audioSources[currentTrackIndex].title} - ${audioSources[currentTrackIndex].artist}`
  );

  const handlePlayPause = () => {
    const audio = audioRef.current;
  
    if (!isPlaying) {
      audio.src = audioSources[currentTrackIndex].src;
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
      setCurrentTrackTitle(
        `${audioSources[currentTrackIndex + 1].title} - ${audioSources[currentTrackIndex + 1].artist}`
      );
      audio.src = audioSources[currentTrackIndex + 1].src;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTrackIndex(0);
      setCurrentTrackTitle(
        `${audioSources[0].title} - ${audioSources[0].artist}`
      );
      audio.src = audioSources[0].src;
      audio.play();
    }
  };
  
  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % audioSources.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTrackTitle(
      `${audioSources[nextIndex].title} - ${audioSources[nextIndex].artist}`
    );
    const audio = audioRef.current;
    audio.src = audioSources[nextIndex].src;
    if (isPlaying) {
      audio.play();
    }
  };
  
  const handlePreviousTrack = () => {
    const prevIndex =
      (currentTrackIndex - 1 + audioSources.length) % audioSources.length;
    setCurrentTrackIndex(prevIndex);
    setCurrentTrackTitle(
      `${audioSources[prevIndex].title} - ${audioSources[prevIndex].artist}`
    );
    const audio = audioRef.current;
    audio.src = audioSources[prevIndex].src;
    if (isPlaying) {
      audio.play();
    }
  };
  
  return (
    <div className="music-player">
      <audio ref={audioRef} onEnded={handleEnded} />
      <div className="track-title">{currentTrackTitle}</div>
      <button className="previous-button" onClick={handlePreviousTrack}>
        ⏮
      </button>
      <button className="play-pause-button" onClick={handlePlayPause}>
        {isPlaying ? '⏸️' : '▶'}
      </button>
      <button className="next-button" onClick={handleNextTrack}>
        ⏭
      </button>
    </div>
  );
  
}

export default MusicPlayer;
