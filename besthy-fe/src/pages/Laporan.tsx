import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";

const Laporan = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <MainLayout>
      <div className="px-10 ">
        <h1 className="text-2xl font-bold pt-2">Form Laporan</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 relative mt-10 flex flex-col items-center justify-center px-5 py-5">
              <div className="self-start  w-full flex flex-col gap-2">
                <div>
                  <p className="text-neutral-300 text-xs">
                    Apa Yang Sedang Terjadi?
                  </p>
                  <input
                    type="text"
                    className="font-normal bg-transparent border-b w-full"
                  />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs">Lokasi Kejadian</p>
                  <input
                    type="text"
                    className="font-normal bg-transparent border-b w-full"
                  />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs">Kapan Itu Terjadi?</p>
                  <input
                    type="text"
                    className="font-normal bg-transparent border-b w-full"
                  />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs">Siapa Pelakunya?</p>
                  <input
                    type="text"
                    className="font-normal bg-transparent border-b w-full"
                  />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs">Siapa Korbanya?</p>
                  <input
                    type="text"
                    className="font-normal bg-transparent border-b w-full"
                  />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs">Apa Penyebabnya?</p>
                  <input
                    type="text"
                    className="font-normal bg-transparent border-b w-full"
                  />
                </div>
                <div>
                  <Button className="w-full mt-2 shadow-md">Kirim!</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Laporan;
