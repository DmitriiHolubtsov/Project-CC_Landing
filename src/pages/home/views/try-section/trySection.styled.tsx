import { styled, Box, Typography, Button, Link } from '@mui/material';
import ProblemSectionBcg from '~/assets/images/gradient-top.png';
const IMAGE_TRANSITION = 'all 0.5s ease';
const IMAGE_LEFT_OFFSET = 232;

export const SectionWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100%;
  }
`;

export const ContentSectionWrapper = styled(Box)`
  max-width: 1325px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100%;
  }
`;

export const ContentSection = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  position: relative;
  background-image: url(${ProblemSectionBcg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 32px;
  min-height: 596px;
  padding-left: 165px;
  width: 100%;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down('md')} {
    border-radius: 0;
    padding-left: 50px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    padding-left: 0;
    border-radius: 0;
    overflow: visible;
    height: 100%;
    padding-bottom: 40px;
    min-height: unset;
  }
`;

export const TextContentWrapper = styled(Box)`
  width: 100%;
  max-width: 426px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  row-gap: 43px;
  padding-top: 90px;
  align-self: flex-start;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 40px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 40px 16px 40px 50px;
  }
`;

export const TextContent = styled(Typography)`
  ${({ theme }) => theme.typography.body1};
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
`;

export const StyledText = styled('span')`
  font-weight: 600;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  max-width: 180px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const TryItButton = styled(Button)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: none;
  border-radius: 37px;
  font-family: Lato, sans-serif;
  background: linear-gradient(95.56deg, #874da2 0.25%, #c43a30 104.71%);
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    height: 53px;
  }
`;

export const ImagesWrapper = styled(Box)`
  height: 100%;
  width: 952px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  transition: all 0.5s ease;
  margin-left: 133px;

  &:hover {
    margin-left: 40px;
    margin-top: 16px;
    transition: ${IMAGE_TRANSITION};

    & > img {
      width: 204px;
      height: 370px;
      top: 76px;
      transition: ${IMAGE_TRANSITION};
      cursor: default;
    }

    & img:first-of-type {
      top: 123px;
      left: 0;
    }

    & img:nth-of-type(2) {
      top: -201px;
      left: ${IMAGE_LEFT_OFFSET}px;
    }

    & img:nth-of-type(3) {
      top: 196px;
      left: ${IMAGE_LEFT_OFFSET}px;
    }

    & img:nth-of-type(4) {
      left: ${IMAGE_LEFT_OFFSET * 2}px;
      top: 50px;
    }

    & img:last-of-type {
      left: ${IMAGE_LEFT_OFFSET * 2}px;
      top: 447px;
    }
  }
`;

export const BannerImage = styled('img')`
  position: absolute;
  height: auto;
  transition: ${IMAGE_TRANSITION};

  &:first-of-type {
    width: 216px;
    left: 0;
    top: 93px;
  }

  &:nth-of-type(2) {
    width: 235px;
    left: 114px;
    top: 76px;
  }

  &:nth-of-type(3) {
    width: 257px;
    max-height: 462px;
    left: 263px;
    top: 57px;
    z-index: 2;
  }

  &:nth-of-type(4) {
    width: 257px;
    max-height: 362px;
    left: 422px;
    top: 76px;
  }

  &:last-of-type {
    width: 236px;
    left: 422px;
    top: 76px;
    z-index: 1;
  }
`;

export const BannerSlide = styled('img')`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 320px;
  }
`;

export const LinkButtonMobile = styled('a')`
  display: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 72px;
    display: block;
    text-decoration: none;
    max-width: 180px;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 265px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;

export const CarouselWrapper = styled(Box)`
  & .slider-wrapper {
    height: 400px;

    & img {
      max-width: 194px;
      height: 350px;
    }
  }
`;
