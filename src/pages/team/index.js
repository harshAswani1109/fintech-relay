import { motion } from "framer-motion";
import c1 from "../../../components/assets/c1.jpg";
import c2 from "../../../components/assets/c2.jpg";
import c3 from "../../../components/assets/c3.jpg";
import c4 from "../../../components/assets/c4.jpg";
import Image from "next/image";

const Team = () => {
  return (
    <div>
      <div className="flex w-full justify-around bg-gray-100 flex-wrap gap-10 py-40">
        <section className="bg-gray-200 pt-4 pb-1.5 rounded-lg shadow-lg mx-5 lg:w-full lg:mx-16">
          <div className="max-w-md mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl mb-4 text-center"
            >
              Team
            </motion.h3>
            <div className="flex flex-wrap justify-center items-center border-4 py-2">
              <motion.div
                className="flex max-lg:flex-wrap flex-row justify-center items-center py-2 gap-4 lg:gap-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image
                    src={c1}
                    className="h-32 w-32 rounded-full drop-shadow-xl"
                  />
                  <motion.p
                    className="w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Developer
                  </motion.p>
                </div>
                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image
                    src={c2}
                    className="h-32 w-32 rounded-full drop-shadow-xl"
                  />
                  <motion.p
                    className="w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Developer
                  </motion.p>
                </div>

                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image
                    src={c3}
                    className="h-32 w-32 rounded-full drop-shadow-xl"
                  />
                  <motion.p
                    className="w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Developer
                  </motion.p>
                </div>
                <div className="flex flex-col justify-center items-center w-48 gap-4 h-48">
                  <Image
                    src={c4}
                    className="h-32 w-32 rounded-full drop-shadow-xl"
                  />
                  <motion.p
                    className="w-36 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Developer
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Team;
