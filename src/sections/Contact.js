import React from "react";
import styled from "styled-components";
import contactAnim from "../animations/contactAnimation3.json";
import { useLottie } from "lottie-react";
import { useInView } from "react-intersection-observer";

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
const ContactText = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ContactContext = styled.div`
  display: flex;
  width: 100%;
  height: 88%;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const ContactAnimationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 92%;
  opacity: 0;
  align-items: center;
  justify-content: center;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 75ms;
`;
const ContactAnimationLink = styled.a`
  display: flex;
  height: 100%;
  width: 40%;
`;
const ContactCardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  opacity: 0;
  transform: translateY(-50px);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  transition-delay: 150ms;
`;
const ContactCardSubheader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
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
        <ContactContext>
          <ContactText>
            <ContactCardHeader
              ref={third}
              className={inViewThird ? "animate" : ""}
            >
              Feel free to contact me about anything!
            </ContactCardHeader>
            <ContactCardSubheader
              ref={second}
              className={inViewSecond ? "animate" : ""}
            >
              Click on animation to send a mail. <br />
              josiptadic96@hotmail.com <br />
              <br />
              Or use LinkedIn link you see in the header/menu.
            </ContactCardSubheader>
          </ContactText>
          <ContactAnimationWrapper
            ref={first}
            className={inViewFirst ? "animate" : ""}
          >
            <ContactAnimationLink href="mailto:josiptadic96@hotmail.com?subject=Hello">
              {View}
            </ContactAnimationLink>
          </ContactAnimationWrapper>
        </ContactContext>
      </ContactContainer>
    </ContactFlexContainer>
  );
};

export default Contact;