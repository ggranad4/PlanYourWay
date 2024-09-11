import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import StartUp from './pages/startUp/StartUp';
import TemplateLoader from './pages/templateLoader/TemplateLoader';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontSelector from './pages/fontSelection/FontSelector';
import { createContext, useContext, useEffect, useState } from 'react';
import ModalComponent from './components/modal/Modal';
import ColorSelector from './pages/colorSelection/ColorSelector';
import Summary from './pages/summary/Summary';
import { AppContext } from './components/provider/AppContext';
import AppContextDisplayer from './components/provider/AppContextDisplayer';
import Footer from './components/footer/Footer';
//QR CODE IF THE SITE IS NOT ON MOBILE
//TODO: Fix buttons and title showing and not shpwing
//TODO: fix displayer not being properly sized when phone changes
//TODO: displayer for planners ticket PYW-02
//TODO: Show colors in the planner
//TODO: fix styling throughout
//TODO: SessionStorage instead of state since when you reload everything unsaves
//TODO: Title page needs more styling



function App() {
  const [showPlanner, setShowPlanner] = useState(false);
  const { appData } = useContext(AppContext)
  const isInStart = window.location.href.split('/')[3] === '';
  console.log('CURR', window.location.href.split('/'), ' Does it equal false ', !isInStart);
  useEffect(() => { }, [window.location.href])
  return (
    <Router>
      {!isInStart ? <Header setShowPlanner={setShowPlanner} /> : <></>}
      <div>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path='/colorSelection' element={<ColorSelector />} />
          <Route path='/template' element={<TemplateLoader />} />
          <Route path='/font' element={<FontSelector />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </div>
      {!isInStart ? <Footer /> : <></>}
      <ModalComponent title={"Current Planner Selection"} show={showPlanner} setShowPlanner={setShowPlanner} children={<AppContextDisplayer />} />
    </Router>
  );
}

export default App;
