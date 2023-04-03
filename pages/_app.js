import "@/styles/globals.css";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "@/Components/TopHeader/TopHeader";
export default function App({ Component, pageProps }) {
  return (
    <>
      <TopHeader />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
