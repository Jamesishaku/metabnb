import './index.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import PlaceToStay from './components/pages/PlaceToStay'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
        <Route path="/nfts" element={<Home />} />
        <Route path="/community" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
