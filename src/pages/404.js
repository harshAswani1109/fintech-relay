import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, duration: 0.8, delay: 0.4 }}
          className="text-[300px] max-md:text-[200px] font-bold text-[#1f2937]"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity:0, x: 500 }}
          animate={{ opacity:1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl max-md:text-xl font-bold"
          >
            We are Sorry, Page Not Found!
        </motion.h2>
        <motion.p className="text-xl max-md:text-[16px] max-md:px-6 text-justify mt-4 text-gray-600"
          initial={{ opacity:0, x: -500 }}
          animate={{ opacity:1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <Link
          href="/"
          className="mt-8 px-6 py-3 bg-gray-700 hover:bg-gray-900 text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
