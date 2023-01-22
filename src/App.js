import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
//import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;

export const nav = () => {
  return <>navigate("/cart")</>;
};
