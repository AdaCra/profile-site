import { styled } from "styled-components";
import ProjectIcon from "./ProjectIcon/ProjectIcon";
import { MainProjects, SecondProjects } from "./ProjectArrays/ProjectArrays";

const Portfolio = styled.section`
  margin: 0 10% 100px 10%;
  width: 80%;
`;
const MainProjectSection = styled.section`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3em;
  }
`;
const SecondProjectSection = styled.section`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3em;
  }
`;
export default function ProjectGrid() {
  const bob = [1, 2, 3, 4, 5];
  return (
    <>
      <hr id="projects" style={{ marginBottom: "75px" }} />

      <Portfolio>
        <h2>Projects</h2>
        <MainProjectSection>
          {MainProjects.map((project, id) => {
            return (
              <ProjectIcon
                Title={project.title}
                Summary={project.summary}
                HRef={project.imageHref}
                Stack={project.stack}
                key={id}
              />
            );
          })}
        </MainProjectSection>
        <SecondProjectSection>
          {SecondProjects.map((project, id) => {
            return (
              <ProjectIcon
                Title={project.title}
                Summary={project.summary}
                HRef={project.imageHref}
                Stack={project.stack}
                key={id}
              />
            );
          })}
        </SecondProjectSection>
      </Portfolio>
    </>
  );
}
