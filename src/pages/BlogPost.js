import { Container } from "react-bootstrap";

export default function BlogPost({post}) {
    return(
    <Container fluid>
          <h1 className="border-bottom">{post.title}</h1>
          <h4 className="border-bottom">Published {post.date}</h4>
          <p>{post.content}</p>
    </Container>)
}