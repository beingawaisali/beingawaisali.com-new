import logo from './logo.svg';
import './App.css';

// #041C32 - main
// 

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
