import './App.css';
import BarGraphSales from './components/BarGraphSales';
import Customers from './components/Customers';
import NovemberProduct from './components/NovemberProduct';
import Heatmap from './components/Heatmap';
import Sales from './components/Sales';
import UKSales from './components/UKSales';

function App() {
  return (
    <div >
      <div><Heatmap /></div>
      <div><BarGraphSales /></div>
      <div><UKSales /></div>
      <div><Customers /></div>
      <div><Sales /></div>
      <div><NovemberProduct /></div>
    </div>
  );
}

export default App;
