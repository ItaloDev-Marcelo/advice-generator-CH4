

export default function Advice({advice, id, ImageMobile, ImageDesk, dice, hundleUpdateQuote}) {
  
    return (
        <div id="Ad--container">
           <div id="Advice-content">
           <h1 id="Advice-num">Advice #{id}</h1>
            <p id="Advice-quote">“{advice}”</p>
           <div id="divider-line">
           <img src={ImageMobile} alt="" id="mobile-img"/>
           <img src={ImageDesk} alt="" id="desktop-img"/>
           </div>
           </div>
           <div id="dice--container">
           <button id="dice-btn" onClick={() =>  hundleUpdateQuote()}>
           <img src={dice} alt="" id="dice"/>
           </button>
           </div>
           </div>
    )

} 