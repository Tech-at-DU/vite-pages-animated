// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Page2() {
  return (
    <motion.div
      className="p-4 m-4 border-t w-full border-t-4 border-orange-200"
    >
      <motion.h1
        className="text-4xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
      >World</motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >world world world world</motion.p>
    </motion.div>
  )
}

export default Page2