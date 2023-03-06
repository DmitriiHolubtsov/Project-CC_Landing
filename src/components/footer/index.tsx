import { format } from 'date-fns';
import React, { ReactElement } from 'react';

import { Logo, TwitterIcon, DiscordIcon } from '~/assets/images';
import { AppRoutes } from '~/cdk/enums';

import {
  FooterWrapper,
  LinksTopSection,
  HomeLink,
  FooterNavigation,
  NavLinkStyled,
  CopyrightText,
  FooterContainer,
  SocialMediaContainer,
  SocialMediaLinkWrapper,
  SocialMediaLink,
} from './footer.styled';

interface SocialMedia {
  id: number;
  icon: JSX.Element;
  path: string;
}

const SOCIAL_MEDIA: SocialMedia[] = [
  { id: 1, icon: <TwitterIcon />, path: 'https://twitter.com/nearprotocol' },
  { id: 2, icon: <DiscordIcon />, path: 'http://near.chat/' },
];

export default function Footer(): ReactElement {
  const year = format(new Date(), 'yyyy');

  return (
    <FooterWrapper>
      <FooterContainer>
        <LinksTopSection>
          <HomeLink to={AppRoutes.Home}>
            <Logo />
          </HomeLink>
          <FooterNavigation>
            <NavLinkStyled smooth to={AppRoutes.PrivacyPolicy}>
              Privacy Policy
            </NavLinkStyled>
            <NavLinkStyled smooth to={AppRoutes.TermsAndConditions}>
              Terms & Conditions
            </NavLinkStyled>
          </FooterNavigation>
        </LinksTopSection>

        <SocialMediaContainer>
          {SOCIAL_MEDIA.map(({ icon, path, id }) => (
            <SocialMediaLinkWrapper key={`social-item-${id}`}>
              <SocialMediaLink target='_blank' rel='noopener noreferrer' href={path}>
                {icon}
              </SocialMediaLink>
            </SocialMediaLinkWrapper>
          ))}
        </SocialMediaContainer>

        <CopyrightText>{year} © NEAR.org is run by NEAR Foundation</CopyrightText>
      </FooterContainer>
    </FooterWrapper>
  );
}
