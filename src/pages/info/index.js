import { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";

const fintechProducts = [
  {
    name: "PayPal",
    transactionFee: 2.9,
    features: ["Payment processing", "Money transfers", "Online shopping"],
  },
  {
    name: "Coinbase",
    transactionFee: 1.5,
    features: [
      "Cryptocurrency trading",
      "Wallet services",
      "Investment options",
    ],
  },
  {
    name: "Mobile Banking",
    transactionFee: 0.5,
    features: ["Mobile payments", "Account management", "Budgeting tools"],
  },
  {
    name: "Apple Pay",
    transactionFee: 1.0,
    features: ["Contactless payments", "In-app purchases", "Rewards programs"],
  },
  {
    name: "Phone Pay",
    transactionFee: 1.8,
    features: ["Mobile payments", "Bill splitting", "Cashback offers"],
  },
  {
    name: "Chime",
    transactionFee: 1.2,
    features: ["Online banking", "Automatic savings", "Early paycheck access"],
  },
  {
    name: "Revolut",
    transactionFee: 0.8,
    features: [
      "Multi-currency accounts",
      "Cryptocurrency exchange",
      "Budgeting tools",
    ],
  },
  {
    name: "Stripe",
    transactionFee: 2.9,
    features: [
      "Payment processing",
      "Subscription billing",
      "Fraud protection",
    ],
  },
  {
    name: "Adyen",
    transactionFee: 2.0,
    features: [
      "Global payment methods",
      "Risk management",
      "Analytics and reporting",
    ],
  },
  {
    name: "Venmo",
    transactionFee: 3.0,
    features: [
      "Peer-to-peer payments",
      "Social interactions",
      "Payment splitting",
    ],
  },
  {
    name: "Affirm",
    transactionFee: 1.5,
    features: [
      "Buy now, pay later",
      "Installment plans",
      "Virtual credit card",
    ],
  },
  {
    name: "Plaid",
    transactionFee: 1.0,
    features: [
      "Bank account integration",
      "Transaction data access",
      "Identity verification",
    ],
  },
  {
    name: "ET Money",
    transactionFee: 1.2,
    features: [
      "Mutual fund investments",
      "Expense tracking",
      "Goal-based savings",
    ],
  },
  {
    name: "Acorns",
    transactionFee: 1.1,
    features: [
      "Automated investing",
      "Round-up savings",
      "Financial education",
    ],
  },
  {
    name: "Suplari",
    transactionFee: 2.5,
    features: ["Spend analytics", "Cost management", "Vendor management"],
  },
  {
    name: "BlockFi",
    transactionFee: 1.99,
    features: ["Cryptocurrency trading", "Lending", "Interest accounts"],
  },
  {
    name: "SoFi",
    transactionFee: 0.25,
    features: ["Investing", "Lending", "Personal loans"],
  },
  {
    name: "Robinhood",
    transactionFee: 0.0,
    features: ["Stock trading", "Options trading", "Cryptocurrency trading"],
  },
];

const Information = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [productInfo, setProductInfo] = useState(null);

  const handleProductInfo = (product) => {
    setProductInfo(product);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setProductInfo(null);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Fintech Product Comparison</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {fintechProducts.map((product) => (
          <motion.div
            key={product.name}
            className="bg-white rounded p-4 shadow-xl font-serif tracking-wider cursor-pointer py-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProductInfo(product)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="backdrop-blur bg-[#00000050] p-6 shadow-lg w-full sm:w-auto text-white overflow-y-auto max-h-screen min-h-[240px] mx-2 rounded-3xl">
            <div className="flex items-center justify-between gap-6">
              <h2 className="text-xl font-bold tracking-wide">
                {productInfo.name}
              </h2>
              <button
                className="bg-red-500 text-white p-2 rounded-full"
                onClick={handlePopupClose}
              >
                <RiArrowGoBackLine className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Product Information:</h3>
              <p className="text-md">
                Transaction Fee: {productInfo.transactionFee}%
              </p>
              <ul className="list-disc list-inside ml-4 mt-2">
                {productInfo.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex justify-center mt-4"
              >
                <Link
                  href={`/info/products/${encodeURIComponent(
                    productInfo.name
                  )}`}
                >
                  <button className="bg-gray-500 transition duration-700 hover:bg-gray-900 text-white px-4 py-2 rounded-3xl">
                    View More...
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Information;
