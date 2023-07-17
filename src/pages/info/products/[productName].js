import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const router = useRouter();
  const { productName } = router.query;
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/serviceData.json`);
        const data = await response.json();

        // Get the product data based on the product name
        const product = data[productName];

        setProductData(product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [productName]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{productData.name}</h2>
      <p>{productData.description}</p>
      {/* Add other product details */}
    </div>
  );
};

export default ProductPage;
