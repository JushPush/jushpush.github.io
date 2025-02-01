import { BrowserRouter, Routes, Route, Switch, HashRouter, Link, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { AppContext } from "./Globals.js";
import $ from 'jquery'
import axios from 'axios';
import './App.css';
import './index.css';

import { Container, Navbar, Nav, Row, Col, Button, NavDropdown } from "react-bootstrap";

import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import About from './pages/About.js'
import Resume from './pages/Resume.js'
import PageNotFound from "./pages/PageNotFound.js";

import 'bootstrap'
import Blog from "./pages/Blog.js";
import CreatePost from "./pages/CreatePost.js";
import Login from "./pages/Login.js";
import { signOut } from "firebase/auth";
import { auth, db } from "./firebase-config.js";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import BlogPost from "./pages/BlogPost.js";

function App() {
  const banners = [
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg',
    'banner4.jpg',
  ]

  const [backgroundImage, setBackgroundImage] = useState('');
  const [userIcon, setUserIcon] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState('');
  const [posts, setPosts] = useState([]);

  const blogsCollectionRef = collection(db, "blogs");

    useEffect(() => {
        const fetchData = async () => {
        /*const data = [
            {id: 0, slug: 'first-post', title: 'First Post', content: 'first'},
            {id: 1, slug: 'second-post', title: 'Second Post', content: 'second'},
            {id: 2, slug: 'third-post', title: 'Third Post', content: 'third'},
            {id: 3, slug: 'fourth-post', title: 'Third Post', content: 'third'},
            {id: 4, slug: 'fifth-post', title: 'Third Post', content: 'third'},
            {id: 5, slug: 'sixth-post', title: 'Third Post', content: 'third'},
        ];*/
        const data = await getDocs(query(blogsCollectionRef, orderBy('date', 'desc')));
        setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        //setPosts(data);
    };
    fetchData();

    }, []);

  // this is unnecessary network data, it's fine but like it's slowing down the site. Try optimizing it at some point idk.
  function getUser() {
    try {
      // I'm being rate limited
      /*$.getJSON('https://api.github.com/users/JushPush', function(data) {
        setUserIcon(data.avatar_url);

        var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = data.avatar_url;
      });*/
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * banners.length);
    setBackgroundImage(banners[randomIndex]);

    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
      if (localStorage.getItem("authUser")) {
        setAuthUser(localStorage.getItem("authUser"))
      }
    }

    getUser();
  })

  let navigate = useNavigate();

  const logOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      setAuthUser('');
      navigate('/');
    });
  }
  return (
    <AppContext.Provider value={{posts, isAuth, authUser}}>
    <Container fluid className="App d-flex flex-column min-vh-100">
      <Row className="pageHead" style={{backgroundImage: `url(/images/${backgroundImage})`}} id="banner">
      <div className="contrastKeeper">
        <Navbar expand="sm">
          <Container fluid>
            <Navbar.Brand href="#" id="brand"><img id="git-user-id" src='/favicon.ico' className="d-inline-block align-top" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" data-bs-toggle="collapse" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mb-2 mb-lg-0">
                <Nav.Link className="link" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="link" as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link className="link" as={Link} to="/blog">Blog</Nav.Link>
                <Nav.Link className="link" as={Link} to="/about">About</Nav.Link>

                <NavDropdown title="Account">
                  {!isAuth ? <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item> : <NavDropdown.Item as={Button} onClick={logOutUser}>Logout</NavDropdown.Item> }
                  {isAuth && authUser == "TSed5n61TXhhpFoK0FnYWCWPvP72" && <><NavDropdown.Divider /> <NavDropdown.ItemText>Admin</NavDropdown.ItemText> <NavDropdown.Item className="link" as={Link} to="/createpost">CreatePost</NavDropdown.Item> </>}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid className="header">
          <h1>Portfolio</h1>
        </Container>
        </div>
      </Row>
      <Row className="body">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/createpost" element={<CreatePost authUser={`${authUser}`} />} />
        <Route exact path="/login" element={<Login setIsAuth={setIsAuth} setAuthUser={setAuthUser} />} />
        {posts.map((post) => (
                        <Route key={post.id} path={`/blog/${post.slug}`} element={<BlogPost post={post} />} />
                    ))}
      </Routes>
      </Row>
      <Row className="footer py-3 my-4 mt-auto">
        <Nav className="justify-content-center border-bottom pb-3 mb-3">
          <Nav.Item><Button href="https://substack.com/@karawill" variant="outline" className="m-1 socialbutton" role="button"><i className="bi bi-substack" /></Button></Nav.Item>
          <Nav.Item><Button href="https://www.instagram.com/karawilsob/" variant="outline" className="m-1 socialbutton" role="button"><i className="bi bi-instagram" /></Button></Nav.Item>
          <Nav.Item><Button href="https://www.linkedin.com/in/kwilson04/" variant="outline" className="m-1 socialbutton" role="button"><i className="bi bi-linkedin" /></Button></Nav.Item>
          <Nav.Item><Button href="https://github.com/JushPush" variant="outline" className="m-1 socialbutton" role="button"><i className="bi bi-github" /></Button></Nav.Item>
        </Nav>
        <p className='text-center text-body-secondary'>© 2025 Kara Wilson</p>
      </Row>
      
    </Container>
    </AppContext.Provider>
  );
}



export default App;
