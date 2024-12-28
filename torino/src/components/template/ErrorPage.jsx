import Image from "next/image";
import styles from "@/template/ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <Image src="/images/error.svg" width={555} height={555} alt="error-svg" />
      <div className={styles.title}>
        <h1>!اتصال با سرور برقرار نیست</h1>
        <h3>.لطفا بعدا دوباره امتحان کنید</h3>
      </div>
    </div>
  );
}

export default ErrorPage;
