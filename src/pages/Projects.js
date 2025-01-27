import {Container} from 'react-bootstrap'
import ProjectCard from '../elements/ProjectCard'

export default function Projects() {
    return (
        <Container fluid>
          <h1 className='border-bottom'>Projects</h1>
          <br></br>
          <ProjectCard title="PyCHAS" subtitle="C/C++ Header Amalgamation Script" text="A script that merges headers in C and C++ using Python" imgsrc='/images/banner1.jpg' />
        </Container>
    )
}