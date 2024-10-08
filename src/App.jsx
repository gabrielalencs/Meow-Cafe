import './App.css';

import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import ProductsSection from './components/ProductsSection';
import CroissantsSection from './components/CroissantsSection';
import DeliverySection from './components/DeliverySection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {

    return (
        <>
            <Header />
            <main className='max-w-1216 mx-auto'>
                <IntroductionSection />
                <ProductsSection />
                <CroissantsSection />
                <DeliverySection />
                <AboutSection />
                <LocationSection />
                <ScrollToTopButton />
            </main>
            <Footer />
        </>
    )
}

export default App
