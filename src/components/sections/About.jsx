import RevealOnScroll from "../RevealOnScroll";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Us
          </h2>
          <div className="rounded-xl p-8 border-white/10 border">
            <p className="text-gray-300 text-xl mb-6 text-center">
              Inspired by the stars, we craft elegant, responsive, and scalable
              front-end websites that deliver exceptional user experiences.
            </p>
            <div className="gap-6">
              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl text-center font-bold mb-7"> Technologies</h3>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-white/10 border p-4 hover:scale-105 hover:border-blue-500 duration-300 ease-in-out"
                  >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                  </motion.div>
                  <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-white/10 border p-4 hover:scale-105 hover:border-blue-500 duration-300 ease-in-out"
                  >
                    <TbBrandNextjs className="text-7xl " />
                  </motion.div>
                  <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-white/10 border p-4 hover:scale-105 hover:border-blue-500 duration-300 ease-in-out"
                  >
                    <SiMongodb className="text-7xl text-green-400" />
                  </motion.div>
                  <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-white/10 border p-4 hover:scale-105 hover:border-blue-500 duration-300 ease-in-out"
                  >
                    <SiTailwindcss className="text-7xl text-cyan-300" />
                  </motion.div>
                  <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-white/10 border p-4 hover:scale-105 hover:border-blue-500 duration-300 ease-in-out"
                  >
                    <FaNodeJs className="text-7xl text-green-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
