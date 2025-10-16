import  DividerDesktop  from '../assets/images/pattern-divider-desktop.svg';
import  DividerMobile from '../assets/images/pattern-divider-mobile.svg';
import  Dice  from '../assets/images/icon-dice.svg';
export default function AdviceSection({advice, id, hundleUpdateQuote}) {

    return (
        <section id="Ad--container">
           <div id="Advice-content">
           <h1 id="Advice-num">Advice #{id}</h1>
            <p id="Advice-quote">“{advice}”</p>
           <figure id="divider-line">
           <img src={DividerMobile} alt='' id="mobile-img"/>
           <img src={DividerDesktop} alt=''  id="desktop-img"/>
           </figure>
           </div>
           <div id="dice--container">
           <button id="dice-btn" onClick={() =>  hundleUpdateQuote()}>
            <img src={Dice} alt='' />
           </button>
           </div>
      </section>
    )

} 