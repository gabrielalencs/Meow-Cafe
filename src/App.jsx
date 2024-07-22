import './App.css';
import Header from './components/Header';
import Introduction from './components/IntroductionSection';

function App() {

    return (
        <>
            <Header />
            <main className='max-w-1216 mx-auto'>
                <Introduction />
            </main>
        </>
    )
}

export default App
