import React from "react";
import styled from "styled-components";
import contactAnim from "../animations/contactAnimation3.json";
import { useLottie } from "lottie-react";
import { useInView } from "react-intersection-observer";
import slika1 from "../images/slika2.jpg";
import slika2 from "../images/slika3.jpg";

const ContactContainer = styled.section`
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
const ContactFlexContainer = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
  background-color: black;
  color: snow;
`;
const ContactHeader = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin: 0.5rem 0;
`;
const AboutMe = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0.5rem 0;
`;
const AboutMeText = styled.h2`
  font-size: 1.4rem;
  line-height: 1.9rem;
  font-weight: 500;
  text-align: center;
  padding: 15px;
  @media (max-width: 650px) {
    font-size: 1.25rem;
    line-height: 1.8rem;
    font-weight: 500;
    text-align: center;
    padding: 5px;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    padding: 0.25rem;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;
const ContactGrid = styled.div`
  display: grid;
  height: 90%;
  grid-template-columns: repeat(3, minmax(1px, 1fr));
  grid-template-rows: 1fr 0.5fr 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    "ContactText ContactText ContactAnimation"
    "ContactText ContactText ContactTextFirst"
    "ContactImageFirst ContactImageSecond ContactTextFirst";

  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(1px, 1fr));
    grid-template-rows: minmax(1px, 0.5fr) minmax(1px, 0.5fr) minmax(1px, 0.5fr) minmax(
        1px,
        1fr
      );
    gap: 5px 5px;
    grid-template-areas:
      "ContactText ContactText ContactText ContactText"
      "ContactText ContactText ContactText ContactText"
      "ContactAnimation ContactAnimation ContactImageFirst ContactImageSecond"
      "ContactTextFirst ContactTextFirst ContactTextFirst ContactTextFirst";
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    display: grid;
    height: 90%;
    grid-template-columns: 1fr 1fr 1.1fr;
    grid-template-rows: 1fr 0.1fr 1fr;
    gap: 0.1rem 0.1rem;
    grid-template-areas:
      "ContactText ContactText ContactAnimation"
      "ContactText ContactText ContactTextFirst"
      "ContactImageFirst ContactImageSecond ContactTextFirst";
  }
`;
const ContactText = styled.div`
  grid-area: ContactText;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 100ms;
`;
const ContactImageFirst = styled.div`
  grid-area: ContactImageFirst;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 300ms;
`;
const ContactImageSecond = styled.div`
  grid-area: ContactImageSecond;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 400ms;
`;
const ContactAnimation = styled.div`
  grid-area: ContactAnimation;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;
const ContactTextFirst = styled.div`
  grid-area: ContactTextFirst;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 800ms;
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    white-space: normal;
    height: 75%;
  }
`;
const ContactAnimationWrapper = styled.div`
  max-width: 300px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;
  align-items: center;
  justify-content: center;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 600ms;
`;
const ContactAnimationLink = styled.a`
  display: flex;
  @media (max-width: 650px) {
    width: 75%;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    width: 55%;
  }
`;
const ContactLink = styled.a`
  font-size: 1.28rem;
`;
const ContactCardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  opacity: 0;
  @media (max-width: 650px) {
    font-size: 1.8rem;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    margin-bottom: 0.15rem;
    padding: 0.1rem;
    font-size: 1.25rem;
  }
`;
const ContactCardSubheader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 2.4rem;
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 200ms;
`;
const ContactCardHeaderWrapper = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.25rem;
  border-bottom: 1px solid goldenrod;
`;
const ContactTextHeader = styled.h4`
  text-align: center;
  font-size: 1.4rem;
  white-space: normal;
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    font-size: 1.3rem;
  }
`;
const ContactImage = styled.img`
  max-width: 70%;
  max-height: 90%;
  border-radius: 25px 5px;
  @media only screen and (min-device-width: 480px) and (max-device-width: 950px) and (max-device-height: 600px) and (orientation: landscape) {
    max-width: 45%;
  }
`;
/*const ContactCardFooter = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;
const ContactCardFooterInfo = styled.p`
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
`;*/

const Contact = () => {
  const [first, inViewFirst] = useInView({
    threshold: 0.05,
  });
  const [second, inViewSecond] = useInView({
    threshold: 0.05,
  });
  const [third, inViewThird] = useInView({
    threshold: 0.05,
  });
  const [fourth, inViewFourth] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });
  const [fifth, inViewFifth] = useInView({
    threshold: 0.05,
  });
  const [sixth, inViewSixth] = useInView({
    threshold: 0.05,
  });
  const [seventh, inViewSeventh] = useInView({
    threshold: 0.05,
  });
  const options = {
    animationData: contactAnim,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <ContactFlexContainer>
      <PseudoElement></PseudoElement>
      <ContactContainer id="contact">
        <ContactCardHeaderWrapper>
          <div>
            <ContactHeader
              ref={fourth}
              className={inViewFourth ? "typing-effect" : ""}
            >
              Contact
            </ContactHeader>
          </div>
        </ContactCardHeaderWrapper>
        <ContactGrid>
          <ContactText ref={fifth} className={inViewFifth ? "animate" : ""}>
            <AboutMe>About me: </AboutMe>
            <AboutMeText>
              My name is Josip Tadić, I am a web developer. <br />
              My hobbies outside of IT world(which takes most of my time) are:
              Basketball(I played for 10 years, even at semi pro level) 🏀, Gym
              and other sports. I consider myself both 🐈 and 🐕 person. <br />
              Besides sports I like to enjoy nature 🌳 and meet new people and
              places.
              <br /> I also like cooking 🍽️ (and eating, ofc 😅) and oldtimer
              cars. <br /> I am trying to find the best in people and to be
              inspired by different personalities(doesn't matter sports or
              business).
              <br />
              <br /> In sections below you will find all relevant information
              about me. 👇🏾{" "}
            </AboutMeText>
          </ContactText>
          <ContactImageFirst
            ref={sixth}
            className={inViewSixth ? "animate" : ""}
          >
            <ContactImage src={slika1} alt="me in nature" />
          </ContactImageFirst>
          <ContactImageSecond
            ref={seventh}
            className={inViewSeventh ? "animate" : ""}
          >
            <ContactImage src={slika2} alt="me in city" />
          </ContactImageSecond>
          <ContactAnimation>
            <ContactAnimationWrapper
              ref={first}
              className={inViewFirst ? "animate" : ""}
            >
              <ContactAnimationLink href="mailto:josiptadic96@hotmail.com?subject=Hello">
                {View}
              </ContactAnimationLink>
              Click on animation to send a mail.
            </ContactAnimationWrapper>
          </ContactAnimation>
          <ContactTextFirst
            ref={third}
            className={inViewThird ? "animate" : ""}
          >
            <ContactCardHeader>
              <ContactTextHeader>
                Feel free to contact me about anything!
              </ContactTextHeader>
            </ContactCardHeader>
            <ContactCardSubheader
              ref={second}
              className={inViewSecond ? "animate" : ""}
            >
              Contact info: <br />
              <br />
              <ContactLink href="mailto:josiptadic96@hotmail.com?subject=Hello">
                📧 josiptadic96@hotmail.com{" "}
              </ContactLink>
              <br />
              <ContactLink href="tel:+385958647919">
                📞 +385 95 864 7919{" "}
              </ContactLink>
              <br />
              📍 Pula, Croatia <br />
              <br />
              <ContactLink
                target="_blank"
                href="https://www.linkedin.com/in/josip-tadi%C4%87-4206a3213/"
                rel="noopener noreferrer"
              >
                LinkedIn profile 🔗
              </ContactLink>
            </ContactCardSubheader>
          </ContactTextFirst>
        </ContactGrid>
      </ContactContainer>
    </ContactFlexContainer>
  );
};

export default Contact;
