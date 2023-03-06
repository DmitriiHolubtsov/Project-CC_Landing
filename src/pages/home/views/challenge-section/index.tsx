import { useTheme, useMediaQuery } from '@mui/material';
import React, { ReactElement } from 'react';

import bannerImg from '~/assets/images/challenge-banner.png';
import SectionNumber from '~/components/section-number';

import {
  SectionWrapper,
  ContentSectionWrapper,
  ContentSection,
  TextContentWrapper,
  TextContent,
  BannerImage,
} from './challengeSection.styled';

const sectionNumber = `02/04`;
const textItems = [
  { text: `If you’ve joined the NEAR ecosystem and can’t pick the best set of NEAR products to use.` },
  { text: `If you need help with coordination among NEAR assets and relevant solution for their management.` },
  {
    text: `If you don’t have enough time to explore NEAR ecosystem, while your assets already require proper attitude.`,
  },
];

export default function ChallengeSection(): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionWrapper id='challenge'>
      <ContentSectionWrapper>
        <ContentSection>
          <SectionNumber title={sectionNumber} top={isMobile ? 102 : 146} />
          <BannerImage src={bannerImg} alt='Banner' />
          <TextContentWrapper>
            {textItems.map(({ text }, index) => (
              <TextContent key={`text-content-item-${index}`}>{text}</TextContent>
            ))}
          </TextContentWrapper>
        </ContentSection>
      </ContentSectionWrapper>
    </SectionWrapper>
  );
}
