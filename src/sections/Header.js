import React, { useState } from "react";
import styled from "styled-components";
import profilna from "../images/slika1.png";

const Container = styled.div`
  display: flex;
  color: #dad7cd;
  font-family: "Roboto Slab", serif;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  flex-direction: column;
  width: 27%;
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: #102542;
  z-index: 5;
  @media (max-width: 650px) {
    width: 100%;
    transform: translateX(100%);
    -webkit-transition: transform .65s ease;
    -moz-transition: transform .65s ease;
    -ms-transition: transform .65s ease;
    -o-transition: transform .65s ease;
    transition: transform .65s ease;
    row-gap: 0.05rem;
    justify-content: space-evenly;
  }
  @media only screen and (min-device-width: 480px) 
                   and (max-device-width: 950px) 
                   and (max-device-height: 600px) 
                   and (orientation: landscape) {
}
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 3.4rem;
  }
`;
const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  @media (max-width: 650px) {
    font-size: 2.5rem;
    margin-bottom: 0.25rem;
  }
`;
const TextHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 2rem;
  padding: 0 1.8rem;
  @media (max-width: 650px) {
    font-size: 1.8rem;
    line-height: 2.33rem;
    padding: 0 1.5rem;
  }
`;
const Subheader = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 2.5rem;
  @media (max-width: 650px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ExperienceLink = styled.a`
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  ${({ experienceActive }) =>
    experienceActive &&
    `
    text-decoration: underline;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all .65s ease;
    -moz-transition: all .65s ease;
    -ms-transition: all .65s ease;
    -o-transition: all .65s ease;
    transition: all .65s ease;
    `}
  &:hover {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
`;
const EducationLink = styled.a`
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  ${({ educationActive }) =>
    educationActive &&
    `
    text-decoration: underline;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all .65s ease;
    -moz-transition: all .65s ease;
    -ms-transition: all .65s ease;
    -o-transition: all .65s ease;
    transition: all .65s ease;
    `}
  &:hover {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
`;
const SkillsLink = styled.a`
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  ${({ skillsActive }) =>
    skillsActive &&
    `
    text-decoration: underline;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all .65s ease;
    -moz-transition: all .65s ease;
    -ms-transition: all .65s ease;
    -o-transition: all .65s ease;
    transition: all .65s ease;
    `}
  &:hover {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
`;
const ProjectLink = styled.a`
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  ${({ projectActive }) =>
    projectActive &&
    `
    text-decoration: underline;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all .65s ease;
    -moz-transition: all .65s ease;
    -ms-transition: all .65s ease;
    -o-transition: all .65s ease;
    transition: all .65s ease;
    `}
  &:hover {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
`;
const ContactLink = styled.a`
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  ${({ contactActive }) =>
    contactActive &&
    `
    text-decoration: underline;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all .65s ease;
    -moz-transition: all .65s ease;
    -ms-transition: all .65s ease;
    -o-transition: all .65s ease;
    transition: all .65s ease;
    `}
  &:hover {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
`;
const IconContainer = styled.div`
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 650px) {
    font-size: 5rem;
  }
`;
const LinkPadding = styled.a`
  -webkit-transform: skew(0deg);
  -moz-transform: skew(0deg);
  -ms-transform: skew(0deg);
  -o-transform: skew(0deg);
  transform: skew(0deg);
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  padding: 0 2.5rem;
  &:hover {
    -webkit-transform: skew(-10deg);
    -moz-transform: skew(-10deg);
    -ms-transform: skew(-10deg);
    -o-transform: skew(-10deg);
    transform: skew(-10deg);
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
`;
const MenuButton = styled.button`
  display: none;
  z-index: 10;
  position: fixed;
  right: 1%;
  top: 1%;
  font-size: 1.2rem;
  background: transparent;
  border: 2px solid goldenrod;
  border-radius: 10px;
  width: 75px;
  height: 30px;
  color: white;
  &:hover{
    border: 2px solid gold;
  }
  
  @media (max-width: 650px) {
    display: inline-block;
  }
`;

const Header = ({
  experienceActive,
  educationActive,
  skillsActive,
  projectActive,
  contactActive,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div>
        {showMenu ? (
          <MenuButton onClick={() => setShowMenu(false)}>
            Menu!
          </MenuButton>
        ) : (
          <MenuButton onClick={() => setShowMenu(true)}>
            Menu!
          </MenuButton>
        )}
      </div>
      <Container className={showMenu ? "open-menu": "close-menu"}>
        <Title>JOSIP TADIĆ</Title>
        <Subtitle>Web developer</Subtitle>
        <img className="image-landscape-only" src={profilna} alt="profile" />
        <TextHeader>
          Master's in Information Technologies, experience in Development,
          QA/Support. Interested in Frontend development or full stack.
          Preferably React(possibly Vue or Angular).
          <br /> Using English and Croatian in business comunication.
        </TextHeader>
        <IconContainer>
          <LinkPadding
            target="_blank"
            href="https://www.linkedin.com/in/josip-tadi%C4%87-4206a3213/"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </LinkPadding>
          <LinkPadding
            target="_blank"
            href="https://github.com/JosipTadic"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </LinkPadding>
        </IconContainer>
        <LinkWrapper>
          <ExperienceLink
            href="#experience" 
            onClick={() => setShowMenu(false)}
            experienceActive={experienceActive}
          >
            <Subheader>Experience</Subheader>
          </ExperienceLink>
          <SkillsLink href="#skills" onClick={() => setShowMenu(false)} skillsActive={skillsActive}>
            <Subheader>Skills</Subheader>
          </SkillsLink>
          <ProjectLink href="#projects" onClick={() => setShowMenu(false)} projectActive={projectActive}>
            <Subheader>Projects</Subheader>
          </ProjectLink>
          <EducationLink href="#education" onClick={() => setShowMenu(false)} educationActive={educationActive}>
            <Subheader>Education</Subheader>
          </EducationLink>
          <ContactLink href="#contact" onClick={() => setShowMenu(false)} contactActive={contactActive}>
            <Subheader>Contact</Subheader>
          </ContactLink>
        </LinkWrapper>
      </Container>
    </>
  );
};

export default Header;
