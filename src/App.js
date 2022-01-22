import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-1 bg-[#282c34]"></div>
      <Footer />
    </div>
  );
}

export default App;
