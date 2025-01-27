import { Card, Container,Row } from "react-bootstrap";

import './ProjectCard.css'

// little element for each project

// it would be really cool if I used cards and made a blog page that fetches recent posts from substack
export default function ProjectCard({title, subtitle, imgsrc, text}) {
    return (
        <Card className="projectCard">
            <Card.Img variant="top" src={imgsrc}></Card.Img>
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
            </Card.ImgOverlay>
            <Card.Body>
                
                <Card.Text>{text}</Card.Text>

                <Card.Link href="https://github.com/JushPush/PyCHAS">Github</Card.Link>
            </Card.Body>
        </Card>
    );
}