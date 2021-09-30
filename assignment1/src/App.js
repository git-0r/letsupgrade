import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Greeting />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
