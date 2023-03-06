import { useMediaQuery, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';

import screen1 from '~/assets/images/screenshots-mobile/screen-mobile-1.png';
import screen2 from '~/assets/images/screenshots-mobile/screen-mobile-2.png';
import screen3 from '~/assets/images/screenshots-mobile/screen-mobile-3.png';
import screen4 from '~/assets/images/screenshots-mobile/screen-mobile-4.png';
import screen5 from '~/assets/images/screenshots-mobile/screen-mobile-5.png';
import SectionNumber from '~/components/section-number';

import {
  SectionWrapper,
  ContentSectionWrapper,
  TextContentWrapper,
  TextContent,
  TryItButton,
  BannerImage,
  ContentSection,
  ImagesWrapper,
  BannerSlide,
  LinkButton,
  LinkButtonMobile,
  CarouselWrapper,
} from './trySection.styled';

const sectionNumber = `04/04`;
const textItems = [
  {
    text: (
      <span>
        <span style={{ fontWeight: 600 }}>NEAR Crypto Concierge</span> is a centralized one-stop shop for asset
        management of the fastest and most reliable decentralized ecosystem that NEAR Protocol offers.
      </span>
    ),
  },
  {
    text: (
      <span>
        Launch our <span style={{ fontWeight: 600 }}>telegram bot</span>, connect your wallet, choose the needed option
        and enjoy NEAR at its best.
      </span>
    ),
  },
];

const bannerImage = [
  { image: screen1 },
  { image: screen2 },
  { image: screen3 },
  { image: screen4 },
  { image: screen5 },
];

export default function TrySection(): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionWrapper id='tryItOut'>
      <ContentSectionWrapper>
        <ContentSection>
          <SectionNumber title={sectionNumber} top={isMobile ? 143 : 176} />
          <TextContentWrapper>
            {textItems.map(({ text }, index) => (
              <TextContent key={`text-content-item-${index}`}>{text}</TextContent>
            ))}
            <LinkButton href={process.env.REACT_APP_BOT_URL} target='_blank'>
              <TryItButton>Try it out!</TryItButton>
            </LinkButton>
          </TextContentWrapper>

          {isMobile ? (
            <CarouselWrapper>
              <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                emulateTouch
                preventMovementUntilSwipeScrollTolerance
                swipeScrollTolerance={50}>
                {bannerImage.map(({ image }, index) => (
                  <BannerSlide src={image} key={`Banner-${index}`} alt='Banner' />
                ))}
              </Carousel>
            </CarouselWrapper>
          ) : (
            <ImagesWrapper>
              {bannerImage.map(({ image }, index) => (
                <BannerImage src={image} key={`Banner-${index}`} alt='Banner' />
              ))}
            </ImagesWrapper>
          )}
          <LinkButtonMobile href={process.env.REACT_APP_BOT_URL} target='_blank'>
            <TryItButton>Try it out!</TryItButton>
          </LinkButtonMobile>
        </ContentSection>
      </ContentSectionWrapper>
    </SectionWrapper>
  );
}
