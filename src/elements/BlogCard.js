import { Card, Container,Row,Button } from "react-bootstrap";
import './ProjectCard.css'
import './BlogCard.css'
import { Link } from "react-router-dom";
import { parseTimestampString } from "../Parser";

export default function BlogCard({title, imgsrc, text, date, slug}) {
    const maxChar = 180;
    function slugurl() {
        return "/blog/" + slug;
    }
    function cutContent() {
        let str = text;
        if (text.length > maxChar) str = text.substring(0,maxChar) + "...";
        return str;
    }
    function readDate() {
        const tmpdate = new Date(date.seconds*1000);

        return `${tmpdate.getUTCMonth() + 1}/${tmpdate.getUTCDate()}/${tmpdate.getUTCFullYear()} at ${tmpdate.getHours()}:${tmpdate.getMinutes().toString().padStart(2, "0")}`;
    }
    return (
        <Card className="projectCard blogCard h-100" as={Link} to={slugurl()}>
            <Card.Img variant="top" src={imgsrc}></Card.Img>
            <Card.Body className="cardBody" style={{zIndex:"1", backgroundColor:"inherit"}}>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{parseTimestampString(date)}</Card.Subtitle>

                <Card.Text>{cutContent()}</Card.Text>
            </Card.Body>
        </Card>
    );
}