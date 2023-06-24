import React, { useState } from 'react';
import NameEntry from './components/NameEntry';
import LiveStreamView from './components/LiveStreamView';
import Footer from './components/Footer'; 

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      {
        userName === "" 
        ? <NameEntry onNameSubmit={setUserName} />
        : <LiveStreamView userName={userName} />
      }
    <Footer />
    </div>
  );
}

export default App;
