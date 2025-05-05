// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Page1() {
  return (
    <motion.div
      className="p-4 m-4 border-t w-full border-t-4 border-red-200"
    >
      <motion.h1
        className="text-4xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
      >Hello</motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >hello hello hello</motion.p>
    </motion.div>
  )
}

export default Page1