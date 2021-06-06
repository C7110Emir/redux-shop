import './App.css';
import CompComponent from './components/CompComponent';
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
      <CompComponent/>
    </div>
  );
}

export default App;
