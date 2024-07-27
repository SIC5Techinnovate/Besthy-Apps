import { Button } from "@/components/ui/button";
import instance from "@/instance";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (userId) {
      navigate("/dashboard");
    }
  });
  const Auth = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await instance.post("/users", {
      name,
      email,
      password,
      confPassword,
    });
    navigate("/");
    setLoading(false);
  };
  return (
    <>
      <div className="flex flex-col w-full  h-screen items-center justify-center text-white">
        <div>
          <h1 className="text-3xl font-bold mb-3">Daftar</h1>
        </div>
        <div className="text-black">
          <form onSubmit={Auth} className="flex flex-col gap-2">
            <div>
              <input
                type="text"
                className="w-60 h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="w-60 h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-60 h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-60 h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                placeholder="Ulangi Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
            <div>
              <Button type="submit" className="w-full my-2 shadow-md">
                {loading ? "Loading..." : "Daftar"}
              </Button>
            </div>
            <div>
              <p className="text-white text-sm text-center font-light">
                Sudah punya akun?{" "}
                <Link to="/" className="hover:underline font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Register;
