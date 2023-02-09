import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import FormComponent from './components/FormComponent.js';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
const fields = ['name', 'surname', 'email'];

  return (
    <div className="App">
      <header className="App-header">
        <FormComponent fields={fields}/>
      </header>
      
    </div>
  );
}

export default App;
