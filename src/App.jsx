import "./App.scss";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Snippet from "./components/Snippet/Snippet";

function App() {
  return (
    <div className="App">
      <div className="hero__container">
        <Navbar />
        <Hero />
      </div>
      <Snippet />
      <Footer />
    </div>
  );
}

export default App;
