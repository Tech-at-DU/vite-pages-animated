import { motion } from "framer-motion";
import { useState } from "react";

function reverseList(arr) {
  return arr.reverse().map((item) => item)
}

function shuffleArr(arr) {
  return arr.sort(() => Math.random() * 2 - 1).map(item => item)
}

const colors = [
  'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900'
]

function Ordered() {
  const [list, setList] = useState([1,2,3,4,5,6,7,8,9])

  return (
    <div>
      <button
        className="p-1 m-1 bg-slate-300 rounded"
        onClick={() => setList(reverseList(list))}
      >Reverse</button>

      <button
        className="p-1 m-1 bg-slate-300 rounded"
        onClick={() => setList(shuffleArr(list))}
      >Shuffle</button>

      {list.map((val) => {
        return <motion.div 
          key={`row-${val}`}
          layout
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
        }}
          className={`p-4 bg-red-${val * 100} m-1`}
        >??? {val} ???</motion.div>
      })}
    </div>
  )
}

export default Ordered