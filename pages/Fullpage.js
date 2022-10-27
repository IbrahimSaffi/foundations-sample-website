import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react'
import SectionOne from './Sections/SectionOne';
import SectionTwo from './Sections/SectionTwo';

export default function Fullpage() {
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <SectionOne/>
          </div>
          <div className="section">
          <SectionTwo/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  )
}

