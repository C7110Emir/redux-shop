import './App.css';
import Laptopcomponent from './components/Laptopcomponent';
import PhoneComponent from "./components/PhoneComponent"
import WatchComponent from './components/WatchComponent';

function App() {
  return (
    <div className="App">
      <h1>BASIC SHOP</h1>
      <Laptopcomponent/>
      <PhoneComponent/>
      <WatchComponent/>
    </div>
  );
}

export default App;
