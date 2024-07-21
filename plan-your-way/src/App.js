import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartUp from './pages/startUp/StartUp';
import TemplateLoader from './pages/templateLoader/TemplateLoader';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontSelector from './pages/fontSelection/FontSelector';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path='/template' element={<TemplateLoader />} />
          <Route path='/font' element={<FontSelector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
