import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";

const ProjectsContainer = styled.section`
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
const ProjectsFlexContainer = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
  background-color: black;
  color: snow;
`;

const ProjectsGridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(1rem, 1fr));
  grid-template-rows: 0.1fr minmax(1rem, 1fr);
  gap: 1.5rem 1.5rem;
  grid-template-areas:
    "projects-grid-header projects-grid-header projects-grid-header"
    "projects-grid-third projects-grid-second projects-grid-first";

  @media all and (-ms-high-contrast: none) {
    display: -ms-grid;
    -ms-grid-columns: repeat(3, minmax(1rem, 1fr));
    -ms-grid-rows: 0.2fr minmax(1rem, 1fr);
    gap: 1.5rem 1.5rem;
  }
  @media (max-width: 650px) {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr repeat(3, 1fr);
    gap: 0.5rem 0.5rem;
    grid-auto-flow: row;
    grid-template-areas:
      "projects-grid-header"
      "projects-grid-third"
      "projects-grid-second"
      "projects-grid-first";

    @media all and (-ms-high-contrast: none) {
      .container {
        display: -ms-grid;
        -ms-grid-columns: 1fr;
        -ms-grid-rows: 0.2fr repeat(3, 1fr);
      }
    }
  }
`;
const ProjectsGridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid goldenrod;
  grid-area: projects-grid-header;

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
}
`;
const ProjectsGridThird = styled.div`
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
  grid-area: projects-grid-third;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 0;
  }
  @media (max-width: 1100px) {
    justify-content: space-evenly;
    padding: 0.25rem;
    row-gap: 0.25rem;
  }
  @media (max-width: 650px) {
    justify-content: space-between;
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
const ProjectsGridSecond = styled.div`
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
  grid-area: projects-grid-second;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }
  @media (max-width: 1100px) {
    justify-content: space-evenly;
    padding: 0.25rem;
    row-gap: 0.25rem;
  }
  @media (max-width: 650px) {
    justify-content: space-between;
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
const ProjectsGridFirst = styled.div`
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
  grid-area: projects-grid-first;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 2;
  }
  @media (max-width: 1100px) {
    justify-content: space-evenly;
    padding: 0.25rem;
    row-gap: 0.25rem;
  }
  @media (max-width: 650px) {
    justify-content: space-between;
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
const ProjectsHeader = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`;
const ProjectsCardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 2px solid goldenrod;
  text-align: center;
  margin-bottom: 1.5rem;
  @media (max-width: 650px) {
    margin-bottom: 0.1rem;
    font-size: 1.75rem;
  }
`;
const ProjectsCardSubheader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
  opacity: 0.95;
  @media (max-width: 1100px) {
    font-size: 1.2rem;
    line-height: 1.75rem;
  }
`;
const ProjectsCardFooter = styled.h4`
  font-size: 3.5rem;
  font-weight: 400;
  text-align: center;
  padding: 0 2rem;
`;
const ProjectsCardFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
const ProjectsCardFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  @media (max-width: 650px) {
    flex-direction: column;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    font-size: 1rem;
  }
`;
const LinkCodeText = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
`;
const TechText = styled.p`
  padding: 3px;
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    padding: 1.5px;
  }
`;
const TechSpan = styled.span`
  display: inline-block;
  border: 0.15rem solid goldenrod;
  font-weight: 500;
  margin: 0.25rem;
  border-radius: 1rem 5px;
  &:hover {
    background: #035e7b;
    color: black;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    border: 0.1rem solid goldenrod;
    margin: 0.15rem;
  }
`;
const Projects = () => {
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
  return (
    <ProjectsFlexContainer>
      <PseudoElement></PseudoElement>
      <ProjectsContainer id="projects">
        <ProjectsGridContainer>
          <ProjectsGridHeader>
            <div>
              <ProjectsHeader
                ref={fourth}
                className={inViewFourth ? "typing-effect" : ""}
              >
                Projects
              </ProjectsHeader>
            </div>
          </ProjectsGridHeader>
          <ProjectsGridThird
            ref={third}
            className={inViewThird ? "animate" : ""}
          >
            <ProjectsCardHeader>Crypto info</ProjectsCardHeader>
            <ProjectsCardSubheader>
              <b>*App still in development</b>
              <br />
              An app containing info about biggest 500 crypto currencies. Each
              currency has charts containing price and volume info with
              different options.
            </ProjectsCardSubheader>

            <ProjectsCardFooterWrapper>
              <Tilt
                trackOnWindow={true}
                tiltMaxAngleX={20}
                tiltMaxAngleY={45}
                gyroscope={true}
              >
                <ProjectsCardFooter>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://cryptoinfo-iota.vercel.app/"
                  >
                    <LinkCodeText>Link:</LinkCodeText>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </ProjectsCardFooter>
              </Tilt>
              <Tilt
                trackOnWindow={true}
                tiltMaxAngleX={25}
                tiltMaxAngleY={45}
                gyroscope={true}
              >
                <ProjectsCardFooter>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JosipTadic/CryptoInfo"
                  >
                    <LinkCodeText>Code:</LinkCodeText>
                    <i className="fa-brands fa-github-square"></i>
                  </a>
                </ProjectsCardFooter>
              </Tilt>
            </ProjectsCardFooterWrapper>

            <ProjectsCardFooterInfo>
              <div>
                <TechSpan>
                  <TechText>HTML</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>CSS</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>TypeScript</TechText>
                </TechSpan>
              </div>
              <div>
                <TechSpan>
                  <TechText>React</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>Recharts</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>Bulma</TechText>
                </TechSpan>
              </div>
            </ProjectsCardFooterInfo>
          </ProjectsGridThird>
          <ProjectsGridSecond
            ref={second}
            className={inViewSecond ? "animate" : ""}
          >
            <ProjectsCardHeader>Gis app</ProjectsCardHeader>
            <ProjectsCardSubheader>
              Geovisualization of CoVid-19 Testing centers in Croatia. Enabled
              drawing and changing of maps. Created as a part of Master's
              Thesis.
              <br />
            </ProjectsCardSubheader>
            <ProjectsCardFooterWrapper>
              <Tilt
                trackOnWindow={true}
                tiltMaxAngleX={25}
                tiltMaxAngleY={45}
                gyroscope={true}
              >
                <ProjectsCardFooter>
                  <LinkCodeText>Link:</LinkCodeText>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gis-app.vercel.app/"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </ProjectsCardFooter>
              </Tilt>
              <Tilt
                trackOnWindow={true}
                tiltMaxAngleX={25}
                tiltMaxAngleY={45}
                gyroscope={true}
              >
                <ProjectsCardFooter>
                  <LinkCodeText>Code:</LinkCodeText>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JosipTadic/GisApp"
                  >
                    <i className="fa-brands fa-github-square"></i>
                  </a>
                </ProjectsCardFooter>
              </Tilt>
            </ProjectsCardFooterWrapper>
            <ProjectsCardFooterInfo>
              <div>
                <TechSpan>
                  <TechText>HTML</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>CSS</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>TypeScript</TechText>
                </TechSpan>
              </div>
              <div>
                <TechSpan>
                  <TechText>React</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>React-Leaflet(OSM)</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>React-Leaflet-Draw</TechText>
                </TechSpan>
              </div>
            </ProjectsCardFooterInfo>
          </ProjectsGridSecond>
          <ProjectsGridFirst
            ref={first}
            className={inViewFirst ? "animate" : ""}
          >
            <ProjectsCardHeader>D-Wiz - chart generator</ProjectsCardHeader>
            <ProjectsCardSubheader>
              This app is used for: generating and customizing charts via UI,
              downloading charts, upload .csv to chart, blog with news/posts.
            </ProjectsCardSubheader>
            <ProjectsCardFooterWrapper>
              <Tilt
                trackOnWindow={true}
                tiltMaxAngleX={25}
                tiltMaxAngleY={45}
                gyroscope={true}
              >
                <ProjectsCardFooter>
                  <LinkCodeText>Link:</LinkCodeText>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://iip2021.vercel.app/"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </ProjectsCardFooter>
              </Tilt>
              <Tilt
                trackOnWindow={true}
                tiltMaxAngleX={25}
                tiltMaxAngleY={45}
                gyroscope={true}
              >
                <ProjectsCardFooter>
                  <LinkCodeText>Code:</LinkCodeText>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JosipTadic/IIP2021"
                  >
                    <i className="fa-brands fa-github-square"></i>
                  </a>
                </ProjectsCardFooter>
              </Tilt>
            </ProjectsCardFooterWrapper>
            <ProjectsCardFooterInfo>
              <div>
                <TechSpan>
                  <TechText>HTML</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>CSS</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>Bootstrap</TechText>
                </TechSpan>

                <TechSpan>
                  <TechText>JavaScript</TechText>
                </TechSpan>
              </div>
              <div>
                <TechSpan>
                  <TechText>React</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>Recharts</TechText>
                </TechSpan>
                <TechSpan>
                  <TechText>Firebase</TechText>
                </TechSpan>
              </div>
            </ProjectsCardFooterInfo>
          </ProjectsGridFirst>
        </ProjectsGridContainer>
      </ProjectsContainer>
    </ProjectsFlexContainer>
  );
};

export default Projects;
