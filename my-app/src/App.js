import React, { useState } from 'react';
import NameEntry from './components/NameEntry';
import LiveStreamView from './components/LiveStreamView';
import Footer from './components/Footer'; 
import NavigationBar from './components/NavigationBar';
const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <NavigationBar/>
    </div>
  );
}

export default App;
