import logo from "./logo.svg";
import "./App.css";
import Nyt from "./Nyt";
//import Bottom from "./Bottom"
import Element from "./Element";
import Newapi from "./Newapi";
import Newslider from "./Newslider";
//import ImgSlider from './ImgSlider';
//import Api from './Api';.
import Quiz from "./Quiz";
import Footer from "./Footer";
import Slider from "./Slider";
import Location from "./Location";
import RPc from "./Rpc";
import TextSpeech from "./TextSpeech";
function App() {
  return (
    <>
      {/*<Nyt/>*/}
      {/*<ImgSlider/>
      <Api country="in"/>*/}
      <Newapi />
      <Quiz />
      <Location />
      <TextSpeech />
      {/*<Slider/>
      <Newslider/>
      <Quiz/>
      <hr/>
      <RPc/>
      <hr/>
      <Footer/>
      <Location/>
      <TextSpeech/>*/}
    </>
  );
}

export default App;
