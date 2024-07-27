import MainLayout from "@/layouts/MainLayout";
import person from "@/assets/img/home.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PraPsikotes = () => {
  return (
    <MainLayout>
      <div className="px-5">
        <div className="realtive w-full  ">
          <img src={person} alt="" className="w-[20vh] -mx-2" />
          <p className="text- sm:xl font-bold text-black bg-slate-100 p-2 absolute top-20 right-5 z-10 w-3/5 rounded-md">
            Silahkan mengerjakan Psikotes, kerjakan dengan baik ya :)
          </p>
        </div>
        <div className="h-[50vh] overflow-y-auto  w-full  text-black bg-gray-100 rounded-xl border border-gray-100 p-5 px-10 text-left text-sm">
          <h1 className="text-2xl font-bold mb-2 text-center">Pra Psikotes</h1>
          <p>
            Jadilah diri Anda sepenuhnya dan beri jawaban sejujurnya untuk
            mengetahui tipe kepribadian Anda. Pelajari cara tipe kepribadian
            Anda memengaruhi banyak aspek dalam hidup Anda.
          </p>
          <p className="text-lg text-left font-bold mt-2">Rules Mengerjakan</p>
          <ul className="list-decimal text-left">
            <li>
              Tenang guys tidak ada jawaban yang benar atau salah. Isilah dengan
              jujur sesuai kepribadianmu.
            </li>
            <li>Santai aja, tes ini gak diberi waktu, kok.</li>
            <li>
              Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.
            </li>
            <li>
              Jika kamu keluar di tengah tes, maka seluruh proses tes dan
              jawaban akan hilang.
            </li>
            <li>
              Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan
              dengan lengkap.
            </li>
          </ul>
        </div>
        <Link to={"/user/psikotes"}>
          <Button className="mt-5 w-full bg-red-500">MULAI MENGERJAKAN</Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default PraPsikotes;
