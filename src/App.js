import MainBlock from './components/MainBlock';
import Pictures from './components/Pictures';
import Collection from './components/Collection';
import AllPictures from './components/AllPictures';
import Ourteam from './components/Ourteam';
import Footer from './components/Footer'
import data from './data.json'
import './css/Reset.css';

function App() {
  return (
    <>
      <MainBlock />
      <Pictures />
      <AllPictures />
      <Collection />
      <Ourteam />
      <Footer />
      
    </>
  );
}

export default App;
