import { useState, useEffect } from "react";
import AdviceSection from '../components/Advice'
const AdviceContent = () => {
   const [getError, setGetError] = useState(false);
   const [apiData, setApiData] = useState([]);
  
     async function GetApiData() {
       try {
        setGetError(true)
         const ApiRequest = await fetch('https://api.adviceslip.com/advice');
         const ApiReponse = await ApiRequest.json();
         if(ApiReponse?.slip) {
         setApiData(ApiReponse?.slip)
         setGetError(false)
         }else {
          setApiData([])
          setGetError(false)
         }
       }catch(e) {
        console.error(e)
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
       <AdviceSection  advice={advice} id={id} hundleUpdateQuote={hundleUpdateQuote} />
    </main>
  )
}

export default AdviceContent