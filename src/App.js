import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import './App.css';
import Layout from './cmp/shared/layout/index';
import Home from "./cmp/home";
import About from "./cmp/about";
import Service from './cmp/service';
import Contact from './cmp/contact';
function App() {
  return (
    <>
       <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Layout>
       </Router>
    </>
  );
}

export default App;
