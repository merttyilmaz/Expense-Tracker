import Layout from "../components/layout/Layout";
import { ExpenseProvider } from "../context/ExpenseContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ExpenseProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ExpenseProvider>
  );
}

export default MyApp;
