import { useState } from "react";

const fintechProducts = [
  { name: "PayPal", transactionFee: 2.9 },
  { name: "Coinbase", transactionFee: 1.5 },
  { name: "Mobile Banking", transactionFee: 0.5 },
  { name: "Apple Pay", transactionFee: 1.0 },
  { name: "Phone Pay", transactionFee: 1.8 },
  { name: "Chime", transactionFee: 1.2 },
  { name: "Revolut", transactionFee: 0.8 },
  { name: "Stripe", transactionFee: 2.9 },
  { name: "Adyen", transactionFee: 2.0 },
  { name: "Venmo", transactionFee: 3.0 },
  { name: "Affirm", transactionFee: 1.5 },
  { name: "Plaid", transactionFee: 1.0 },
  { name: "ET Money", transactionFee: 1.2 },
  { name: "Acorns", transactionFee: 1.1 },
  { name: "Suplari", transactionFee: 2.5 },
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
    setAmount(event.target.value);
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
      };
    });
    setProductFees(fees);

    const lowestFee = Math.min(...fees.map((fee) => fee.fee));
    const bestProduct = fees.find((fee) => fee.fee === lowestFee);
    setBestProduct(bestProduct);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Fintech Product Comparison</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {fintechProducts.map((product) => (
          <div
            key={product.name}
            className="flex items-center bg-white rounded p-4 shadow hover:bg-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <input
              type="checkbox"
              id={product.name}
              name={product.name}
              value={product.name}
              checked={selectedProducts.includes(product.name)}
              onChange={handleProductSelection}
              className="mr-2"
            />
            <label htmlFor={product.name} className="text-lg">
              {product.name}
            </label>
          </div>
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
          <div className="bg-white rounded p-6 shadow-lg w-full sm:w-auto">
            <h2 className="text-xl font-bold mb-4">Enter Transaction Amount</h2>
            <input
              type="number"
              className="border border-gray-300 p-2 rounded mt-2 mb-4"
              value={amount}
              onChange={handleAmountChange}
            />

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleTransactionFeeCalculation}
            >
              Calculate
            </button>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-2"
              onClick={handlePopupClose}
            >
              Close
            </button>

            {bestProduct && (
              <div className="mt-6">
                <h3 className="text-lg font-bold">Best Product:</h3>
                <p className="text-md">
                  {bestProduct.name} is the best option with a fee of{" "}
                  {bestProduct.fee} Rs.
                </p>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-bold">Transaction Fees:</h3>
              {productFees.map((fee) => (
                <p key={fee.name} className="text-md">
                  {fee.name}: {fee.fee} Rs
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
