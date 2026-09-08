import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import FancyLine from './components/FancyLine';
import Skills from './components/Skills';
import './App.css';

const App = React.forwardRef((props, ref) => {
  return (
    <div className="App" ref={ref}>
      <div className='container'>
        <h1 className='name' style={{ marginTop: '0.25em' }}>Daniel Mann</h1>
        <h3 className='title'>Software Developer</h3>
        <p className='description'>
          Innovative and results-driven software developer with an enthusiasm for tackling complex challenges and crafting elegant solutions.
          With a passion for continuous learning,
          I'm eager to embrace the newest technologies and industry best practices to continue personal growth and deliver high-quality code.
          Leveraging a strong foundation in problem-solving and a creative mindset,
          I thrive in collaborative environments and excel at developing user-centric applications.
        </p>

        <Contact />

        <Skills />

        <FancyLine
          color1='#373a41'
          color2='steelblue'
          color3='lightblue'
          size='5px'
        />

        <Experience />

        <FancyLine
          color1='#373a41'
          color2='steelblue'
          color3='lightblue'
          size='5px'
        />

        <Education />
      </div>

      {/* Keywords */}

    </div>
  );
});

const AppToPrint = () => {
  const componentRef = useRef(null);

  return (
    <div>
      <App ref={componentRef} />

      <ReactToPrint
        trigger={() => <button style={{ marginTop: '1em' }}>{`Print as PDF :)`}</button>}
        content={() => componentRef.current}
      />
    </div>
  )
}

export default AppToPrint;