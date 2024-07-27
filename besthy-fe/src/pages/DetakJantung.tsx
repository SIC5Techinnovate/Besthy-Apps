import instance from "@/instance";
import MainLayout from "@/layouts/MainLayout";
import { HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";

interface DetakJantungData {
  detak: number;
  createdAt: Date; // We'll parse this as a Date object in useEffect
}

const DetakJantung = () => {
  const [detakJantung, setDetakJantung] = useState<DetakJantungData[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getDetakJantung();
    }, 5000); // Adjusted to 5 seconds for better performance and UX
    return () => clearInterval(interval);
  }, []);

  const getDetakJantung = async () => {
    const userId = localStorage.getItem("userId");
    const response = await instance.get(`/detak/${userId}`);
    const data = response.data.map((item: DetakJantungData) => ({
      ...item,
      createdAt: new Date(item.createdAt), // Parse createdAt to Date object
    }));
    setDetakJantung(data);
  };

  return (
    <MainLayout>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-white mb-10">
          Monitor <br /> Detak Jantung
        </h1>
        <div className="h-full w-full text-black bg-gray-100 rounded-xl border border-gray-100 py-3 px-5 text-left text-sm flex flex-col items-center">
          <div className="flex items-center flex-col">
            <h1 className="text-3xl font-bold">Heart Rate</h1>
            <HeartPulse size={100} className="text-red-500" />
            <p className="text-xl font-bold">
              {detakJantung.length > 0
                ? `${detakJantung[0].detak} BPM`
                : "No data"}
            </p>
          </div>
          <div>
            Detak Jantung Anda{" "}
            {detakJantung.length > 0 && detakJantung[0].detak > 130 ? (
              <span className="text-red-500 font-bold">Not normal</span>
            ) : (
              <span className="text-green-500 font-bold">Normal</span>
            )}
          </div>
          <div className="w-full">
            <h1 className="text-xl font-bold my-4">Riwayat Detak Jantung</h1>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Jam</th>
                  <th>BPM</th>
                </tr>
              </thead>
              <tbody>
                {detakJantung.slice(0, 5).map((detak, index) => (
                  <tr key={index}>
                    <td>{detak.createdAt.toLocaleDateString()}</td>
                    <td>{detak.createdAt.toLocaleTimeString()}</td>
                    <td>{detak.detak} BPM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetakJantung;
