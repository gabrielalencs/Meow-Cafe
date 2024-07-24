import './App.css';
import CroissantsSection from './components/CroissantsSection';
import DeliverySection from './components/DeliverySection';
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import ProductsSection from './components/ProductsSection';

function App() {

    return (
        <>
            <Header />
            <main className='max-w-1216 mx-auto'>
                <IntroductionSection />
                <ProductsSection />
                <CroissantsSection />
                <DeliverySection />
            </main>
        </>
    )
}

export default App
