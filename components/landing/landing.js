import Link from "next/link";
import { VscActivateBreakpoints } from "react-icons/vsc";
const Landing = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-900 text-white py-4">
        <h1 className="text-2xl text-center">Fintech Relay</h1>
      </header>

      <section className="py-10">
        <div className="flex items-center justify-center">
          <div className="max-w-md bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Meet Fintech Relay, your fintech advisor
            </h2>
            <p className="text-gray-700">
              Fintech Relay is here to make your life easier with its amazing
              features and capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="max-w-md mx-auto px-4">
          <h3 className="text-2xl mb-4">Features</h3>
          <ul className=" flex flex-col justify-center items-center">
            <div className="flex items-center mb-6 hover:text-blue-500 transition-colors justify-center gap-10 w-full ">
              <VscActivateBreakpoints className="h-24 w-24" />
              <span>
                <span className="font-semibold">
                  Transaction Fee Calculation:
                </span>{" "}
                After entering the transaction amount,the transaction fee for
                each selected product based on the transaction fee percentage
                provided.
              </span>
            </div>
            <div className="flex items-center mb-6 hover:text-blue-500 transition-colors justify-center gap-10 w-full ">
              <VscActivateBreakpoints className="h-24 w-24" />
              <span>
                <span className="font-semibold">Display Results:</span> The
                component displays the transaction fees for each selected
                product, along with their features. It also highlights the
                product with the lowest fee as the best option.
              </span>
            </div>
          </ul>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="max-w-md mx-auto px-4">
          <h3 className="text-2xl mb-4">Testimonials</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg shadow-lg px-6 py-2">
              <div className="flex items-center">
                <VscActivateBreakpoints className="w-40 h-40 rounded-full mr-10" />
                <div>
                  <p className="text-gray-800 font-medium">
                    "Fintech Relay has been a game-changer in my daily life.
                    It's like having a personal assistant always at my side."
                  </p>
                  <footer className="text-gray-600">- Ayush Garg</footer>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-6 py-2">
              <div className="flex items-center">
                <VscActivateBreakpoints className="w-40 h-40 rounded-full mr-10" />
                <div>
                  <p className="text-gray-800 font-medium">
                    "I'm amazed by the capabilities of Fintech Relay. It has
                    simplified my tasks and made everything more convenient."
                  </p>
                  <footer className="text-gray-600">- Babla</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <Link className="flex items-center justify-center" href="/compare">
          <button className="px-6 py-3 bg-gray-900 text-white text-xl rounded-lg hover:bg-gray-700">
            Get Started with Fintech Relay
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Landing;
