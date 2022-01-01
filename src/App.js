import logo from './logo.svg';
import './App.css';
import Nyt from "./Nyt"
//import Bottom from "./Bottom"
import Element from "./Element"
import Newapi from './Newapi';
import Slider from './Slider';
//import ImgSlider from './ImgSlider';
//import Api from './Api';.
import Quiz from './Quiz';
import Footer from './Footer';
function App() {
  return (
    <>
      {/*<Nyt/>*/}
      {/*<ImgSlider/>
      <Api country="in"/>*/}
      <Newapi/>
      <Slider/>
      <Quiz/>
      <Footer/>
    </>
  );
}

export default App;
