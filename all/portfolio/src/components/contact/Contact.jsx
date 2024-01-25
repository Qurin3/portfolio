import React, { useRef,useState } from 'react'
import "./contact.scss"
import {motion, useInView} from 'framer-motion'
import emailjs from '@emailjs/browser'

const Variants = {
   initial: {
    x: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  };
  
    
const Contact = () => {
    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_udjvi98', 'template_8p9v81s', formRef.current, 'uZP_qItRU8jcZetM7')
          .then((result) => {
            setSuccess(true)
          }, (error) => {
            setError(true)
          });
      };
      const ref = useRef()
      const isInView = useInView(ref,{margin:"-100px"})
    
  return (
    <motion.div className='contact' variants={Variants} initial="initial" ref={ref} animate={isInView && 'animate'}>
        <motion.div className="textContainer" variants={Variants}>
            <motion.h1 variants={Variants}>Lets work together!</motion.h1>
            <motion.div className="item" variants={Variants}>
                <h2>Mail</h2>
                <span>filip.klv2@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={Variants} >
                <h2>Phone</h2>
                <span>509 794 050</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={Variants}
            initial="initial"
            
            animate={isInView && 'animate'}
    >
                <input type="text" placeholder='Name' required name='name' />
                <input type="email" placeholder='Email' required name='email' />
                <textarea rows={8} placeholder='Message' name='message'/>
                <button>Submit</button>
                {error && "failure"}
                {success && "success"}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact