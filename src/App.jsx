import { useEffect, useState } from 'react'
import './App.css'
import ImageDesk from './assets/images/pattern-divider-desktop.svg';
import ImageMobile from './assets/images/pattern-divider-mobile.svg';
import dice from './assets/images/icon-dice.svg';
import AdviceComponent from './components/Advice';
function App() {
  const [validateInfo, setValidateInfo] = useState(false);
  const [apiData, setApiData] = useState([]);

   async function GetApiData() {
     try {
      setValidateInfo(true)
       const ApiRequest = await fetch('https://api.adviceslip.com/advice');
       const ApiReponse = await ApiRequest.json();
       if(ApiReponse?.slip) {
       setApiData(ApiReponse?.slip)
       setValidateInfo(false)
       }else {
        setApiData([])
        setValidateInfo(false)
       }
     }catch(e) {
      console.log(e)
     }
   }
   
   const  hundleUpdateQuote = () => {
    GetApiData() 
   }

   useEffect(() => {
    GetApiData() 
   }, []) 

   
   const {advice, id} = apiData
   
   
  return (
   <main>
     <AdviceComponent
      ImageDesk={ImageDesk} ImageMobile={ImageMobile} 
      dice={dice}
      id={id}
      advice={advice}
      hundleUpdateQuote={hundleUpdateQuote}
      />
   </main>
  )
}

export default App
