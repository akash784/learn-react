import { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Content from './Content/Content.js';
import TaskManager from './TaskManager/TaskManager.js'

function App() {
  const [tab, setTab] = useState('home')

  function handleTabChange(value) {
    setTab(value);
  }

  return (
    <div className="App">
      <Header changeTab={handleTabChange} activeTab={tab} />
      { tab == 'task' ? <TaskManager /> : tab != 'home' ? <Content selectedTab={tab} /> : '' }
    </div>
  );
}

export default App;
