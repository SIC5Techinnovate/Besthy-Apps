import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getMe, LogOut, reset } from "@/hooks/authSlice";
import instance from "@/instance";
import MainLayout from "@/layouts/MainLayout";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [telp, setTelp] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, user, navigate]);

  const handleLogout = async () => {
    await dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const Lengkap = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const userId = localStorage.getItem("userId");
    await instance.patch(`/users/profile/${userId}`, {
      telp,
      jenisKelamin,
      birthdate,
    });
    setLoading(false);
    window.location.reload();
  };

  return (
    <MainLayout>
      <div className="font-bold px-2 py-2">
        <h1 className="ml-10 text-3xl">Profile</h1>
        <div className="flex flex-col items-center justify- h-[80vh] overflow-y-auto">
          <div className="h-full w-4/5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 relative mt-10 flex flex-col items-center justify-center px-5 py-5">
            <Avatar className="rounded-full w-20 h-20 absolute -top-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="self-start mt-10 w-full flex flex-col gap-2">
              <div>
                <p className="text-neutral-300">Nama Pengguna</p>
                <input
                  type="text"
                  disabled
                  value={user?.name || "-"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Email</p>
                <input
                  type="text"
                  disabled
                  value={user?.email || "-"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Nomor Telepon</p>
                <input
                  type="text"
                  disabled
                  value={user?.profile.telp || "-"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Jenis Kelamin</p>
                <input
                  type="text"
                  disabled
                  value={user?.profile.jenisKelamin || "-"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Tanggal Lahir</p>
                <input
                  type="text"
                  disabled
                  value={user?.profile.birthdate || "-"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Jenis Kodam</p>
                <input
                  type="text"
                  disabled
                  value={user?.profile.jenisKhodam || "-"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-4/5">
            <Dialog>
              <DialogTrigger className="bg-primary w-full py-2 rounded-md mt-2">
                Update Profile
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Lengkapi Profile</DialogTitle>
                  <div className="text-black">
                    <form className="flex flex-col gap-2">
                      <div>
                        <input
                          type="number"
                          className="w-full h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                          placeholder="Nomor Telepon"
                          value={telp}
                          onChange={(e) => setTelp(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <select
                          className="w-full h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                          required
                          onChange={(e) => setJenisKelamin(e.target.value)}
                        >
                          <option>Jenis Kelamin</option>
                          <option value="LAKI_LAKI">Laki-laki</option>
                          <option value="PEREMPUAN">Perempuan</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="date"
                          className=" w-full h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                          placeholder="Tanggal Lahir"
                          value={birthdate}
                          onChange={(e) => setBirthdate(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button type="submit" onClick={Lengkap}>
                    {loading ? "Loading..." : "Update"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button onClick={handleLogout} className=" w-full mt-2">
              Logout
            </Button>
            <Link to={"/about"} className="">
              <p className=" mt-3 mb-20 text-center font-light hover:underline">
                About us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
