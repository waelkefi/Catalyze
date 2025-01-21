import { Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

    </div>
  );
}

export default App;
