import { styled, Box, Typography, Button, Link } from '@mui/material';
import ProblemSectionBcg from '~/assets/images/gradient-top.png';

export const SectionWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  background-image: url(${ProblemSectionBcg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-snap-align: center;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 75px;
    padding-bottom: 40px;
    height: 100%;
  }
`;

export const ContentSectionWrapper = styled(Box)`
  max-width: 1325px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100%;
    justify-content: center;
  }
`;

export const ContentSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  position: relative;
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100%;
  }
`;

export const TittleTop = styled(Typography)`
  max-width: 780px;
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.typography.h1};
  font-weight: 400;
  font-size: 32px;
  line-height: 59px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 22px;
    line-height: 31px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 294px;
  }
`;

export const BannerImageWrapper = styled(Box)`
  max-width: 420px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 298px;
  }
`;

export const BannerImage = styled('img')`
  width: 100%;
  margin-bottom: 50px;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  max-width: 265px;
  width: 100%;
`;

export const HeaderButton = styled(Button)`
  margin-top: 28px;
  padding-bottom: 10px;
  text-transform: none;
  border-radius: 37px;
  max-width: 265px;
  width: 100%;
  font-family: Lato, sans-serif;
  background: linear-gradient(95.56deg, #874da2 0.25%, #c43a30 104.71%);
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 0.2s ease;
  display: none;
  height: 53px;
  font-weight: 700;
  font-size: 18px;
  line-height: 33px;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: block;
  }
`;
