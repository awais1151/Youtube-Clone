 import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
        <Header/>
        <div className='page__app'>
        <Sidebar/>
        <Body/>
        </div> 

    </div>
  );
}

export default App;
