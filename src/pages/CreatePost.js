import { Container, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from "../firebase-config";
import { useLocation, useNavigate } from "react-router-dom";

export default function CreatePost({ authUser }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const blogsCollectionRef = collection(db, "blogs");

    let navigate = useNavigate();

    const createPost = async (e) => {
        e.preventDefault();

        let slug = title.toLowerCase().replace(/\s+/g, '-');

        let q = query(blogsCollectionRef, where("slug", "==", slug));

        let querySnapshot = await getDocs(q);

        let i = 0

        while (!querySnapshot.empty) {
            let q = query(blogsCollectionRef, where("slug", "==", slug + i));
            querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                slug += i;
            }
        }

        const date = new Date();

        if (auth.currentUser.email == "dallaswilson028@gmail.com") {

        await addDoc(blogsCollectionRef, {
                title, 
                slug,
                date,
                content, 
                author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
            });
            navigate('/');
        }
    };

    return(
    <Container fluid>
        <h1 className="border-bottom">Post</h1>
        {authUser === "TSed5n61TXhhpFoK0FnYWCWPvP72" ?
        <Form onSubmit={createPost}> 
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(event) => {setTitle(event.target.value)}} type="text" placeholder="I Love Posting!" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control onChange={(event) => {setContent(event.target.value)}} as="textarea" rows={6}/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form> : <p>You do not have permission to post</p>}
    </Container>);
}