import React, { ReactElement } from 'react';

import { ArrowUpIcon, ArrowDownIcon } from '~/assets/images';

import { SectionNumberContent, SectionNumberWrapper, Tittle } from './sectionNumber.styled';

interface SectionNumberProps {
  title: string;
  left?: number;
  top?: number;
}

export default function SectionNumber({ title, top, left }: SectionNumberProps): ReactElement {
  return (
    <SectionNumberWrapper top={top} left={left}>
      <SectionNumberContent>
        <ArrowUpIcon />
        <Tittle>{title}</Tittle>
        <ArrowDownIcon />
      </SectionNumberContent>
    </SectionNumberWrapper>
  );
}
