import React, { useRef,useState } from 'react'
import "./contact.scss"
import {animate, motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
const variants ={
    initial: {
        y:500,
        opacity: 0
    },
    animate: {
        y:0,
        opacity: 1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}
    
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
    
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Lets work together!</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>filip.klv2@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>509 794 050</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSVG"
             initial={{opacity:1}}
              whileInView={{opacity:0}}
               transition={{delay:3, duration:1}}>
            </motion.div>
            <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay:3, duration:1}}>
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