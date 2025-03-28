import Project from "../Project"
import {projectsInfo} from "../../helpers/constants"
import "./index.css"

const Projects = () => {

  const getProjects = () => {
    return projectsInfo.map((x) => (
        <Project
            key={x.repo}
            repo={x.repo}
            deployed={x.deployed}
            img={x.img}
            alt={x.alt}
            title={x.title}
            descLn1={x.descLn1}
            descLn2={x.descLn2}
        />
    ))
  }

  return (
      <section className="section">
        <h2 className="section-title">
          Projects
        </h2>
        <div className="project-container body">
          {getProjects()}
        </div>
      </section>
  );
}

export default Projects
