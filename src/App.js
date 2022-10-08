import logo from './logo.svg';
import './App.css';

// #041C32 - main
// #04293A - Lighter
// #064663 - 3rd
// #ECB365 - Camel

// Components
import HeaderBar from "./components/HeaderBar.jsx";
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="App">
        <HeaderBar />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
