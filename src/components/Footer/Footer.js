import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubsciption,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
} from "./Footer.elements";
import ImgIcon from "../../images/e8bb41c752d944adbcddb6f6a7e4c2a3.png";
import { NavIcon } from "../Navbar/Navbar.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubsciption>
        <FooterSubHeading>
          Join our exclusive membership to recieve the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="YourEmail" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubsciption>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it Works</FooterLink>
            <FooterLink to="/">Our Mission</FooterLink>
            <FooterLink to="/">Our Story</FooterLink>
            <FooterLink to="/">Our History</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">Customer Support</FooterLink>
            <FooterLink to="/">Portsmouth, NH</FooterLink>
            <FooterLink to="/">Dublin</FooterLink>
            <FooterLink to="/">Singapore</FooterLink>
            <FooterLink to="/">Sydney</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Partners</FooterLinkTitle>
            <FooterLink to="/sign-up">All Partner</FooterLink>
            <FooterLink to="/">Solution Partner</FooterLink>
            <FooterLink to="/">Affiliate</FooterLink>
            <FooterLink to="/">App Partner</FooterLink>
            <FooterLink to="/">HubSpot for SU</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Destinations</FooterLinkTitle>
            <FooterLink to="/sign-up">United States</FooterLink>
            <FooterLink to="/">Canada</FooterLink>
            <FooterLink to="/">United Kingdom</FooterLink>
            <FooterLink to="/">Australia</FooterLink>
            <FooterLink to="/">New Zealand</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <NavIcon src={ImgIcon} />
          </SocialLogo>
          <WebsiteRights>All right reserved to GetVisa 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
