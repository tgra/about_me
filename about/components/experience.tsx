import { ExperienceData } from '../types/experiencedata'
import Accordion from 'react-bootstrap/Accordion';


export default function Experience({ id, title, org, start, end, description, skills }: ExperienceData) {

  return (

    <Accordion.Item eventKey={id}>
      <Accordion.Header>{title} - {org} ({start} - {end})</Accordion.Header>
      <Accordion.Body>
       
        {description.map((sentence: any) => (
          <p>{sentence}</p>
        )) }

        <h6>Skills</h6>
        <ul>
          {skills.map((skills: any) => (
            <li>{skills}</li>
          ))
          }
        </ul>
      </Accordion.Body>
      </Accordion.Item>
      )
}

