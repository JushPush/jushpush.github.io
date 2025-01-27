import { BrowserRouter, Routes, Route, Switch, HashRouter } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import $ from 'jquery'
import './App.css';
import './index.css'

import { Container, Navbar, Nav } from "react-bootstrap";

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

  // this is unnecessary network data, it's fine but like it's slowing down the site. Try optimizing it at some point idk.
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
        <Navbar expand="sm">
          <Container fluid>
            <Navbar.Brand href="#"><div><img id="git-user-id" src={userIcon} /> JushPush</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" data-bs-toggle="collapse" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mb-2 mb-lg-0">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid className="header">
          <h1>Portfolio</h1>
        </Container>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
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
