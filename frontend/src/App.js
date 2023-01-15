import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Article from './Article';
import Search from './components/Search'
import {Home} from './pages/Home';
import {Explore} from './pages/Explore';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
