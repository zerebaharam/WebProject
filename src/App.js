import MainBlock from './components/MainBlock';
import Pictures from './components/Pictures';
import Collection from './components/Collection';
import SellPictures from './components/SellPictures';
import Ourteam from './components/Ourteam';
import Footer from './components/Footer';
import './css/Reset.css';

function App() {
  return (
    <>
      <MainBlock />
      <Pictures />
      <SellPictures />
      <Collection />
      <Ourteam />
      <Footer />
    </>
  );
}

export default App;
