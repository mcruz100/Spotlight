import React, { useState } from 'react';
import NameEntry from './components/NameEntry';
import LiveStreamView from './components/LiveStreamView';

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      {
        userName === "" 
        ? <NameEntry onNameSubmit={setUserName} />
        : <LiveStreamView userName={userName} />
      }
    </div>
  );
}

export default App;
