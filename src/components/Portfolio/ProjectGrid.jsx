import { styled } from "styled-components";
import ProjectIcon from "./ProjectIcon/ProjectIcon";
import { MainProjects, SecondProjects } from "./ProjectArrays/ProjectArrays";

const Portfolio = styled.section`
  position: relative;
  margin: 0 10% 100px 10%;
  width: 80vw;
  @media (max-width: 799px) {
    margin: 0 auto 50px;
  }
`;
const MainProjectSection = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  gap: 3em;
  @media (max-width: 799px) {
    margin-top: 30px;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
  }
`;
const SecondProjectSection = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 3em;

  @media (max-width: 799px) {
    margin-top: 30px;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
  }
`;

const Dividerhr = styled.hr`
  margin-bottom: 200px;
  @media (max-width: 799px) {
    margin-bottom: 40px;
  }
`;
export default function ProjectGrid() {
  const bob = [1, 2, 3, 4, 5];
  return (
    <div>
      <Portfolio>
        <Dividerhr id="projects" />
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
    </div>
  );
}
