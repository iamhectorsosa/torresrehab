import { ReactNode } from "react";

import { motion } from "framer-motion";

export default function Motion({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </motion.section>
    );
}
