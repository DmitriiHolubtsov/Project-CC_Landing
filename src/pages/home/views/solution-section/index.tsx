import { useTheme, useMediaQuery } from '@mui/material';
import React, { ReactElement } from 'react';

import bannerImg from '~/assets/images/solution-banner.png';
import SectionNumber from '~/components/section-number';

import {
  SectionWrapper,
  ContentSection,
  ContentSectionWrapper,
  TextContentWrapper,
  TextContentTitle,
  TextContentSubTitle,
  TextContent,
  BannerImage,
} from './solutionSection.styled';

const title = `We’ve got you covered!`;
const subTitle = `All you need – is here, in one tap.`;
const sectionNumber = `03/04`;
const textItems = [
  { text: `Should you already have a NEAR Wallet and some tokens purchased and ready for swap.` },
  { text: `Or if you want to purchase an NFT – or even sell your own one.` },
  {
    text: `Or should you be eager to go big and reinvest by expanding your portfolio – singlehandedly or with the help of our advisory reports.`,
  },
];

export default function SolutionSection(): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionWrapper id='solution'>
      <ContentSectionWrapper>
        <ContentSection>
          <SectionNumber title={sectionNumber} top={isMobile ? 105 : 186} />
          <TextContentWrapper>
            <TextContentTitle>{title}</TextContentTitle>
            {textItems.map(({ text }, index) => (
              <TextContent key={`text-content-item-${index}`}>{text}</TextContent>
            ))}
            <TextContentSubTitle>{subTitle}</TextContentSubTitle>
          </TextContentWrapper>
          <BannerImage src={bannerImg} alt='Banner' />
        </ContentSection>
      </ContentSectionWrapper>
    </SectionWrapper>
  );
}
