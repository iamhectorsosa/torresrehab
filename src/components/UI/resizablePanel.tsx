import { AnimatePresence, motion } from "framer-motion";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import useMeasure from "react-use-measure";

const DURATION = 0.75;

const ResizablePanel = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const [hookRef, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || "auto" }}
      className="overflow-hidden relative"
      ref={ref}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(props.children, ignoreCircularReferences())}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: DURATION / 2, delay: DURATION / 2 },
          }}
          exit={{ opacity: 0, transition: { duration: DURATION / 2 } }}
        >
          <div
            className={`${height ? "absolute" : "relative"} w-full`}
            ref={hookRef}
          >
            {props.children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

ResizablePanel.displayName = "ResizablePanel";

export default ResizablePanel;

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
