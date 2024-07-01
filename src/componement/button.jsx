import { React, useState } from "react";
import { motion } from "framer-motion";
import "./style.nodule.css";
//je creer ma fonction bouton qui incremente, decremente, et reset avec une boucle if* pour eviter que le compteur ne passe en dessou de zero 
function Button() {
  const [count, setcount] = useState(0);


  const increase = () => {
    setcount(count + 1);
  
  };
  const decrease = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const reset = () => {
    setcount(0);
  
  };
// ici je rajoute des variente sur mes bouton si la sourie passe sur sur le bouton il se scale plus gros et change de couleur 
  const buttonVariants = {
    hover: { scale: 1.3, backgroundColor: "#f8127d", color: "#000" },
    tap: { scale: 0.9, backgroundColor: "#f9faf9", color: "#f7f709" },
  };

  const countVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: 20 },
  };
  return (

     <div style={{textAlign: 'center'}}>
      <motion.div className="counter"
       initial={{ rotateY: 0 }}
       animate={{ rotateY: 360 }}
       transition={{ duration: 0.5 }}
        variants={countVariants}
        key={count}
      >
        <h1> {count}</h1>
      </motion.div>
      <motion.button className="control"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={increase}
      >
        Increment
      </motion.button>
      <motion.button className="control"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={decrease}
      >
        Decrement
      </motion.button>
      <motion.button className="control"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={reset}
      >
        Reset
      </motion.button>
      </div>
  );
}

export default Button;
