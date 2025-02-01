import { useEffect, useState } from "react";
import { Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";
import React from "react";
import { AppContext } from "../Globals";
import BlogCard from '../elements/BlogCard';
import "./Blog.css"

import {auth} from '../firebase-config'

export default function Blog() {
    const {posts, setPosts} = React.useContext(AppContext);
    const {isAuth, setIsAuth} = React.useContext(AppContext);
    const {authUser, setAuthUser} = React.useContext(AppContext);

    const navigate = useNavigate();

    const createPostClick = () => {
        const data = { intent: 1 };
        navigate('/createpost', { state: data })
    }
    return (
        
        <Container fluid>
            <h1 className="border-bottom">Blog</h1>
            <br></br>
            <Row>
                {isAuth && authUser == "TSed5n61TXhhpFoK0FnYWCWPvP72" &&
                <Col fluid className="" xs='12' sm='6' lg='4'>
                    <Card as={Link} onClick={createPostClick} to="/createpost" className="h-100 adminCard">
                        <h1 style={{textAlign:"center",margin:"auto", textDecoration:"none"}}>+</h1>
                    </Card>
                </Col>
                }

                {!posts.length < 1 ? posts.map((post) => (
                        <Col fluid className="" xs='12' sm='6' lg='4'>
                            <BlogCard title={post.title} text={post.content} date={post.date} imgsrc="./images/banner1.jpg" slug={post.slug} />
                        </Col>
                    )) : <h1>Nothing to see here</h1>}
            </Row>
            
        </Container>
    )
}

