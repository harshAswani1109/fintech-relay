import "@/styles/globals.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
