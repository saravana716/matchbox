import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Swipers/Banner';
import History from './Components/history/History';
import Categories from './Components/Categories/Categories';
import Choose from './Components/Choosing/Choose';
import Info from './Components/info/Info';
import Clients from './Components/Clients/Clients';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Safty from './Pages/Safty';
import Routing from './Routing/Routing';
import wa from "./Assets/wa.png"
function App() {
  return (
    <div className="App">
   <Routing/>
   <a
  href="https://wa.me/7639769212?text=Hello%20from%20Matchbox%20Industries!"
  target="_blank"
  rel="noopener noreferrer"
>
<img src={wa} alt='' className='wats'/>

</a>
    </div>
  );
}

export default App;
