import { styled, Box, Typography } from '@mui/material';

export const SectionNumberWrapper = styled(Box)(({ top = 0, left = 0 }) => ({
  position: 'absolute',
  left: `${left}px`,
  top: `${top}px`,
  transform: 'rotate(-90deg)',
  transformOrigin: '50% 20%',

  '@media(max-width: 1999px)': {
    transformOrigin: '28% 20%',
  },

  '@media(max-width: 859px)': {
    transformOrigin: '16% 20%',
  },
}));

export const SectionNumberContent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  & svg {
    transform: rotate(-90deg);
    width: 16px;
  }
`;

export const Tittle = styled(Typography)`
  ${({ theme }) => theme.typography.body1};
  font-size: 16px;
  line-height: 29px;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 20px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 14px;
    line-height: 26px;
  }
`;
