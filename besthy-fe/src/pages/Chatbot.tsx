import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <div>
      <iframe
        src="http://103.247.12.9:3000/chatbot/a50759ea-9d7e-49fc-932e-3a0d144dc7d5"
        frameBorder="0"
        className="w-full h-screen"
      ></iframe>
      <Link
        to="/dashboard"
        className="absolute top-3 left-3  text-white  text-lg   font-medium"
      >
        Kembali
      </Link>
    </div>
  );
};

export default Chatbot;
