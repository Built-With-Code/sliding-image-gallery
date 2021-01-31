/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useEffect, useRef } from 'react'
import { TweenLite } from 'gsap'

import './App.css';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

import data from './assets/data';

const appStyles = css`
display: flex;
height: 100vh;
align-items: stretch;

visibility: hidden;
`

function App() {
  let app = useRef(null)

  useEffect(() => {
    TweenLite.to(app, 0, {
      css: {
        visibility: 'visible'
      }
    })
  }, [])

  return (
    <div className="App" css={appStyles} ref={el => app = el}>
      <Navbar />
      <Gallery data={data} />
    </div>
  );
}

export default App;
