import { styled, Box } from '@mui/material';
import palette from '~/cdk/theme/palette';

export const HomeSectionContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  overflow-y: scroll;
  overscroll-behavior-y: smooth;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  background: ${palette.gradientDark};

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100%;
    overflow-y: auto;
    overflow: visible;
    overscroll-behavior-y: none;
    scroll-snap-type: none;
  }
`;
