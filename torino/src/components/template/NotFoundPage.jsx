import Link from "next/link";
import Image from "next/image";
import styles from "@/template/NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <Image
        src="/images/notFound.svg"
        width={555}
        height={555}
        alt="404-svg"
      />
      <div className={styles.actions}>
        <h1>!صفحه مورد نظر یافت نشد</h1>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
