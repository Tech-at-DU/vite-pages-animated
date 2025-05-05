// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const buttonStyles = 'block py-1 px-2 m-1 bg-slate-100 text-slate-800 rounded cursor-pointer select-none border border-black'

// Included a class name for some styles in index.css
const gridCellStyles = 'grid-cell bg-slate-100 rounded-xl p-4 overflow-hidden'

const transition = { type: "spring", stiffness: 300, damping: 20, duration: 2 }

function Layout() {
  const [pageName, setPageName] = useState('A')
  
  return (
    <div className="flex flex-col items-center">
      <header
        className='flex pb-4 mb-4 border-b w-full'
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
          className={clsx(pageName === 'C' ? 'main' : 'side-3', buttonStyles, pageName === 'C' ? 'bg-slate-600 !text-white' : null)}
          onClick={() => setPageName('C')}
        >Page C</motion.a>
        <motion.a
          className={clsx(pageName === 'D' ? 'main' : 'side-4', buttonStyles, pageName === 'D' ? 'bg-slate-600 !text-white' : null)}
          onClick={() => setPageName('D')}
        >Page D</motion.a>
      </header>

      <div className="grid-layout">
        <motion.div
          className={clsx(pageName === 'A' ? 'main' : 'side-1', gridCellStyles)}
          layout
          key="page-A"
          transition={transition}
        ><h1 className="text-4xl font-bold">Apple</h1></motion.div>
        <motion.div
          className={clsx(pageName === 'B' ? 'main' : 'side-2', gridCellStyles)}
          layout
          key="page-B"
          transition={transition}
        ><h1 className="text-4xl font-bold">Banana</h1></motion.div>
        <motion.div
          className={clsx(pageName === 'C' ? 'main' : 'side-3', gridCellStyles)}
          layout
          key="page-C"
          transition={transition}
        ><h1 className="text-4xl font-bold">Cantaloupe</h1></motion.div>
        <motion.div
          className={clsx(pageName === 'D' ? 'main' : 'side-4', gridCellStyles)}
          layout
          key="page-D"
          transition={transition}
        ><h1 className="text-4xl font-bold">Durian</h1></motion.div>
      </div>
    </div>
  )
}

export default Layout