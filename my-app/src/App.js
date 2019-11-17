import React from 'react';
import './components/Contact.css';
import Contact from './components/Contact'

const esther = {
  name : "Esther",
  avatar : "https://randomuser.me/api/portraits/women/82.jpg",
  status : true
}
const shelly = {
  name : "Shelly",
  avatar : "https://randomuser.me/api/portraits/women/37.jpg",
  status : false
}
const cunigonde = {
  name : "Cunigonde",
  avatar : "https://randomuser.me/api/portraits/women/94.jpg",
  status : true
}

function App() {
  return (
    <div className="App">
      <Contact user={esther}/>
      <Contact user={shelly}/>
      <Contact user={cunigonde}/>
    </div>
  );
}

export default App;