/**
 * This is a TypeScript React component that uses Framer Motion to animate a card with an image,
 * heading, and paragraph.
 * @property {string} image - A string representing the image to be displayed in the card.
 * @property {string} h2 - A string representing the main heading of the card.
 * @property {string} p - The "p" property is a string that represents the text content of the
 * paragraph element in the Card component. It is used to display a description or additional
 * information about the card.
 */
import { motion, Variants } from 'framer-motion';

/**
 * The CardProps type defines the props for a React component that displays an image, a heading, and a
 * paragraph.
 * @property {string} image - A string representing the image source or URL for a card component.
 * @property {string} h2 - The "h2" property is a string that represents the heading or title of a card
 * component. It is typically used to provide a brief and descriptive summary of the content that the
 * card represents.
 * @property {string} p - The "p" property is a string that represents the text content of the card. It
 * could be a description, a summary, or any other relevant information related to the card.
 */
type CardProps = {
    image: string
    h2: string
    p: string
}

/* `const imageAnimate` is defining a set of animation variants for the image element in the Card
component using Framer Motion. The `Variants` type is used to define different states of the
animation, such as `offscreen` and `onscreen`. In this case, the `offscreen` state sets the image to
be positioned 100 pixels to the left and completely transparent, while the `onscreen` state sets the
image to be positioned at its original location, fully opaque, and with a slight rotation animation.
The `transition` property specifies the type of animation to use, the amount of bounce, and the
duration of the animation. */
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

/* `const textAnimate` is defining a set of animation variants for the text elements (heading and
paragraph) in the Card component using Framer Motion. The `Variants` type is used to define
different states of the animation, such as `offscreen` and `onscreen`. In this case, the `offscreen`
state sets the text elements to be positioned 100 pixels below and completely transparent, while the
`onscreen` state sets the text elements to be positioned at their original location, fully opaque,
and with a slight bounce animation. The `transition` property specifies the type of animation to
use, the amount of bounce, and the duration of the animation. */
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
        /* This is a Framer Motion component that defines the container for the Card component. It sets
        the background color, padding, and other styles for the container, and also defines the
        animation variants, initial state, and transition properties for the container. The
        `whileInView` property specifies that the animation should start when the container is in
        view, and the `viewport` property specifies the amount of the container that needs to be
        visible in the viewport before the animation starts. The `transition` property specifies the
        stagger delay between child elements of the container. */
        <motion.div className="bg-white p-10 rounded-md shadow-xl flex flex-col items-center justify-center gap-4"
            variants={containerAnimate}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:.5}}
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