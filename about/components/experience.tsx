import { ExperienceData } from '../types/experiencedata'



export default function Experience({ id, title, org, start, end, description, skills }: ExperienceData) {

  return (

    <div key={id}>
      <h4>{title} - {org} ({start} - {end})</h4>
     <div>
       
        {description.map((sentence: any) => (
          <p>{sentence}</p>
        )) }
</div>
        <h6>Skills</h6>
        <ul>
          {skills.map((skills: any) => (
            <li>{skills}</li>
          ))
          }
        </ul>
      </div>
      
      )
}

