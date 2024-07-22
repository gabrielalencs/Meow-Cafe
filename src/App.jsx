import './App.css';
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
            </main>
        </>
    )
}

export default App
