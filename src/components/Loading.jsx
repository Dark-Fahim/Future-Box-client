import React from "react";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#121212] transition-colors duration-500">
            <ClipLoader color="#6366f1" size={80} speedMultiplier={1.2} />
            <p className="mt-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Please wait, loading content...
            </p>
        </motion.div>
    );
};

export default Loading;
