import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  SSRProvider from 'react-bootstrap/SSRProvider';

import { ExperienceData, ExperienceDataListProps, ExperienceDataProps } from '../types/experiencedata'
import Experience from "../components/experience"
import { GetStaticProps, NextPage } from 'next'


import { GetExperiences } from '../lib/data_api'

export const getStaticProps: GetStaticProps = async (_context) => {
  
  const experiences: ExperienceData[] = await GetExperiences()

  return {
    props: {
      experienceDataList: experiences,
    },
  }
}



const IndexPage: NextPage<ExperienceDataListProps> = ({
  experienceDataList,
}: ExperienceDataListProps) => {

  return (

    <SSRProvider>
    
      <Head>
        <title>Tanya Gray - About</title>
        
       
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      ></link>
      </Head>

<Container>
      
        <h1>Tanya Gray</h1>
        
        <h2>Web Software Engineer - Linked Data</h2>
        <hr/>
        <Row>
          <Col><b>Email</b></Col>
          <Col><b>Location</b></Col>
        </Row>
        <Row>
          <Col><a href="mailto:tgratgra@gmail.com">tgratgra@gmail.com</a></Col>
          <Col>North Wiltshire, England, UK</Col>
        </Row>
      <br/>
      <hr/>
        <h2>Summary</h2>
        <p>Web Software Engineer with experience in commercial, academic and research organisations. I am creative with
excellent analytical and problems solving skills, as well as the ability to organise and prioritise my work effectively.
</p>
<hr/>
<h2>Keywords</h2>
<p>MySQL . Apache . PHP . Python . HTML</p>
<p>JavaScript . React.js . Next.js . Node.js . JQuery . d3.js . JSON</p>
<p>CSS . Bootstrap</p>
<p>Git . GitHub . SVN</p>
<p>RDF . RDFS . OWL . Ontology . Vocabularies . JSON-LD . MarkLogic . Linked Data . Protege</p>
<p>XML . XSLT . XPath . XQuery . XProc . eXistdb . XForms . XSD</p>

<p>Data Standards & Ontologies . CIDOC-CRM . BIBFRAME . Galleries, Libraries & Museums . Biomedical . Bioinformatics . Digital Humanities . Digital Asset Management . ResourceSpace . Jupyter Notebooks . Pandas . OpenRefine . APIs</p>
<hr/>
        <h2>Skills</h2>
       <p>Core experience with LAMP stack development (Linux, Apache, MySQL, postgresql, PHP and also Python)</p>
<ul>
<li>Data visualisation (d3.js)</li>
<li>Linked Data (JSON-LD, OWL, RDF, SPARQL)</li>
<li>XML (XSLT, XPath, XForms, XSLT, XQuery)</li>
<li>CSS, Bootstrap</li>
<li>JavaScript</li>
<li>JQuery</li>
<li>Version control - git, GitHub and subversion</li>
<li>Data query/transformation using CSV/XML/JSON/API and Python</li>
</ul>

<p>Experienced with IIIF data standard and the associated software and tools.</p>
<p>Knowledgeable in data models/standards for the biomedical sciences, and also those relevant to Libraries and the
Digital Humanities, including TEI P5, IIIF, VIAF, METS/MODS, CIDOC-CRM, and BIBFRAME.</p>

       
<h2>Work Experience</h2>


{
  experienceDataList.map((ex: ExperienceData) => (
  <Experience {...ex} key={ex.id} />
  
  ))
  }





<h2>Education</h2>

<h2>Publications</h2>  



      </Container>
    </SSRProvider>
  )
}


export default IndexPage