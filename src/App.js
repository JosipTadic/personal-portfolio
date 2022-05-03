import "./App.css";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import styled from "styled-components";
import Projects from "./sections/Projects";
import { useInView } from "react-intersection-observer";
import Contact from "./sections/Contact";

const SnappingContainer = styled.div``;

function App() {
  const [refExperience, inViewExperience] = useInView({
    threshold: 0.05,
  });
  const [refEducation, inViewEducation] = useInView({
    threshold: 0.05,
  });
  const [refSkills, inViewSkills] = useInView({
    threshold: 0.05,
  });
  const [refProjects, inViewProjects] = useInView({
    threshold: 0.05,
  });
  const [refContact, inViewContact] = useInView({
    threshold: 0.05,
  });

  return (
    <>
    <div>
      </div>
      <Header
        experienceActive={inViewExperience}
        educationActive={inViewEducation}
        skillsActive={inViewSkills}
        projectActive={inViewProjects}
        contactActive={inViewContact}
      />
      <SnappingContainer>
        <div ref={refContact}>
          <Contact />
        </div>
        <div ref={refExperience}>
          <Experience />
        </div>
        <div ref={refSkills}>
          <Skills />
        </div>
        <div ref={refProjects}>
          <Projects />
        </div>
        <div ref={refEducation}>
          <Education />
        </div>
      </SnappingContainer>
    </>
  );
}

export default App;
