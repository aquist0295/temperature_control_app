import { useState } from 'react';
 
function App() {
  const [tempVal, setempVal] = useState(50);
  const [tempColor, settempColor] = useState("neutral")

  const  incr_temp = () => {
      const newTemp = tempVal + 1
      setempVal(newTemp);

     if(newTemp > 50){settempColor("hot");}
     else{settempColor("neutral");}
    }

  const desc_temp = () => {
    const newTemp = tempVal - 1
    setempVal(newTemp);

    if(newTemp < 50){settempColor("cold");}
    else{settempColor("neutral");}
  }  


  return (
    <div className="temp_ctr">
      <div className="temp_disp" >
        <div className={`temp_count ${tempColor}`}>{tempVal}°F</div>
      </div>

      <div className="temp_buttons">
        <button className="decr" onClick= {() => desc_temp()}>-</button>
        <button className="incr" onClick= {() => incr_temp()}>+</button>
      </div>
    </div>
  );
}

export default App;
