import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CoustomerRouters } from './Routers/CoustomerRouters';

// Optional: you can import these individually if you ever want direct testing
import Navigation from './customer/components/Navigation/Navigation';
import { Homepage } from './customer/pages/Homepage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import { Cart } from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import { Order } from './customer/components/Order/Order';
import { OrderDetails } from './customer/components/Order/OrderDetails';

function App() {
  return (
    <div className="App">
      {/* 
        Wrap all customer routes in a single router.
        This ensures that /women/clothing/top and all nested paths
        are handled by the CoustomerRouters component.
      */}
      <Routes>
        <Route path="/*" element={<CoustomerRouters />} />
      </Routes>

      {/* You can add global modals or overlays here if needed */}
      
    </div>
  );
}

export default App;
