import React, { useRef, useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import laguPertama from "@/assets/music/bethovenn.mp3";
import laguDua from "@/assets/music/moonlightReprise.mp3";
import laguTiga from "@/assets/music/divider.mp3";
import { Button } from "@/components/ui/button";
import {
  AudioLines,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";

// Helper function to format time in MM:SS
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${formattedMinutes}:${formattedSeconds}`;
};

const Music: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const allMusics = [
    {
      id: 1,
      name: "Bethoven",
      genre: "Klasik",
      url: laguPertama,
    },
    {
      id: 2,
      name: "Moonlight Reprise",
      genre: "Ambient",
      url: laguDua,
    },
    {
      id: 3,
      name: "Divider",
      genre: "New Age",
      url: laguTiga,
    },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = allMusics[currentTrackIndex].url;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      updateSliderBackground(
        audioRef.current.currentTime,
        audioRef.current.duration
      );
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => {
      let nextIndex;
      if (isShuffle) {
        do {
          nextIndex = Math.floor(Math.random() * allMusics.length);
        } while (nextIndex === prevIndex);
      } else {
        nextIndex = (prevIndex + 1) % allMusics.length;
      }
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + allMusics.length) % allMusics.length
    );
  };

  const handleMusicClick = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true); // Automatically play the selected track
  };

  const handleTrackEnd = () => {
    if (isRepeat && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNext();
    }
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setCurrentTime(Number(e.target.value));
      updateSliderBackground(Number(e.target.value), audioRef.current.duration);
    }
  };

  const updateSliderBackground = (current: number, duration: number) => {
    const percentage = (current / duration) * 100;
    const slider = document.querySelector(
      'input[type="range"]'
    ) as HTMLInputElement;
    if (slider) {
      slider.style.setProperty("--slider-progress", `${percentage}%`);
    }
  };

  return (
    <MainLayout>
      <div className="p-3 px-10">
        <audio
          ref={audioRef}
          src={allMusics[currentTrackIndex].url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleTrackEnd}
        />
        <div className="flex items-center flex-col-reverse">
          <div className="flex items-center justify-between mt-1 w-full">
            <Button
              onClick={toggleShuffle}
              className={`bg-transparent ${isShuffle ? "text-blue-600" : ""}`}
            >
              <Shuffle />
            </Button>
            <div className="flex items-center gap-2">
              <Button
                onClick={handlePrev}
                className="rounded-md bg-transparent"
              >
                <SkipBack />
              </Button>
              <Button
                onClick={togglePlayPause}
                className="rounded-full p-1 w-20 h-20"
              >
                {isPlaying ? <Pause size={35} /> : <Play size={35} />}
              </Button>
              <Button
                onClick={handleNext}
                className="rounded-md bg-transparent"
              >
                <SkipForward />
              </Button>
            </div>
            <Button
              onClick={toggleRepeat}
              className={`bg-transparent ${isRepeat ? "text-blue-600" : ""}`}
            >
              <Repeat />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={handleSliderChange}
            className="w-full bg-primary mb-3"
          />
          <div className="my-5">
            <h1 className="text-3xl font-bold text-center">
              {allMusics[currentTrackIndex].name}
            </h1>
            <p className="text-center text-sm text-gray-300">
              Genre Musik - {allMusics[currentTrackIndex].genre}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 w-full p-3 mb-5 text-primary rounded-md mt-5">
          <h1 className="text-3xl font-bold mb-2">Playlist</h1>
          <ul className="list-decimal ">
            {allMusics.map((music, index) => (
              <li
                key={music.id}
                className={`mb-2 underline underline-offset-2 font-semibold text-md cursor-pointer flex justify-between ${
                  index === currentTrackIndex ? "text-blue-600" : ""
                }`}
                onClick={() => handleMusicClick(index)}
              >
                <p>{music.name}</p>
                {index === currentTrackIndex && <AudioLines />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Music;
