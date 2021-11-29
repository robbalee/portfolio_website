import React from 'react';
import { DiClojureAlt, DiCoda, DiCodepen, DiDreamweaver, DiFirebase, DiIe, DiMozilla, DiReact, DiSwift, DiUikit, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      As a computer Engineer i'm familiar with Electrical circuits and VLSI design. Computer programming is also a crucial tool in my arsenal.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experiece with <br />
            C++, Java, Javascript, HTML, mySql 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodepen size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Hardware design</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Electrical circuits and VLSI design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiUikit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiece with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
