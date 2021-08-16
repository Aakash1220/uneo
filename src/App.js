import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SelectedProject from './components/SelectedProject';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <SelectedProject/>
      <Blog/>
      <Footer/>

    </div>
  );
}

export default App;
