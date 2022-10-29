import React from 'react';
import { Bills } from './features/bills/Bills';
import { Chart, NavBar, Table} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Chart />
      <Bills />
      <Table />
    </div>
  );
}

export default App;