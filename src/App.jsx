import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes/RoutesIndex';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import './App.css';
import { useLoading, LoadingProvider } from './contexts/LoadingContext';
import { CartProvider } from './contexts/CartContext';

function AppContent() {
  const { isRoutesLoaded } = useLoading();
  
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesIndex/>
      {isRoutesLoaded && <Footer />}
    </BrowserRouter>
  );
}

function App() {
  return (
    <LoadingProvider>
      <CartProvider>
      <AppContent />
      </CartProvider>
    </LoadingProvider>
  );
}

export default App;
