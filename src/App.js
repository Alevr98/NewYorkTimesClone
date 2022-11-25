import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {React, useState} from 'react'
import Homepage from './Components/Homepage'
import Error from './Components/Error'
import Article from './Components/Article'
import Search from './Components/Search'
import Navbar from './Components/Navbar'
import './assets/css/app.css'

function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
      setSidebar(!sidebar)
  }
  return (
    <>
    <div className="row">
      <div className={`col-lg-2 shadow sidebar-container ${sidebar ? "hide-sidebar" : "show-sidebar"}`} style={{backgroundColor: '#ddd', padding: '0'}}>
      <ul style={{padding: '0', marginTop: '2rem'}} className={`${sidebar ? "hide-content" : "show-content"}`}>
        <a href="#"><li>Homepage</li></a>
        <a href="#"><li>World</li></a>
        <a href="#"><li>Business</li></a>
        <a href="#"><li>Politics</li></a>
        <a href="#"><li>U.S.</li></a>
        <a href="#"><li>Sports</li></a>
        <a href="#"><li>Health</li></a>
        <a href="#"><li>New York</li></a>
        <a href="#"><li>Opinion</li></a>
        <a href="#"><li>Tech</li></a>
        <a href="#"><li>Science</li></a>
      </ul>
      </div>
      <div className={`col-lg-10 ${sidebar ? ('w-100'): ('w-75')}`}>
    <Navbar showSidebar={showSidebar} sidebar={sidebar} />
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/article/:id" element={<Article />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
      </div>
    </div>
    </>
  );
}

export default App;
