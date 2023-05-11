import { motion, Variants } from 'framer-motion';

type CardProps = {
    image: string
    h2: string
    p: string
}

const imageAnimate: Variants={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}

const textAnimate: Variants = {
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
 }
}

const containerAnimate: Variants = {
    offscreen: {opacity:0, x: -100},
    onscreen: {opacity:1, x: 0,
    transition: {type:"spring",
        bounce:0.4,
        duration:1}
    }
}



const Card = ({ image, h2, p }: CardProps) => {
    
      return (
        <motion.div className="bg-white p-10 rounded-md shadow-xl flex flex-col items-center justify-center gap-4"
            variants={containerAnimate}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:.5}}
            /* 
            amount is a number between 0 and 1 that specifies the percentage of the motion component that needs to be visible in the viewport before it starts animating.
            For example, if amount is set to 0.5, the motion component will start animating when at least 50% of it is visible in the viewport.
            By default, amount is set to 0, which means that the motion component will start animating as soon as any part of it enters the viewport.
            */
            transition={{staggerChildren:0.5}}
        >
          <motion.div className="text-[10rem]"       
            variants={imageAnimate}
          >{image}</motion.div>
          <motion.h2 className='text-2xl font-bold'
            variants={textAnimate}
          >{h2}</motion.h2>
          <motion.p
             variants={textAnimate}     
          >{p}</motion.p>
        </motion.div>
      );
    
}

export default Card