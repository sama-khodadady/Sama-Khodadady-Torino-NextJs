import Link from "next/link";
import Image from "next/image";
import { e2p } from "@/utils/numbers";
import { icons } from "@/constants/icons";
import styles from "@/ui/molecule/CallToAction.module.css";

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.title}>
        <h1>
          خرید تلفنی از <span>تورینو</span>
        </h1>
        <p>به هرکجا که میخواهید!</p>
        <Image
          src="/images/cartoon-man-talking-phone.png"
          width={308}
          height={225}
          alt="cartoon-man-talking-phone" 
        />
      </div>
      <div className={styles.actions}>
        <div>
          <p>{`${e2p("021")}-${e2p("1840")}`}</p>
          {icons.phone}
        </div>
        <button>
          <Link href="/contact-us">اطلاعات بیشتر</Link>
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
