import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const GameMenu = () => {
  return (
    <MainLayout>
      <div className="p-3">
        <div className="bg-white w-full h-[60vh] rounded-md p-3">
          <Link to={"/game/dino"}>
            <button className="w-full h-14 shadow-md justify-start gap-2 text-xl text-black font-bold border-4 border-black rounded-md">
              Dino Version Kotak
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default GameMenu;
