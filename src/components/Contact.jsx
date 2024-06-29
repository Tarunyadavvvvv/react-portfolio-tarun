import { CONTACT } from "../constants"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
       <motion.h2 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration:0.5}}
       className="my-10 text-center text-4xl">Get in Touch</motion.h2> 
        <div className="text-center tracking-tighter">

            <motion.a 
            href={`https://www.google.com/maps/place/Rohta+Rd,+Meerut,+Uttar+Pradesh/@28.9929174,77.6488512,17z/data=!3m1!4b1!4m6!3m5!1s0x390c65d474260385:0x24915152697a4c8f!8m2!3d28.9929174!4d77.6514261!16s%2Fg%2F1trpjl5m?entry=ttu`}
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}
            </motion.a>

            <motion.p 
            href={`tel:${CONTACT.phoneNo}`}
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.phoneNo}
            </motion.p>

            <a href={`mailto:${CONTACT.email}`} className="border-b block">{CONTACT.email}</a>
        </div>
        </div>
  )
}

export default Contact