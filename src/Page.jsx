// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// children prop contains the child elements of the parent component
function Page({ children }) {
  return (
    <motion.div
      className="w-[500px] h-[500px] rounded-4xl bg-slate-200 flex flex-col justify-center align-center"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
    > 
      {/* Display the children */}
      {children}
    </motion.div>
  )
}

export default Page