import React, { useEffect, useState } from 'react';

function App() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    if(firstCount > secondCount){
      console.log("first variable is higher",firstCount);
    }
    else if(firstCount < secondCount){
      console.log("second variable is higher",secondCount);
    }
  },[firstCount,secondCount])

  return (
    <div className="App">
      <p>First Count = {firstCount}</p>
      <button onClick={() => setFirstCount(firstCount + 1)}>
        Change First Count
      </button>
      <p>Second Count = {secondCount}</p>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        Change Second Count
      </button>
    </div>
  );
}

export default App;