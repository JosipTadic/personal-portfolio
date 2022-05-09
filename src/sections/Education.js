import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import learnAnim from "../animations/codeAnimation.json";
import { useLottie } from "lottie-react";

const EducationContainer = styled.section`
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
const EducationFlexContainer = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;

  color: snow;
`;

const EducationGridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(1rem, 1fr));
  grid-template-rows: 0.1fr minmax(1rem, 1fr);
  gap: 1.5rem 1.5rem;
  grid-template-areas:
    "education-grid-header education-grid-header education-grid-header"
    "education-grid-third education-grid-second education-grid-first";

  @media all and (-ms-high-contrast: none) {
    display: -ms-grid;
    -ms-grid-columns: repeat(3, minmax(1rem, 1fr));
    -ms-grid-rows: 0.2fr minmax(1rem, 1fr);
    gap: 1.5rem 1.5rem;
  }
  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr repeat(3, 1fr);
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "education-grid-header"
      "education-grid-third"
      "education-grid-second"
      "education-grid-first";

    @media all and (-ms-high-contrast: none) {
      .container {
        display: -ms-grid;
        -ms-grid-columns: 1fr;
        -ms-grid-rows: 0.2fr repeat(3, 1fr);
      }
    }
  }
`;
const EducationGridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid goldenrod;
  grid-area: education-grid-header;

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
const EducationGridThird = styled.div`
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
  grid-area: education-grid-third;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 0;
  }
  @media (max-width: 650px) {
    @media all and (-ms-high-contrast: none) {
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 0;
    }
  }
`;
const EducationGridSecond = styled.div`
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
  grid-area: education-grid-second;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }
  @media (max-width: 650px) {
    @media all and (-ms-high-contrast: none) {
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: -1;
    }
  }
`;
const EducationGridFirst = styled.div`
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
  grid-area: education-grid-first;

  @media all and (-ms-high-contrast: none) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 2;
  }
  @media (max-width: 650px) {
    @media all and (-ms-high-contrast: none) {
      -ms-grid-row: 4;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: -2;
    }
  }
`;
const EducationHeader = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`;
const EducationCardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 2px solid goldenrod;
  text-align: center;
  margin-bottom: 1.5rem;
`;
const EducationCardSubheader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
  opacity: 0.95;
`;
const EducationCardFooter = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  opacity: 0.9;
`;
const EducationCardFooterInfo = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.88;
`;
const Lotti = styled.div`
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
  @media (max-width: 650px) {
    justify-content: center;
    padding-right: 0;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    width: 30%;
    margin-left: 41%;
  }
`;

const Education = () => {
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
    animationData: learnAnim,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <EducationFlexContainer>
        <PseudoElement></PseudoElement>
        <EducationContainer id="education">
          <EducationGridContainer>
            <EducationGridHeader>
              <div>
                <EducationHeader
                  ref={fourth}
                  className={inViewFourth ? "typing-effect" : ""}
                >
                  Education
                </EducationHeader>
              </div>
            </EducationGridHeader>
            <EducationGridThird
              ref={third}
              className={inViewThird ? "animate" : ""}
            >
              <EducationCardHeader>Master</EducationCardHeader>
              <EducationCardSubheader>
                Faculty of Informatics Pula
                <br />
                Information Technologies
              </EducationCardSubheader>
              <EducationCardFooter>2019 - 2021</EducationCardFooter>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fipu.unipu.hr/fipu/studijski_programi/diplomski_sveucilisni_studij_informatika"
              >
                <EducationCardFooterInfo>
                  Click here for more info.
                </EducationCardFooterInfo>
              </a>
            </EducationGridThird>
            <EducationGridSecond
              ref={second}
              className={inViewSecond ? "animate" : ""}
            >
              <EducationCardHeader>Bachelor</EducationCardHeader>
              <EducationCardSubheader>
                Faculty of Informatics Pula
                <br />
                Information Technologies
              </EducationCardSubheader>
              <EducationCardFooter>2015 - 2019</EducationCardFooter>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fipu.unipu.hr/fipu/studijski_programi/preddiplomski_sveucilisni_studij_informatika"
              >
                <EducationCardFooterInfo>
                  Click for more info.
                </EducationCardFooterInfo>
              </a>
            </EducationGridSecond>
            <EducationGridFirst
              ref={first}
              className={inViewFirst ? "animate" : ""}
            >
              <EducationCardHeader>High school</EducationCardHeader>
              <EducationCardSubheader>
                Technical school Pula
                <br />
                Geodetic technician
              </EducationCardSubheader>
              <EducationCardFooter>2010 - 2014</EducationCardFooter>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://ss-tehnicka-pu.skole.hr/"
              >
                <EducationCardFooterInfo>
                  Click for more info.
                </EducationCardFooterInfo>
              </a>
            </EducationGridFirst>
          </EducationGridContainer>
        </EducationContainer>
        <Lotti>{View}</Lotti>
      </EducationFlexContainer>
    </>
  );
};

export default Education;
