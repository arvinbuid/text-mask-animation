import styles from './page.module.css'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
    "It is a long established fact",
    "that a reader will be distracted",
    "by the readable content of a page",
    "when looking at its layout."
]

const MaskTextPage = () => {
    const animation = {
        initial: { y: "100%" },
        enter: (i: number) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    }

    const { ref, inView } = useInView({
        threshold: 0.75, // Trigger when 75% of the element is in view
        triggerOnce: false
    })

    return (
        <div ref={ref} className={styles.body}>
            {
                phrases.map((phrase, index) => (
                    <div key={index} className={styles.lineMask}>
                        <motion.p
                            custom={index}
                            variants={animation}
                            initial="initial"
                            animate={inView ? "enter" : ""}
                        >
                            {phrase}
                        </motion.p>
                    </div>
                ))
            }
        </div>
    )
}

export default MaskTextPage;