import Header from "@/global/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Header />
      </header>
      <Component {...pageProps} />
      
    </>
  );
}
