import "./App.scss";
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
    </div>
  );
}

export default App;
