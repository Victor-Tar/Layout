import React from 'react';
import './Section.css';

const Section = ({ title, padding, isSpoiler, children }) => (
  <section className={`section ${padding}`}>
    {
      isSpoiler
        ? (
          <div className='spoiler'>
            <h3 className='section_title'>{title}</h3>
            <button className='spoiler_button' />
          </div>
        )
        : <h3 className='section_title'>{title}</h3>
    }
    
    { children }
  </section>
)

export default Section;
