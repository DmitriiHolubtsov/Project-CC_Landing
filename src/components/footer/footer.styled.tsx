import { styled, Box, Typography } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import palette from '~/cdk/theme/palette';

export const FooterWrapper = styled(Box)`
  width: 100%;
  background: ${palette.gradientDark};
  scroll-snap-align: center;
`;

export const FooterContainer = styled(Box)`
  min-height: 174px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 35px;
  padding-bottom: 35px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 0 32px;
  }

  ${({ theme }) => theme.breakpoints.down(860)} {
    padding: 48px 16px 20px;
    column-gap: 10px;
  }
`;

export const LinksTopSection = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
  }
`;

export const HomeLink = styled(HashLink)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    max-width: 75px;
    height: 20px;
    vertical-align: middle;
  }
`;

export const FooterNavigation = styled('nav')`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 82px;
  padding-top: 4px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    order: 1;
  }

  ${({ theme }) => theme.breakpoints.down(860)} {
    column-gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 28px;
    row-gap: 16px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
  }
`;

export const NavLinkStyled = styled(HashLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 16px;
  line-height: 29px;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-weight: 300;
  }
`;

export const SocialMediaContainer = styled('nav')`
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 62px;
    margin-bottom: 18px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
`;

export const SocialMediaLinkWrapper = styled(Box)`
  padding: 0 18px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-left: 0;
  }
`;

export const SocialMediaLink = styled('a')`
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease;
    cursor: pointer;
  }
`;

export const CopyrightText = styled(Typography)`
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.text.primary};
  letter-spacing: 0.02em;
  line-height: '29px';

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 14px;
  }
`;
