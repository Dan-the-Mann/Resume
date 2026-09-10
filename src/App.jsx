import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import FancyLine from './components/FancyLine';
import Skills from './components/Skills';
import { getSection } from './helpers/resume';
import './App.css';

const App = React.forwardRef((props, ref) => {
  const data = getSection('App');

  return (
    <div className="App" ref={ref}>
      <div className='container'>
        <h1 className='name' style={{ marginTop: '0.25em' }}>{data['name']}</h1>
        <h3 className='title'>{data['title']}</h3>
        <p className='description'>{data['description'].join(" ")}</p>

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
        trigger={() => <button style={{ marginTop: '2em' }}>{`Print as PDF :)`}</button>}
        content={() => componentRef.current}
      />
    </div>
  )
}

export default AppToPrint;