import { Container } from "react-bootstrap";
import Markdown from "react-markdown"

export default function BlogPost({post}) {
    return(
    <Container fluid>
          <h1>{post.title}</h1>
          <p>By {post.author.name}</p>
          <p>Published {post.date}</p>
          <Markdown>{post.content}</Markdown>
    </Container>)
}