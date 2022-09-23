import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
        <div>
          -----------------------------------------------------------------------------------
        </div>
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
