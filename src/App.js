import logo from './logo.svg';
import './App.css';
import Nyt from "./Nyt"
import Navbar from './Navbar';
//import Bottom from "./Bottom"
import Element from "./Element"
import Newapi from './Newapi';
//import ImgSlider from './ImgSlider';
//import Api from './Api';
function App() {
  return (
    <>
      {/*<Nyt/>*/}
      <Navbar/>
      {/*<ImgSlider/>
      <Api country="in"/>*/}
      <Newapi/>
    </>
  );
}

export default App;
