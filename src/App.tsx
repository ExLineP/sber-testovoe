
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductDetails } from './components/ProductDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ProductDetails />
    </div>
  );
}

export default App;