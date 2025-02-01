import { Card, Container,Row } from "react-bootstrap";

import './ProjectCard.css'
import { Link } from "react-router-dom";

// little element for each project

// it would be really cool if I used cards and made a blog page that fetches recent posts from substack
export default function ProjectCard({title, subtitle, imgsrc, text, href}) {
    return (
        <Card as={Link} to={href} className="projectCard">
            <Card.Img variant="top" src={imgsrc}></Card.Img>
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
            </Card.ImgOverlay>
            <Card.Body>
                
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}