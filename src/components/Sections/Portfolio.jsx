import React from 'react';
import Web from './Web';
import Marketing from './Marketing';
import UiUx from './UiUx';
import './portfolio.css';



// let showPortfolio = true;

// let Portfolio = () => {
//     return (
//         <div id='portfolio-parent'>
//             <div className=''>
//                 <h2>My Portolio</h2>
//             </div>
//             <button className='button-1 portfolio-buttons'>Web Dev</button>
//             <button className='button-1 portfolio-buttons'>Web Marketing</button>
//             <button className='button-1 portfolio-buttons'>UI/UX</button>
//             <div className='portfolio-sec'>
//                 <Web />
//                 <Marketing />
//                 <UiUx />
//             </div>
//         </div>
//     )
// }

class Portfolio extends React.Component {

    state = {
        visibleItems: "web",
    }

    showMarketing() {
        this.setState(
            { visibleItems: "marketing" }
        )
    }

    showWeb() {
        this.setState(
            {
                visibleItems: "web"
            }
        )
    }

    showUiUx() {
        this.setState(
            { visibleItems: "uiux" }
        )
    }

    render() {
        return (
            <div id='portfolio-parent'>
                <div className='section-headings'>
                    <h2>My Portfolio</h2>
                </div>
                <div className='buttons-parent'>
                    <button onClick={() => this.showWeb()} className='button-1 portfolio-buttons'>Web Dev</button>
                    <button onClick={() => this.showMarketing()} className='button-1 portfolio-buttons'>Web Marketing</button>
                    <button onClick={() => this.showUiUx()} className='button-1 portfolio-buttons'>UI/UX</button>
                </div>
                <div className='portfolio-sec'>
                    {this.state.visibleItems == "web" ? <Web /> : null || this.state.visibleItems == "uiux" ? <UiUx /> : null || this.state.visibleItems == "marketing" ? <Marketing /> : null}

                    {/* <UiUx /> */}
                </div>
            </div>
        )
    }
}


export default Portfolio;