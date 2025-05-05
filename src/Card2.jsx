// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function Card2() {
  return (
    <motion.div
      // Set initial CSS property values
      initial={{ opacity: 0, scale: 0 }}
      // Set values to animate to
      animate={{ opacity: 1, scale: 1 }}
      // Set meta props for the animation like duration
      transition={{ duration: 0.5 }}
      // Bonus! use Tailwind with Framer!
      className="p-4 m-2 bg-slate-400 rounded shadow-md text-center max-w-md"
    >

      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hello with animation!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Animate any element.
      </motion.p>

    </motion.div>
  )
}

export default Card2