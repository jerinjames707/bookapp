import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbook from './components/Addbook';
import Searchbook from './components/Searchbook';

function App() {
  return (
    <div>
      <Addbook/>
      <Searchbook/>
    </div>
  );
}

export default App;
