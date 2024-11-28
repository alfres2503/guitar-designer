import { Navbar, Main, Footer } from "./components/layout";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
