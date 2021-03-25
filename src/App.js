import './App.css';
import BarGraphSales from './components/BarGraphSales';
import Customers from './components/Customers';
import NovemberProduct from './components/NovemberProduct';
import Pie from './components/Pie';
import Sales from './components/Sales';
import UKSales from './components/UKSales';

function App() {
  return (
    <div >
      <span id="pie"><Pie /></span>
      <div><BarGraphSales /></div>
      <div><UKSales /></div>
      <div><Customers /></div>
      <div><Sales /></div>
      <div><NovemberProduct /></div>
    </div>
  );
}

export default App;
