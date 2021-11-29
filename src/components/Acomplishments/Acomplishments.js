import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  number: null, text: 'Huawei Ambassader to AASTU'},
  { number: 2, text: '300+ Linkdin weekly impresion', },
  { number: 1900, text: 'Representative for GC computer engineering batch', },
  { number: 5000, text: 'Internship at Investment Consultancy firm', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/*<BoxNum>{`${card.number}+`}</BoxNum> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
