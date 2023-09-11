import { styled } from "styled-components";
import ProjectIcon from "./ProjectIcon/ProjectIcon";

const Portfolio = styled.section`
  margin: 0 10%;
  width: 80%;
`;
const GridSection = styled.section`
  margin-top: 100px;
  width: 100%;
  display: flex;
  gap: 3em;

  
  }
`;
export default function ProjectGrid({ProjectArray}) {
  const bob = [1, 2, 3, 4, 5];
  return (
    <>
      <hr id="projects" style={{ marginBottom: "100px" }} />

      <Portfolio>
        <h2>Projects</h2>
        <GridSection>
          {ProjectArray.map((number) => {
            return (
              <ProjectIcon
                Title="Bob"
                Summary="Summary"
                HRef={"/HMF_4810.jpg"}
                Size={1}
                key={number}
              />
            );
          })}
        </GridSection>
      </Portfolio>
    </>
  );
}
