import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const ExperienceContainer = styled.section`
  height: 100%;
  flex-basis: 73%;
  display: flex;
  @media (max-width: 650px) {
    flex-basis: 100%;
  }
`;
const ExperienceGridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(1rem, 1fr));
  grid-template-rows: 0.15fr repeat(2, minmax(1rem, 1fr));
  gap: 1.5rem 1.2rem;
  grid-template-areas:
    "experience-grid-header experience-grid-header"
    "experience-grid-fourth experience-grid-third"
    "experience-grid-second experience-grid-first";

  @media all and (-ms-high-contrast: none) {
    display: -ms-grid;
    -ms-grid-columns: repeat(2, minmax(1rem, 1fr));
    -ms-grid-rows: 0.2fr repeat(2, minmax(1rem, 1fr));
    gap: 1.5rem 1.5rem;
  }
  @media (max-width: 650px) {
    padding: 0.25rem;
    gap: 0.5rem 0.5rem;
  }
`;
const ExperienceGridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid goldenrod;
  grid-area: experience-grid-header;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
  }
`;
const ExperienceGridFourth = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 1000ms;
  display: flex;
  padding: 1rem;
  border-bottom: 2px dashed goldenrod;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  grid-area: experience-grid-fourth;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 0;
  }
  @media (max-width: 650px) {
    justify-content: space-around;
    padding: 0.25rem;
    margin: 0.5rem;
  }
`;
const ExperienceGridThird = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 750ms;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px dashed goldenrod;
  grid-area: experience-grid-third;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }
  @media (max-width: 650px) {
    justify-content: space-around;
    padding: 0.25rem;
    margin: 0.5rem;
  }
`;
const ExperienceGridSecond = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 500ms;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px dashed goldenrod;
  grid-area: experience-grid-second;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: -1;
  }
  @media (max-width: 650px) {
    justify-content: space-around;
    padding: 0.25rem;
    margin: 0.5rem;
  }
`;
const ExperienceGridFirst = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 250ms;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px dashed goldenrod;
  grid-area: experience-grid-first;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 0;
  }
  @media (max-width: 650px) {
    justify-content: space-around;
    padding: 0.25rem;
    margin: 0.5rem;
  }
`;
const PseudoElement = styled.div`
  height: 100%;
  flex-basis: 27%;
  @media (max-width: 650px) {
    height: 0;
    flex-basis: 0;
  }
`;
const ExperienceFlexContainer = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
  background-color: black;
  color: snow;
`;
const ExperienceHeader = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  display: flex;
`;

/*
  background: linear-gradient(90deg, #000, #FFD700, #000);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 90%;
  animation: shine 10s linear infinite;
  position: relative;

  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }
*/
const ExperienceCardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid goldenrod;
`;
const ExperienceCardSubheader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 2.2rem;
  opacity: 0.98;
`;
const ExperienceCardFooter = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.9;
  font-style: italic;
  @media (max-width: 650px) {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const Experience = () => {
  const [fourth, inViewFourth] = useInView({
    threshold: 0.05,
  });
  const [third, inViewThird] = useInView({
    threshold: 0.05,
  });
  const [second, inViewSecond] = useInView({
    threshold: 0.05,
  });
  const [first, inViewFirst] = useInView({
    threshold: 0.05,
  });
  const [fifth, inViewFifth] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });
  return (
    <ExperienceFlexContainer>
      <PseudoElement></PseudoElement>
      <ExperienceContainer id="experience">
        <ExperienceGridContainer>
          <ExperienceGridHeader>
            <div>
              <ExperienceHeader
                ref={fifth}
                className={inViewFifth ? "typing-effect" : ""}
              >
                Work Experience
              </ExperienceHeader>
            </div>
          </ExperienceGridHeader>
          <ExperienceGridFourth
            ref={fourth}
            className={inViewFourth ? "animate" : ""}
          >
            <ExperienceCardHeader>Web developer</ExperienceCardHeader>
            <ExperienceCardSubheader>
              Working on various projects, most of the time working on frontend.{" "}
              <br /> Main technologies: <br />
              React
              <br />
              Typescript
            </ExperienceCardSubheader>
            <ExperienceCardFooter>
              January, 2022 - Currently
              <br />
              Valere-Margins - Remote
            </ExperienceCardFooter>
          </ExperienceGridFourth>
          <ExperienceGridThird
            ref={third}
            className={inViewThird ? "animate" : ""}
          >
            <ExperienceCardHeader>Web developer</ExperienceCardHeader>
            <ExperienceCardSubheader>
              Developing parts of the ERP/booking application with use of:{" "}
              <br />
              .NET Core - C# <br />
              Angular <br />
              MariaDB <br />{" "}
            </ExperienceCardSubheader>
            <ExperienceCardFooter>
              August, 2021 - November, 2021 <br />
              Uniline d.o.o. - Remote
            </ExperienceCardFooter>
          </ExperienceGridThird>
          <ExperienceGridSecond
            ref={second}
            className={inViewSecond ? "animate" : ""}
          >
            <ExperienceCardHeader>QA/Support</ExperienceCardHeader>
            <ExperienceCardSubheader>
              Testing tasks
              <br />
              Minor programming tasks
              <br />
              Providing technical support for partner connections
              <br />
              Writing documentation
            </ExperienceCardSubheader>
            <ExperienceCardFooter>
              January, 2021 - July, 2021
              <br />
              Uniline d.o.o. - Remote
            </ExperienceCardFooter>
          </ExperienceGridSecond>
          <ExperienceGridFirst
            ref={first}
            className={inViewFirst ? "animate" : ""}
          >
            <ExperienceCardHeader>QA Tester</ExperienceCardHeader>
            <ExperienceCardSubheader>
              Testing ERP system: <br />
              Selenium / Postman / Swagger
              <br />
              Analysis: data and performance
              <br />
              Managing: tasks(ticketing system) and data
              <br />
            </ExperienceCardSubheader>
            <ExperienceCardFooter>
              March, 2019 - December, 2020
              <br />
              Uniline d.o.o. - Pula/Remote
            </ExperienceCardFooter>
          </ExperienceGridFirst>
        </ExperienceGridContainer>
      </ExperienceContainer>
    </ExperienceFlexContainer>
  );
};

export default Experience;
