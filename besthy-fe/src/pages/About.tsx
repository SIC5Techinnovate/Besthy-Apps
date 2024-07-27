import MainLayout from "@/layouts/MainLayout";
import logo from "@/assets/img/logo.png";

const About = () => {
  return (
    <MainLayout>
      <div className="p-3">
        <h1 className="text-3xl font-bold mb-5">About Us</h1>
        <div className="h-[65vh] w-full bg-gray-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-3 flex flex-col items-center ">
          <img src={logo} alt="" className="w-2/5" />
          <h1 className="text-3xl font-bold">Besthy</h1>
          <p className="text-sm text-justify mt-2">
            Besthy adalah aplikasi yang membantu Anda mencari teman sehat,
            ketenangan, dan kebahagiaan melalui Musik. Dengan aplikasi ini, Anda
            dapat mencari teman yang memiliki minat serupa dan berkumpul-kumpul
            dalam Komunitas. Selain itu, aplikasi ini juga membantu Anda
            menjalani kebutuhan kesehatan dengan fitur deteksi bpm dan meditasi.
            Dengan menyediakan layanan yang nyaman dan aman, kami berharap dapat
            membantu Anda menjadi lebih baik dan lebih senang.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
