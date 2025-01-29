import { useEffect, useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { AppContext } from "../Globals";
import BlogCard from '../elements/BlogCard'

export default function Blog() {
    const {posts, setPosts} = React.useContext(AppContext);
    return (
        
        <Container fluid>
            <h1 className="border-bottom">Blog</h1>
            <br></br>
            <Row>
                {!posts.length < 1 ? posts.map((post) => (
                        <Col fluid className="" xs='12' sm='6' lg='4'>
                            <BlogCard title={post.title} text={post.content} date={post.date} imgsrc="./images/banner1.jpg" slug={post.slug} />
                        </Col>
                    )) : <h1>Nothing to see here</h1>}
            </Row>
            
        </Container>
    )
}

