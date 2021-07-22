import "./App.css";
import ImageSlider from "./components/ImageSlider";

import SliderData from "./components/SliderData";
import TittleMessage from "./components/TittleMessage";
//import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <br/>
      <ImageSlider slides={SliderData} />
      <TittleMessage />
    </div>
  );
}

export default App;
