import { AnimatePresence, motion } from "framer-motion";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import useMeasure from "react-use-measure";

const DURATION = 0.75;

const SlidePanel = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  function SlidePanel(props, ref) {
    const [hookRef, { height, width }] = useMeasure();

    return (
      <motion.div
        animate={{ height: height || "auto" }}
        className="overflow-hidden relative"
        transition={{ duration: DURATION }}
        ref={ref}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={JSON.stringify(props.children, ignoreCircularReferences())}
            initial={{ x: width, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{ x: -width, opacity: 0 }}
            transition={{ duration: DURATION }}
          >
            <div
              className={`w-full ${height ? "absolute" : "relative"}`}
              ref={hookRef}
            >
              {props.children}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);

export { SlidePanel };

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return;
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
