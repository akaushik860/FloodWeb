import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Prediction from "./components/prediction";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Prediction />
      <Footer />
    </div>
  );
}

export default App;
