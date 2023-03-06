import { Box } from '@mui/material';
import React, { ReactElement } from 'react';

import Footer from '~/components/footer';
import Header from '~/components/header';

import { HomeSectionContainer } from './home.styled';
import ChallengeSection from './views/challenge-section';
import HeroSection from './views/hero-section';
import SolutionSection from './views/solution-section';
import TrySection from './views/try-section';

export default function Home(): ReactElement {
  return (
    <Box width='100%'>
      <HomeSectionContainer>
        <Header />
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <TrySection />
        <Footer />
      </HomeSectionContainer>
    </Box>
  );
}
