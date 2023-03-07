import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import './AppStyle.css' 


function App() {
  return (
    <HashRouter hashType="nolash" basename="/edx-react-portfolio/">
      <div className='h-100' >
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/edx-react-portfolio/" element={<Home />} />
          <Route path="/edx-react-portfolio/about" element={<About />} />
          <Route path="/edx-react-portfolio/blog" element={<Blog />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        
      </div>
    </HashRouter>
  );
}

export default App;

