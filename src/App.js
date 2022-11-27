import './App.css';
import React from 'react';

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
import MenuBarMobile from './components/MenuBarMobile.jsx';
import Connect from './components/Sections/Connect';



// let mobileMenu = false;

// function toggleMenu () {
//   mobileMenu ? mobileMenu = false : mobileMenu = true;
//   console.log(mobileMenu)
// }

// console.log(mobileMenu)

// function makeSome () {
//   console.log("Hiiii")
// }

// function App(props) {
//   return (
//     <div className="App">
//         <HeaderBar clickHam={toggleMenu}/>
//         {mobileMenu ? <MenuBar/> : <Body/>}
//         {/* <MenuBar />
//         <Body /> */}
//         <Footer />
//     </div>
//   );
// }

class App extends React.Component {

  state = {
    isMobile : false
  }

  toggleButton() {
    this.setState(
      {isMobile : !this.state.isMobile}
    );
    console.log(this.state.isMobile)
  }

  render() {
    return(
      <div className="App" id="app">

        <HeaderBar clickHam={ () => this.toggleButton() } />
        {this.state.isMobile == false ? <Body /> : <MenuBarMobile />}
        {!this.state.isMobile ? <Footer /> : null }

    </div>
    )
  }

}

export default App;