import {Container} from 'react-bootstrap'

export default function Home() {
    return (
        <Container fluid>
          <h1 className='border-bottom'>Welcome!</h1>
          <br></br>
          <p>This is Kara's online portfolio. Here you'll find projects, information, and a blog where I'll post updates on my work and what I've been up to every once in a while. Blogs will not be daily, they'll be random.</p>
          <p>Feel free to look around!</p>
          <p>I made this myself in React.</p>
        </Container>
    );
}