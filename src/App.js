// import './App.scss'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './pages/Home'
import './styles/index.scss'

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App
