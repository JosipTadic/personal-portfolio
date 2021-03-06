import React from "react";
import styled from "styled-components";
import appAnim from "../animations/appAnimation.json";
import { useLottie } from "lottie-react";
import { useInView } from "react-intersection-observer";

const SkillsContainer = styled.section`
  height: 100%;
  flex-basis: 73%;
  @media (max-width: 650px) {
    flex-basis: 100%;
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
const SkillsFlexContainer = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;

  color: snow;
`;
const SkillsGridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(1rem, 1fr));
  grid-template-rows: 0.1fr minmax(1rem, 1fr);
  gap: 1.5rem 1.5rem;
  grid-template-areas:
    "skills-grid-header skills-grid-header skills-grid-header"
    "skills-grid-third skills-grid-second skills-grid-first";

  @media all and (-ms-high-contrast: none) {
    display: -ms-grid;
    -ms-grid-columns: repeat(3, minmax(1rem, 1fr));
    -ms-grid-rows: 0.1fr minmax(1rem, 1fr);
    gap: 1.5rem 1.5rem;
  }
  @media (max-width: 650px) {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr repeat(3, minmax(1rem, 1fr));
    gap: 0.5rem 0.5rem;
    grid-auto-flow: row;
    grid-template-areas:
      "skills-grid-header"
      "skills-grid-third"
      "skills-grid-second"
      "skills-grid-first";

    @media all and (-ms-high-contrast: none) {
      .container {
        display: -ms-grid;
        -ms-grid-columns: 1fr;
        -ms-grid-rows: 0.2fr repeat(3, 1fr);
      }
    }
  }
`;
const SkillsGridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid goldenrod;
  grid-area: skills-grid-header;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
  }
  @media (max-width: 650px) {
    @media all and (-ms-high-contrast: none) {
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
    }
  }
`;
const SkillsGridThird = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 550ms;
  display: flex;
  padding: 1rem;
  align-items: center;
  row-gap: 3rem;
  justify-content: center;
  flex-direction: column;
  border-bottom: 2px dashed goldenrod;
  grid-area: skills-grid-third;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 0;
  }
  @media (max-width: 650px) {
    padding: 0.25rem;
    row-gap: 0.5rem;
    @media all and (-ms-high-contrast: none) {
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 0;
    }
  }
`;
const SkillsGridSecond = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 300ms;
  display: flex;
  padding: 1rem;
  align-items: center;
  row-gap: 3rem;
  justify-content: center;
  flex-direction: column;
  border-bottom: 2px dashed goldenrod;
  grid-area: skills-grid-second;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }
  @media (max-width: 650px) {
    padding: 0.25rem;
    row-gap: 0.5rem;
    @media all and (-ms-high-contrast: none) {
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: -1;
    }
  }
`;
const SkillsGridFirst = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 50ms;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;
  flex-direction: column;
  border-bottom: 2px dashed goldenrod;
  grid-area: skills-grid-first;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 2;
  }
  @media (max-width: 650px) {
    padding: 0.25rem;
    row-gap: 0.5rem;
    @media all and (-ms-high-contrast: none) {
      -ms-grid-row: 4;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: -2;
    }
  }
`;
const SkillsHeader = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`;
const SkillsCardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 2px solid goldenrod;
  text-align: center;
  margin-bottom: 1.5rem;
  @media (max-width: 650px) {
    margin-bottom: 0.15rem;
  }
`;
const SkillsCardSubheader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
  opacity: 0.95;
`;
const SkillsCardFooter = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;
const SkillsCardFooterInfo = styled.p`
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
`;

const LottiS = styled.div`
  z-index: -1; // lowest in your page
  position: absolute; // or static, depending on what you have
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10rem;
  pointer-events: none;
  @media (max-width: 1750px) {
    width: 70%;
    margin-left: 27%;
  }
  @media (max-width: 650px) {
    justify-content: center;
    padding-right: 0;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    width: 55%;
    margin-left: 35%;
  }
`;

const Skills = () => {
  const [fourth, inViewFourth] = useInView({
    threshold: 0.05,
    triggerOnce: true,
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
  const options = {
    animationData: appAnim,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return (
    <SkillsFlexContainer>
      <PseudoElement></PseudoElement>
      <SkillsContainer id="skills">
        <SkillsGridContainer>
          <SkillsGridHeader>
            <div>
              <SkillsHeader
                ref={fourth}
                className={inViewFourth ? "typing-effect" : ""}
              >
                Skills
              </SkillsHeader>
            </div>
          </SkillsGridHeader>
          <SkillsGridThird ref={third} className={inViewThird ? "animate" : ""}>
            <SkillsCardHeader>Programing</SkillsCardHeader>
            <SkillsCardSubheader>
              HTML
              <br />
              CSS
              <br />
              3rd party styling libraries
              <br />
              JavaScript/TypeScript
              <br />
              React
              <br />
              Angular
              <br />
              SQL
              <br />
              C++/C#
            </SkillsCardSubheader>
            <SkillsCardFooter></SkillsCardFooter>
            <SkillsCardFooterInfo></SkillsCardFooterInfo>
          </SkillsGridThird>
          <SkillsGridSecond
            ref={second}
            className={inViewSecond ? "animate" : ""}
          >
            <SkillsCardHeader>Quality Assurance</SkillsCardHeader>
            <SkillsCardSubheader>
              Postman
              <br />
              Swagger
              <br />
              Selenium IDE
              <br />
              Different testing principles
              <br />
              <br />
            </SkillsCardSubheader>
            <SkillsCardFooter></SkillsCardFooter>
            <SkillsCardFooterInfo></SkillsCardFooterInfo>
          </SkillsGridSecond>
          <SkillsGridFirst ref={first} className={inViewFirst ? "animate" : ""}>
            <SkillsCardHeader>Digital skills</SkillsCardHeader>
            <SkillsCardSubheader>
              GIT(GitHub)
              <br />
              Redmine, Trello
              <br />
              Vercel, Netlify
              <br />
              Google Analytics
              <br />
              Google Lighthouse
              <br />
              Improving SEO
              <br />
              Data Visualization
              <br />
              <br />
            </SkillsCardSubheader>
            <SkillsCardFooter></SkillsCardFooter>
            <SkillsCardFooterInfo></SkillsCardFooterInfo>
          </SkillsGridFirst>
        </SkillsGridContainer>
      </SkillsContainer>
      <LottiS>{View}</LottiS>
    </SkillsFlexContainer>
  );
};

export default Skills;
