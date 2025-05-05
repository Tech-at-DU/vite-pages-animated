import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

///////////////////////////////////////////////////////////////
// Animated transitions 
// 
// This example animates between two components. The container 
// is not animated, instead all of the children are animated 
// individually. 
// 

const buttonStyles = 'block py-1 px-2 m-1 bg-slate-100 text-slate-800 rounded cursor-pointer select-none border border-black'

function Pages2() {
  const [pageName, setPageName] = useState('A')

  const showPage = () => {
    switch(pageName) {
      case 'A': 
        return <Page1 key="page-A" />
      case 'B':
        return <Page2 key="page-B" />
      case 'C':
        return <Page3 key="page-C" />
      case 'D':
        return <Page4 key="page-D" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center">
      <header
        className='flex'
      >
        <motion.a
          className={clsx(buttonStyles, pageName === 'A' ? 'bg-slate-600 !text-white' : null)}
          onClick={() => setPageName('A')}
        >Page A</motion.a>
        <motion.a
          className={clsx(buttonStyles, pageName === 'B' ? 'bg-slate-600 !text-white' : null)}
          onClick={() => setPageName('B')}
        >Page B</motion.a>
        <motion.a
          className={clsx(buttonStyles, pageName === 'C' ? 'bg-slate-600 !text-white' : null)}
          onClick={() => setPageName('C')}
        >Page C</motion.a>
        <motion.a
          className={clsx(buttonStyles, pageName === 'D' ? 'bg-slate-600 !text-white' : null)}
          onClick={() => setPageName('D')}
        >Page D</motion.a>
      </header>

      <AnimatePresence mode="wait">
        {showPage()}
      </AnimatePresence>
    </div>
  )
}

export default Pages2