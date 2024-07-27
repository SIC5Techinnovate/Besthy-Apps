import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Dino: React.FC = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [cacti, setCacti] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const cactusSpeedRef = useRef(10); // Setel kecepatan kaktus awal menjadi 10

  const handleJump = () => {
    if (isStarted && !isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 1000); // Durasi animasi lompatan
    }
  };

  const startGame = () => {
    setIsStarted(true);
    setIsGameOver(false);
    setCacti([]);
    setScore(0);
    cactusSpeedRef.current = 10; // Reset kecepatan kaktus ke nilai awal
  };

  // Menambahkan kaktus secara acak
  useEffect(() => {
    if (!isStarted) return;

    const spawnCactus = () => {
      const minDistance = 800; // Jarak minimum antara kaktus
      const maxDistance = 1200; // Jarak maksimum antara kaktus
      const randomDistance =
        Math.random() * (maxDistance - minDistance) + minDistance;
      setCacti((prevCacti) => [
        ...prevCacti,
        window.innerWidth + randomDistance,
      ]);
    };

    const interval = setInterval(
      spawnCactus,
      Math.random() * 2000 + 1000 // Menambahkan kaktus setiap 1-3 detik
    );

    return () => clearInterval(interval);
  }, [isStarted]);

  // Menggerakkan kaktus dan mengatur skor
  useEffect(() => {
    if (!isStarted) return;

    const interval = setInterval(() => {
      setCacti(
        (prevCacti) =>
          prevCacti
            .map((pos) => pos - cactusSpeedRef.current)
            .filter((pos) => pos > -20) // Hapus kaktus yang sudah keluar dari layar
      );
      setScore((prevScore) => prevScore + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [isStarted]);

  // Meningkatkan kecepatan kaktus setiap skor kelipatan 100
  useEffect(() => {
    if (score % 100 === 0 && score > 0) {
      cactusSpeedRef.current += 0.5; // Meningkatkan kecepatan kaktus secara bertahap
    }
  }, [score]);

  // Mengecek tabrakan
  useEffect(() => {
    if (!isStarted) return;

    const checkCollision = () => {
      if (cacti.some((pos) => pos < 150 && pos > 10 && !isJumping)) {
        setIsGameOver(true);
        setIsStarted(false);
      }
    };

    const interval = setInterval(checkCollision, 50);

    return () => clearInterval(interval);
  }, [cacti, isJumping, isStarted]);

  return (
    <div className="game" onClick={isGameOver ? startGame : handleJump}>
      {!isStarted ? (
        <div
          className="start-screen text-center font-bold text-2xl"
          onClick={startGame}
        >
          {isGameOver ? (
            <p className="">
              Game Over <br /> Click to Restart
            </p>
          ) : (
            "Click to Start"
          )}
        </div>
      ) : (
        <>
          <div className="score">Score: {score}</div>
          <DinoSprite isJumping={isJumping} />
          {cacti.map((pos, index) => (
            <Cactus key={index} position={pos} />
          ))}
        </>
      )}
      <Link
        to="/user/game-menu"
        className="absolute top-5 right-5 text-white font-bold"
      >
        Back
      </Link>
    </div>
  );
};

export default Dino;

interface DinoSpriteProps {
  isJumping: boolean;
}

const DinoSprite: React.FC<DinoSpriteProps> = ({ isJumping }) => {
  return <div className={`dino ${isJumping ? "jump" : ""}`}></div>;
};

interface CactusProps {
  position: number;
}

const Cactus: React.FC<CactusProps> = ({ position }) => {
  return (
    <div
      className="cactus"
      style={{ right: window.innerWidth - position }}
    ></div>
  );
};
