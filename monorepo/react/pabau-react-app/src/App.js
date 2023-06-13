import './App.css';
import Header from './Components/header';
import MainContent from './Components/main-content';
import { Footer } from './Components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetails } from './Components/item-details';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [stepState, setStepState] = useState(1);
  return (
    <div>
      <Header step={stepState} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainContent updateStep={setStepState} />} />
            <Route path="/details/:id" element={<ItemDetails updateStep={setStepState} />} />
            <Route exact path="/" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
