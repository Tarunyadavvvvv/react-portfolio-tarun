import { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaCss3Alt, FaDatabase, FaDocker, FaHtml5, FaJava, FaJs, FaLinux, FaNodeJs } from 'react-icons/fa';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techs = [
    { icon: <FaHtml5 className='text-7xl text-orange-500' />, name: 'Html5', duration: 3 },
    { icon: <FaCss3Alt className='text-7xl text-blue-700' />, name: 'CSS3', duration: 2.5 },
    { icon: <FaJs className='text-7xl text-yellow-400' />, name: 'JavaScript', duration: 2 },
    { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: 'React.js', duration: 2.5 },
    { icon: <FaNodeJs className='text-7xl text-green-500' />, name: 'Node.js', duration: 3 },
    { icon: <FaJava className='text-7xl text-blue-500' />, name: 'Java', duration: 4 },
    { icon: <FaDatabase className='text-7xl text-blue-300' />, name: 'MySql', duration: 3.5 },
    { icon: <FaLinux className='text-7xl' />, name: 'Linux', duration: 2 }
    ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">

        {techs.map((tech, index) =>
        (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}>

            {tech.icon}
            {hoveredTech === tech.name &&
              (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 text-white text-lg">
                  {tech.name}
                </div>
              )
            }
          </motion.div>
        ))
        }
      </motion.div>
    </div>
  );
};

export default Technologies;







//       <motion.div
//       variants={iconVariants(2.5)}
//       initial="initial"
//       animate="animate"
//       className="rounded-2xl border-4 border-neutral-800 p-4">
//         <RiReactjsLine className='text-7xl text-cyan-400' />
//       </motion.div>
//       <motion.div
//       variants={iconVariants(4.5)}
//       initial="initial"
//       animate="animate"
//       className="rounded-2xl border-4 border-neutral-800 p-4">
//         <TbBrandNextjs className='text-7xl' />
//       </motion.div>
//     </motion.div>
