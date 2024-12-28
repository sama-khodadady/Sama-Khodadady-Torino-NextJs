import Footer from "@/ui/organism/Footer";
import Header from "@/ui/organism/Header";
import styles from "@/layouts/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.homeLayout}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
