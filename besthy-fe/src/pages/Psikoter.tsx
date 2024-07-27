import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Psikoter() {
  const questions = [
    {
      questionText: "SAYA ADALAH ORANG YANG SUKA…..",
      answerOptions: [
        { answerText: "Populer", isCorrect: "a" },
        { answerText: "Produktif", isCorrect: "b" },
        { answerText: "Perfeksionis", isCorrect: "c" },
        { answerText: "Pendengar Yang Baik", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG …..",
      answerOptions: [
        { answerText: "Tidak konsisten", isCorrect: "a" },
        { answerText: "Suka Memaksa", isCorrect: "b" },
        { answerText: "Memiliki standar tinggi", isCorrect: "c" },
        { answerText: "Sulit memutuskan", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG …..",
      answerOptions: [
        { answerText: "Senang mendapat pujian", isCorrect: "a" },
        { answerText: "Pekerja Keras", isCorrect: "b" },
        { answerText: "Suka menarik diri dari keramaian", isCorrect: "c" },
        { answerText: "lambat dalam bereaksi", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG …..",
      answerOptions: [
        { answerText: "Usil dan iseng", isCorrect: "a" },
        { answerText: "Tidak sensitif", isCorrect: "b" },
        { answerText: "Tidak sensitif", isCorrect: "c" },
        { answerText: "malas/lambat", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Mudah bergaul", isCorrect: "a" },
        { answerText: "Dapat memutuskan", isCorrect: "b" },
        { answerText: "Menikmati kesendirian", isCorrect: "c" },
        { answerText: "Penurut", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Tidak disiplin", isCorrect: "a" },
        { answerText: "Konsekwen/tepat", isCorrect: "b" },
        { answerText: "Sopan/ terpelajar", isCorrect: "c" },
        { answerText: "Puas diri", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG SUKA …..",
      answerOptions: [
        { answerText: "Jahil", isCorrect: "a" },
        { answerText: "Suka melawan", isCorrect: "b" },
        { answerText: "Sulit menerima pujian", isCorrect: "c" },
        { answerText: "Menengahi masalah", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Penakut", isCorrect: "a" },
        { answerText: "Pemarah", isCorrect: "b" },
        { answerText: "Selalu curiga", isCorrect: "c" },
        { answerText: "Malas terlibat", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG SUKA…..",
      answerOptions: [
        { answerText: "Berlebih lebihan", isCorrect: "a" },
        { answerText: "Tekun/ ulet", isCorrect: "b" },
        { answerText: "Suka mencela", isCorrect: "c" },
        { answerText: "Melindungi diri sendiri", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG SUKA …..",
      answerOptions: [
        { answerText: "Melindungi diri sendiri", isCorrect: "a" },
        { answerText: "Mendengar music/ radio", isCorrect: "b" },
        { answerText: "berolahraga/bermain", isCorrect: "c" },
        { answerText: "Bersantai", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Tidak rapi/ kotor", isCorrect: "a" },
        { answerText: "Tidak kompromi", isCorrect: "b" },
        { answerText: "Mudah tersinggung", isCorrect: "c" },
        { answerText: "Sederhana", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG SUKA…..",
      answerOptions: [
        { answerText: "Suka bercanda/ bermain", isCorrect: "a" },
        { answerText: "Mampu memimpin", isCorrect: "b" },
        { answerText: "Sulit bergaul", isCorrect: "c" },
        { answerText: "Menerima kehidupan", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Sembrono/ kurang sopan", isCorrect: "a" },
        { answerText: "Agresif", isCorrect: "b" },
        { answerText: "Suka menyediri", isCorrect: "c" },
        { answerText: "Kebiasaan tertib", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Secara spontan cepat berbicara", isCorrect: "a" },
        {
          answerText: "Berkemauan keras, keras kepala/ ngotot",
          isCorrect: "b",
        },
        { answerText: "Serius/ sulit diajak bercanda", isCorrect: "c" },
        { answerText: "Pendiam dan lambat bicara", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Ceria", isCorrect: "a" },
        { answerText: "Suka memerintah", isCorrect: "b" },
        { answerText: "Detil dan urut", isCorrect: "c" },
        { answerText: "Suka berdamai", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG TIPENYA…..",
      answerOptions: [
        { answerText: "Lincah", isCorrect: "a" },
        { answerText: "Suka berdebat", isCorrect: "b" },
        { answerText: "Rela berkorban", isCorrect: "c" },
        { answerText: "Tunduk /takluk", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG SUKA…..",
      answerOptions: [
        { answerText: "Tampil didepan panggung", isCorrect: "a" },
        { answerText: "Cepat bertindak", isCorrect: "b" },
        { answerText: "Setia", isCorrect: "c" },
        { answerText: "Acuh tak acuh", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG …..",
      answerOptions: [
        { answerText: "Senang menghibur teman", isCorrect: "a" },
        { answerText: "Banyak akal/ ngakali", isCorrect: "b" },
        { answerText: "Kritis senang berfikir", isCorrect: "c" },
        { answerText: "Ramah", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Suka berubah ubah", isCorrect: "a" },
        { answerText: "Suka tantangan dan berani", isCorrect: "b" },
        { answerText: "Pandai dan berbakat", isCorrect: "c" },
        { answerText: "Ramah", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Senang dipuji", isCorrect: "a" },
        { answerText: "Percaya diri/ mandiri", isCorrect: "b" },
        { answerText: "Pendendam", isCorrect: "c" },
        { answerText: "Tidak tegas", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Pelupa", isCorrect: "a" },
        { answerText: "Tidak sabar", isCorrect: "b" },
        { answerText: "Teratur dan rapi", isCorrect: "c" },
        { answerText: "Penakut/ Kawatir", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Sering minta maaf", isCorrect: "a" },
        { answerText: "Terus terang/tegas", isCorrect: "b" },
        { answerText: "Teliti/cermat", isCorrect: "c" },
        { answerText: "Mudah menerima", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Expresif", isCorrect: "a" },
        { answerText: "Petualang", isCorrect: "b" },
        { answerText: "Rasional/logis", isCorrect: "c" },
        { answerText: "Mudah beradaptasi", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Santai/easy going", isCorrect: "a" },
        { answerText: "Kompetitif", isCorrect: "b" },
        { answerText: "Terencana dan teliti", isCorrect: "c" },
        { answerText: "Tenang dan toleran", isCorrect: "d" },
      ],
    },
    {
      questionText: "SAYA ADALAH ORANG YANG…..",
      answerOptions: [
        { answerText: "Mudah bergaul", isCorrect: "a" },
        { answerText: "Berkeyakinan kuat dan tegus", isCorrect: "b" },
        { answerText: "Rela berkorban", isCorrect: "c" },
        { answerText: "Penurut", isCorrect: "d" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [hasilPsikotes, setHasilPsikotes] = useState("");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const handleAnswerOptionClick = (isCorrect: string) => {
    switch (isCorrect) {
      case "a":
        setA(a + 1);
        break;
      case "b":
        setB(b + 1);
        break;
      case "c":
        setC(c + 1);
        break;
      case "d":
        setD(d + 1);
        break;
    }

    if (a > b && a > c && a > d) {
      setHasilPsikotes("SANGUIS");
    } else if (b > a && b > c && b > d) {
      setHasilPsikotes("KOLERIS");
    } else if (c > a && c > b && c > d) {
      setHasilPsikotes("MELANKOLIS");
    } else if (d > a && d > b && d > c) {
      setHasilPsikotes("PHLEGMATIS");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="">
      <div className="text-white text-center mt-5">
        <h1>
          <span className="font-bold text-2xl">SEBELUM MELANJUTKAN </span>
          <br /> Harap mengerjakan Psikotes terlebih dahulu
        </h1>
      </div>
      {showScore ? (
        <>
          <div className="bg-white m-5 p-3 rounded-md text-center">
            Kamu punya kepribadian
            <br />
            <span className="text-3xl font-bold ">{hasilPsikotes}</span>
          </div>
          <div className="w-full">
            <Link to="/dashboard" className="text-center w-full mx-5">
              <Button>Kembali</Button>
            </Link>
            <div className="p-3">
              <div className="bg-gray-50 p-2 rounded-xl h-[60vh] overflow-y-auto">
                <div>
                  <span className="font-bold">1. Type = SANGUIS </span>
                  Bersemangat dalam hidup, selalu ceria,hangat, bersahabat,
                  mudah menerima kesan dari luar, mengutamakan perasaan
                  ketimbang pikiran, tidak mau bersedih berlama lama, suka
                  bicara, mudah menularkan perasaan ke orang lain, bersuara
                  keras, ramah, tampak percaya diri dari sebenarnya
                </div>
                <div>
                  <span className="font-bold">2. Type = KOLERIS</span>{" "}
                  Berkemauan keras, aktif, praktis, cekatan, sangat independen,
                  tegas, berpendirian keras dalam mengambil keputusan, suka
                  beraktivitas, idenya tak pernah berakir,,
                  rancangan,sasaran,ambisi, tidak menyerah terhadap tekanan
                  orang lain, tapi tidak mudah bersimpati atau mengekpresikan
                  perasaan, tidak peka kebutuhan orang lain. Cenderung memiliki
                  jiwa kepemimpinan yang kuat
                </div>
                <div>
                  <span className="font-bold">3. Type = MELANKOLIS</span>{" "}
                  Berjiwa seni tinggi,analitis kuat, perfeksionis,
                  sensitif,berbakat,rela berkorban, cenderung introvet, jika
                  sudah dipuncak sukacita bisa jadi extrovet, menyalahkan diri
                  sendiri,rendah diri, sekali memilih sesuatu mereka akan setia
                  mengerjakannya
                </div>
                <div>
                  <span className="font-bold">4. Type = PHLEGMATIS </span>Sifat
                  alamiah pendamai, mudah bergaul, ramah menyenangkan. Bisa
                  membuat sekelompok orang tertawa terbahak bahak karena
                  humor-humor keringnya, tapi mereka tidak tertawa. Konsisten,
                  tenang dan jarang terpengaruh oleh lingkungan. Orang
                  phlegmatis cenderung menarik diri dari segala macam
                  keterlibatan
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white m-5 p-3 rounded-md">
          <div className="question-section ">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text  mt-2">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section flex flex-col text-white gap-5 mt-5">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  key={index}
                >
                  {answerOption.answerText}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
