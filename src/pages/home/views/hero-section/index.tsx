import { useTheme, useMediaQuery } from '@mui/material';
import React, { ReactElement } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import HeroBanner1 from '~/assets/images/hero-banner-1.png';
import HeroBanner2 from '~/assets/images/hero-banner-2.png';
import HeroBanner3 from '~/assets/images/hero-banner-3.png';
import SectionNumber from '~/components/section-number';

import {
  SectionWrapper,
  ContentSectionWrapper,
  ContentSection,
  TittleTop,
  BannerImageWrapper,
  BannerImage,
  HeaderButton,
  LinkButton,
} from './heroSection.styled';

const sectionNumber = `01/04`;
const sliderContent = [
  { image: HeroBanner1, title: 'If you find it hard catching up on the latest events in crypto.' },
  { image: HeroBanner2, title: 'If you happen to lose track of your assets and the best way of their allocation.' },
  {
    image: HeroBanner3,
    title: 'If your asset management pace can’t keep up with the rapidly evolving and aggressively fluctuating market.',
  },
];

export default function HeroSection(): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionWrapper id='hero'>
      <ContentSectionWrapper>
        <SectionNumber title={sectionNumber} top={isMobile ? 294 : 520} left={isMobile ? 0 : 40} />
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          emulateTouch
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}>
          {sliderContent.map(({ image, title }, index) => (
            <ContentSection key={`banner-item-${index}`}>
              <TittleTop>{title}</TittleTop>
              <BannerImageWrapper>
                <BannerImage src={image} alt='Banner' />
              </BannerImageWrapper>
            </ContentSection>
          ))}
        </Carousel>
        <LinkButton href={process.env.REACT_APP_BOT_URL} target='_blank'>
          <HeaderButton>Try it out!</HeaderButton>
        </LinkButton>
      </ContentSectionWrapper>
    </SectionWrapper>
  );
}
