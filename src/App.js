import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import $ from 'jquery'
import './App.css';
import './index.css'

import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import About from './pages/About.js'
import Resume from './pages/Resume.js'
import PageNotFound from "./pages/PageNotFound.js";

import 'bootstrap'
//import 'bootstrap-icons'

function App() {
  const banners = [
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg',
    'banner4.jpg',
  ]

  const [backgroundImage, setBackgroundImage] = useState('');

  const [userIcon, setUserIcon] = useState('');

  function getUser() {
    try {
      $.getJSON('https://api.github.com/users/JushPush', function(data) {
        setUserIcon(data.avatar_url);

        var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = data.avatar_url;
      });
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * banners.length);
    setBackgroundImage(banners[randomIndex]);

    getUser();
  })
  return (
    <div className="App">
      <div className="pageHead" style={{backgroundImage: `url(${backgroundImage})`}} id="banner">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><div><img id="git-user-id" src={userIcon} /> JushPush</div></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/projects">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        <div class="container-fluid header">
          <h1>Portfolio</h1>
        </div>
      </div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </HashRouter>
      <footer className='py-3 my-4 mt-auto'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'><a href='https://substack.com/@karawill' className='btn btn-outline-light btn-floating m-1 socialbutton' role='button'><i className='bi bi-substack'></i></a></li>
          <li className='nav-item'><a href='https://www.instagram.com/karawilsob/' className='btn btn-outline-light btn-floating m-1 socialbutton' role='button'><i className='bi bi-instagram'></i></a></li>
          <li className='nav-item'><a href='https://www.linkedin.com/in/kwilson04/' className='btn btn-outline-light btn-floating m-1 socialbutton' role='button'><i className='bi bi-linkedin'></i></a></li>
          <li className='nav-item'><a href='https://github.com/JushPush' className='btn btn-outline-light btn-floating m-1 socialbutton' role='button'><i className='bi bi-github'></i></a></li>
        </ul>
        <p className='text-center text-body-secondary'>© 2025 Kara Wilson</p>
      </footer>
    </div>
  );
}

export default App;
