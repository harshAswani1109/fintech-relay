import { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdCalculate } from "react-icons/md";
import { motion } from "framer-motion";
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

const ComparePage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setAmount] = useState("");
  const [productFees, setProductFees] = useState([]);
  const [bestProduct, setBestProduct] = useState(null);

  const handleProductSelection = (event) => {
    const { value } = event.target;
    if (selectedProducts.includes(value)) {
      setSelectedProducts(
        selectedProducts.filter((product) => product !== value)
      );
    } else {
      setSelectedProducts([...selectedProducts, value]);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setAmount(value);
    } else {
      setAmount("");
    }
  };

  const handleComparison = () => {
    if (selectedProducts.length < 2) {
      alert("Please select at least two fintech products.");
      return;
    }

    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setAmount("");
    setProductFees([]);
    setBestProduct(null);
  };

  const handleTransactionFeeCalculation = () => {
    const fees = selectedProducts.map((selectedProduct) => {
      const product = fintechProducts.find(
        (product) => product.name === selectedProduct
      );
      const transactionFee = (amount * product.transactionFee) / 100;
      return {
        name: selectedProduct,
        fee: transactionFee,
        features: product.features,
      };
    });
    setProductFees(fees);

    const lowestFee = Math.min(...fees.map((fee) => fee.fee));
    const bestProduct = fees.find((fee) => fee.fee === lowestFee);
    setBestProduct(bestProduct);
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
          >
            <div className="flex items-center justify-between ">
              <label htmlFor={product.name} className="text-lg font-semibold">
                {product.name}
              </label>
              <input
                type="checkbox"
                id={product.name}
                name={product.name}
                value={product.name}
                checked={selectedProducts.includes(product.name)}
                onChange={handleProductSelection}
                className="h-5 w-5 mt-4"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleComparison}
        disabled={selectedProducts.length < 2}
      >
        Compare
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="backdrop-blur bg-[#00000050] p-6 shadow-lg w-full sm:w-auto text-white overflow-y-auto max-h-screen min-h-[240px] mx-2 rounded-3xl">
            <div className="flex items-center justify-between gap-6 ">
              <h2 className="text-xl font-bold tracking-wide">
                Transaction Amount
              </h2>
              <button
                className="bg-red-500 text-white p-2 rounded-full"
                onClick={handlePopupClose}
              >
                <RiArrowGoBackLine className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-between items-center mt-4 gap-6">
              <input
                type="number"
                className="border border-gray-300 px-2 py-2 rounded text-black border-none outline-none"
                value={amount}
                onChange={handleAmountChange}
              />

              <button
                className="bg-blue-500 text-white p-2 rounded-full"
                onClick={handleTransactionFeeCalculation}
              >
                <MdCalculate className="h-6 w-6" />
              </button>
            </div>

            {bestProduct && (
              <div className="mt-6">
                <h3 className="text-lg font-bold">Best Product:</h3>
                <p className="text-md">
                  {bestProduct.name} is the best option with a fee of{" "}
                  {bestProduct.fee} Rs.
                </p>
              </div>
            )}
            {selectedProducts.length >= 2 && (
              <div className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {productFees.map((product) => (
                    <div
                      key={product.name}
                      className="backdrop-blur bg-[#00000050] rounded p-4 shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    >
                      <h4 className="text-md font-bold mb-2">{product.name}</h4>
                      <ul className="list-disc list-inside ml-4">
                        {product.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                      <div className="text-md font-bold mt-4">
                        Transaction Fee: {product.fee} Rs.
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
