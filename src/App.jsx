import MainRoutes from "./AllRoutes/MainRoutes";
import LargeWithAppLinksAndSocial from "./Components/Footer";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">

      {/* <MainRoutes /> */}
      {/* <LargeWithAppLinksAndSocial /> */}

      <Navbar />
      <MainRoutes />
      <Footer />

    </div>
  );
}

export default App;
