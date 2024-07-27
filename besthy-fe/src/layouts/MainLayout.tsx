import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <ResponsiveWrapper>
        <Navbar />
        <div className="mt-12 text-white ">{children}</div>
        <BottomNav />
      </ResponsiveWrapper>
    </>
  );
};

export default MainLayout;
