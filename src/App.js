import logo from './logo.svg';
import './App.css';
import Store from './Components/Main/Store';
import MenuBar from './Components/Header/Menu';
import NaviagtionBar from './Components/Naviagtion';

function App() {
  return (
    <div className="container">
      <MenuBar/>
      <Store/>
      <NaviagtionBar/>
    </div>
  );
}

export default App;
