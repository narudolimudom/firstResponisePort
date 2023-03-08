// import "./App.css";

import Carousel from "./components/Carousel";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// import Button from "./components/Button";

function App() {
  return (
    <div className="app flex h-screen flex-col items-center">
      <NavBar />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
