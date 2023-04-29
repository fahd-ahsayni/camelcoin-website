import { motion } from "framer-motion";

const ProgressBar = ({ progress, bg }) => {
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.1 } }
  };

  const barVariants = {
    before: {
      width: 0,
      opacity: 0
    },
    after: {
      width: `${progress}%`,
      opacity: 1
    }
  };

  return (
    <motion.div
      className={`progress-bar-container dark:bg-blue-gray-900`}
      variants={containerVariants}
      initial="before"
      whileInView="after"
    >
      <motion.div
        className={`progress-bar ${bg}`}
        variants={barVariants}
        transition={{
          duration: 1
        }}
      />
    </motion.div>
  );
};

export default ProgressBar;