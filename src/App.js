import './App.css';
import BarGraphSales from './components/BarGraphSales';
import Customers from './components/Customers';
import NovemberProduct from './components/NovemberProduct';
import Heatmap from './components/Heatmap';
import Sales from './components/Sales';
import UKSales from './components/UKSales';

function App() {
  return (
    <>
      <div className="main-container">
        <Heatmap />
        <BarGraphSales />
        <UKSales />
        <Customers />
        <Sales />
        <NovemberProduct />
      </div>
    </>
  );
}

export default App;
