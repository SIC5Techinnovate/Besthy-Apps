import { Disc3 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full flex h-12 fixed top-0 bg-primary text-white">
      <div className="flex items-center justify-between w-full h-full px-5">
        <div></div>
        <Link to={"/user/musik"}>
          <Disc3 />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
