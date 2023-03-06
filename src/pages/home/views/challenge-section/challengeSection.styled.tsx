import { styled, Box, Typography } from '@mui/material';

export const SectionWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 60px;
    padding-bottom: 50px;
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
    justify-content: start;
    height: 100%;
  }
`;

export const ContentSection = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  column-gap: 55px;
  padding-left: 132px;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const TextContentWrapper = styled(Box)`
  max-width: 466px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  row-gap: 61px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding-right: 16px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    row-gap: 30px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const TextContent = styled(Typography)`
  ${({ theme }) => theme.typography.body1};
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const BannerImage = styled('img')`
  max-width: 590px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    width: 100%;
    max-width: 395px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    max-width: 495px;
    order: 1;
    margin-top: 40px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 295px;
  }
`;
