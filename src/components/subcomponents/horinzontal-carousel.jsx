import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const HorizontalScrollCarousel = ({ images }) => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="h-[450px] w-[450px] flex-shrink-0 overflow-hidden rounded-lg bg-gray-300"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { HorizontalScrollCarousel };
