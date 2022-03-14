import React from 'react';
import Link from 'next/link';

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
          Welcome to my personal Portfolio website, Rahile. give a me a call :)
        </SectionMiniTitle>
        <SectionText>
        I am 5th year computer engineering Student at aastu. Mostly I show up at 8:00am in aastu computer-vision lab and do my projects. If I am not working, I like doing workouts, music and football. 
        </SectionText>
        <Button onclick={props.handleClick}><Link href="#about"> Learn More </Link></Button> {/*add Link to this button*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
