import { BodyControls, Guitar, NeckControls } from "../common";

const Main = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-zinc-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Body Controls
            </h3>
            <BodyControls />
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-zinc-900 rounded-lg p-6 shadow-lg h-[600px] flex items-center justify-center">
            <div className="w-full max-w-[500px] mx-auto">
              <Guitar />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-zinc-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Neck Controls
            </h3>
            <NeckControls />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
