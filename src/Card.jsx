// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function Card() {
  return (
    <motion.div
      // Set initial CSS property values
      initial={{ y: 300, opacity: 0 }}
      // Set values to animate to
      animate={{ y: 0, opacity: 1 }}
      // Set meta props for the animation like duration
      transition={{ duration: 5, delay: 0.5 }}
      // Bonus! use Tailwind with Framer!
      className="p-4 m-2 bg-slate-400 rounded shadow-md"
    >
      Hello with animation!
    </motion.div>
  )
}

export default Card