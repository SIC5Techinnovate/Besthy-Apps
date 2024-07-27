// import { BubbleChat } from "flowise-embed-react";
import { Bot, Home, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const active = window.location.pathname;
  return (
    <div>
      <div className="w-full h-16 fixed bottom-0 bg-primary text-white flex items-center justify-around">
        <NavLink
          to={"/dashboard"}
          className={`items-center justify-center flex flex-col  ${
            active == "/dashboard" ? "text-white" : "text-gray-300"
          }`}
        >
          <Home />
          <p>Home</p>
        </NavLink>
        <NavLink
          to={"/user/profile"}
          className={`items-center justify-center flex flex-col ${
            active === "/user/profile" ? "text-white" : "text-gray-300"
          }`}
        >
          <User />
          <p>Profile</p>
        </NavLink>
        <NavLink
          to={"/chatbot"}
          className={`items-center justify-center flex flex-col ${
            active === "/chatbot" ? "text-white" : "text-gray-300"
          }`}
        >
          <Bot />
          <p>ChatBot</p>
        </NavLink>
        {/* <div className="relative">
          <BubbleChat
            chatflowid="a50759ea-9d7e-49fc-932e-3a0d144dc7d5"
            apiHost="http://103.247.12.9:3000"
            theme={{
              button: {
                backgroundColor: "#7c3aed",
                right: 20,
                bottom: 12,
                size: "medium",
                iconColor: "white",
                customIconSrc:
                  "https://cdn.icon-icons.com/icons2/3403/PNG/64/bot_icon_215703.png",
              },
              chatWindow: {
                welcomeMessage:
                  "Ada yang bisa Clara bantu? curhat sama Clara yuk!! ",
                backgroundColor: "#ffffff",
                height: 700,
                width: 400,
                fontSize: 16,
                poweredByTextColor: "#ffffff",
                botMessage: {
                  backgroundColor: "#f7f8ff",
                  textColor: "#303235",
                  showAvatar: false,
                  avatarSrc:
                    "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                },
                userMessage: {
                  backgroundColor: "#f8a2fb",
                  textColor: "#504e4e",
                  showAvatar: false,
                  avatarSrc:
                    "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                  placeholder: "Tuliskan Masalahmu",
                  backgroundColor: "#ffffff",
                  textColor: "#000000",
                  sendButtonColor: "#b402ba",
                },
              },
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default BottomNav;
