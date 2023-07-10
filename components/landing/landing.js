import Link from "next/link";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { motion } from "framer-motion";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-900 text-white py-4">
        <h1 className="text-4xl text-center font-bold">Fintech Relay</h1>
      </header>

      <section className="py-10">
        <div className="flex items-center justify-center">
          <div className="max-w-md bg-white shadow-lg rounded-lg p-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              Meet Fintech Relay, your fintech advisor
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-700"
            >
              Fintech Relay is here to make your life easier with its amazing
              features and capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="flex w-full justify-around bg-gray-100 flex-wrap gap-10">
        <section className="bg-gray-200 pt-4 pb-1.5 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg backdrop-saturate-150">
          <div className="max-w-md mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl mb-4"
            >
              Features
            </motion.h3>
            <ul className="grid grid-cols-1 gap-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                <VscActivateBreakpoints className="w-16 h-16 text-gray-600 mr-4" />
                <span>
                  <span className="font-semibold text-xl">
                    Transaction Fee Calculation:
                  </span>{" "}
                  After entering the transaction amount, the component
                  calculates the transaction fee for each selected product based
                  on the transaction fee percentage provided.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                <VscActivateBreakpoints className="w-16 h-16 text-gray-600 mr-4" />
                <span>
                  <span className="font-semibold text-xl">
                    Display Results:
                  </span>{" "}
                  The component displays the transaction fees for each selected
                  product, along with their features. It also highlights the
                  product with the lowest fee as the best option.
                </span>
              </motion.li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-200 pt-4 pb-1.5 rounded-lg shadow-lg">
          <div className="max-w-md mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl mb-4"
            >
              How to use it ??
            </motion.h3>
            <div className="flex flex-col justify-center items-center border-4 py-2">
              <motion.div
                className="flex flex-row justify-center items-center py-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image src={c1} className="h-32 w-32 rounded-full" />
                  <motion.p
                    className="hover:text-blue-500 transition-colors w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Go to Services
                  </motion.p>
                </div>
                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image src={c2} className="h-32 w-32 rounded-full" />
                  <motion.p
                    className="hover:text-blue-500 transition-colors w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Select your choices
                  </motion.p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-row justify-center items-center py-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image src={c3} className="h-32 w-32 rounded-full" />
                  <motion.p
                    className="hover:text-blue-500 transition-colors w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Enter Transaction Amount
                  </motion.p>
                </div>
                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image src={c4} className="h-32 w-32 rounded-full" />
                  <motion.p
                    className="hover:text-blue-500 transition-colors w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Get you result. Which one is Best.
                  </motion.p>
                </div>
              </motion.div>
              <div className="flex items-center justify-center">
                <Link href="/compare" className="relative inline-block mt-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 px-6 py-3 bg-gray-900 text-white text-xl rounded-lg hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                  <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 pt-4 pb-1.5 rounded-lg shadow-lg">
          <div className="max-w-md mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl mb-4"
            >
              Testimonials
            </motion.h3>
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg px-6 py-8"
              >
                <div className="flex items-center">
                  <VscActivateBreakpoints className="w-20 h-20 text-gray-600 rounded-full mr-6" />
                  <div>
                    <p className="text-gray-800 text-lg">
                      "Fintech Relay has been a game-changer in my daily life.
                      It's like having a personal assistant always at my side."
                    </p>
                    <footer className="text-gray-600 mt-2">- Ayush Garg</footer>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg px-6 py-8"
              >
                <div className="flex items-center">
                  <VscActivateBreakpoints className="w-20 h-20 text-gray-600 rounded-full mr-6" />
                  <div>
                    <p className="text-gray-800 text-lg">
                      "I'm amazed by the capabilities of Fintech Relay. It has
                      simplified my tasks and made everything more convenient."
                    </p>
                    <footer className="text-gray-600 mt-2">- Babla</footer>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-10">
        <div className="flex items-center justify-center">
          <Link href="/compare" className="relative inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-6 py-3 bg-gray-900 text-white text-xl rounded-lg hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
            >
              Get Started with Fintech Relay
            </motion.button>
            <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
