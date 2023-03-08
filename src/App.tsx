// import "./App.css";

import Carousel from "./components/Carousel";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// import Button from "./components/Button";

function App() {
  return (
    <div className="app flex h-screen flex-col items-center mobile:bg-blue-500 tablet:bg-green-500  laptop:bg-gray-500 desktop:bg-lightCream">
      <NavBar />
      <Contents />
      {/* <Carousel /> */}
      <Footer />
    </div>
  );
}

export default App;
