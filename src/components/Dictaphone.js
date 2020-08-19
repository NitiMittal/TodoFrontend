import React,{useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import  animatedvoice from "../assets/animatedvoice.gif"
import voiceicon from "../assets/voiceicon.PNG"

function onListen(listening,resetTranscript,setCount,count)
{
  if(listening){
   
   SpeechRecognition.stopListening(); 
  
   resetTranscript();
  }
  else{
    SpeechRecognition.startListening();
    setCount(count+1);

  }
  
  
}
const Dictaphone = (props) => {
  const { transcript, resetTranscript,listening } = useSpeechRecognition();
  const [count,setCount]=useState(0);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

return (
    <div>
      <div  onClick={()=>onListen(listening,resetTranscript,setCount,count)}>
     
      {
        listening?
        <img src={animatedvoice}/>
      : <img src={voiceicon}/>
      
      }
      </div>
    
      <p className="trans">{transcript}</p>
      <div>
        {
          (count>0&&!listening)&&<button className="btn btn-secondary style" onClick={()=>onListen(listening,resetTranscript,setCount,count)}>Retry Again</button>

        }
      </div>
      
    </div>
  )
}
export default Dictaphone

