import "@/styles/globals.css";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "@/Components/TopHeader/TopHeader";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <TopHeader />
        <Header />
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
