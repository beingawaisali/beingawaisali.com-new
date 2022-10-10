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


let mobileMenu = false;

console.log(mobileMenu)

let toggleMenu = () => {
    if (mobileMenu == false) {
        mobileMenu = true
    } else (
        mobileMenu = false
    )
console.log(mobileMenu)
}

let listMenu =  "<div>Menu List Mobile</div>";


function App() {
  return (
    <div className="App">
        <HeaderBar toggleMenubar={toggleMenu}/>
        <div>
                    { toggleMenu ? <div></div> : listMenu }
                </div>
        <Body />
        <Footer />
    </div>
  );
}

export default App;
