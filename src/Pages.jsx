import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Page from './Page'
import './App.css'

///////////////////////////////////////////////////////////////
// Page Tranistions
// 
// This example transitions between "Page" components. 
// These "Pages" animate in and out using AnimatePresence. 
// The "Page" is a container than animates, sliding to the 
// left or right and fading out. 
// In this example the content of each "page" comes along for 
// the ride and transitions with the page. 
// 

const buttonStyles = 'block py-1 px-2 m-1 bg-slate-900 text-white rounded cursor-pointer select-none border border-black'

function Pages() {
  const [pageName, setPageName] = useState('A')

  // Pages 
  const pages = {
    A: <Page key="page-A">
        {/* Inlcude children components */}
        <h1
          className='text-4xl'
        >Hello</h1>
        <p>Used as a greeting or to begin a phone conversation.</p>
      </Page>,
    B: <Page key="page-B">
      <h1
          className='text-4xl'
        >World</h1>
        <p>The earth, together with all of its countries, peopls, and natural features</p>
      </Page>,
    C: <Page key="page-C">
        <h1
          className='text-4xl'
        >Foo</h1>
        <p>foobar a metasycratic variable name.</p>
      </Page>,
    D: <Page key="page-D">
        <h1
          className='text-4xl'
        >Bar</h1>
        <p>a long rod or rigid peice of wood, metal, or other material.</p>
      </Page>
  }

  return (
    <div
      className='h-screen flex flex-col justify-center items-center'
    >
      <header
        className='flex'
      >
        <motion.a
          className={clsx(buttonStyles, pageName === 'A' ? 'bg-white !text-black' : null)}
          onClick={() => setPageName('A')}
        >Page A</motion.a>
        <motion.a
          className={clsx(buttonStyles, pageName === 'B' ? 'bg-white !text-black' : null)}
          onClick={() => setPageName('B')}
        >Page B</motion.a>
        <motion.a
          className={clsx(buttonStyles, pageName === 'C' ? 'bg-white !text-black' : null)}
          onClick={() => setPageName('C')}
        >Page C</motion.a>
        <motion.a
          className={clsx(buttonStyles, pageName === 'D' ? 'bg-white !text-black' : null)}
          onClick={() => setPageName('D')}
        >Page D</motion.a>
      </header>

      <div>
        {/* Use mode='wait' load pages sequentially waiting for the previous to exit */}
        <AnimatePresence mode='wait'>
          {pages[pageName]}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Pages
