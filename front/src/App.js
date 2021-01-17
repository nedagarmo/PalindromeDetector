import React from 'react';
import Sender from './features/sender/Sender'
import History from './features/history/History'
import './App.css';

const App = () => {
  return (
    <div className="h-100">
      <Sender />
      <History />
    </div>
  );
}

export default App;
