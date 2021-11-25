import React from 'react';

import { Section, SectionText, SectionTitle, SectionMiniTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm robel <br />
        </SectionTitle>
        <SectionMiniTitle main center>
          Welcome to my Personal Portfolio website
        </SectionMiniTitle>
        <SectionText>
        I am funny and witty person with common sense of hummor. I am a tech savvy person! i work on projects ranging from Defi to AI sytems.
        </SectionText>
        <Button onclick={props.handleClick}>Learn More</Button> {/*add Link to this button*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;