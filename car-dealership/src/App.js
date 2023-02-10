import './App.css';
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationComponent from './components/NavigationComponent';
import { Route, Routes } from "react-router-dom";
import CarComponent from './components/CarComponent';
import FormComponent from './components/FormComponent';
import CarForm from './components/CarForm';
function App() {
const fields = ['name', 'surname', 'email'];

  return (
    <div className="App">
      <header className="App-header">
        <NavigationComponent/>
      </header>
      <main>
        <Container>
            <Routes>
              <Route path='/' element={<CarComponent/>}/>
              <Route path='/form' element={<CarForm fields={fields}/>}/>
            </Routes>
        </Container>
      
      
      </main>
      
    </div>
  );
}

export default App;
