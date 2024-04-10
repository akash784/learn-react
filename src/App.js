import { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Content from './Content/Content.js';

function App() {
  const [tab, setTab] = useState('home')

  function handleTabChange(value) {
    setTab(value);
  }

  return (
    <div className="App">
      <Header changeTab={handleTabChange} activeTab={tab} />
      {tab != 'home' ? <Content selectedTab={tab} /> : ''}
    </div>
  );
}

export default App;
