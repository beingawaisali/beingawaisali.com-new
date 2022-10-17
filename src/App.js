import logo from './logo.svg';
import './App.css';

// #041C32 - main
// #04293A - Lighter
// #064663 - 3rd
// #ECB365 - Camel
// #4d99dd - Logo color
// #dadada - Text
// #0383bb - H1
// 
// https://brittanychiang.com/
// http://web.archive.org/web/20210412055209/https://beingawaisali.com/

// Components
import HeaderBar from "./components/HeaderBar.jsx";
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import MenuBar from './components/MenuBar.jsx';


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

let body = <Body />;
let menuBar = <MenuBar />

function App() {
  return (
    <div className="App">
        <HeaderBar toggleMenubar={toggleMenu}/>
        
        <Body />
        <Footer />
    </div>
  );
}

export default App;
