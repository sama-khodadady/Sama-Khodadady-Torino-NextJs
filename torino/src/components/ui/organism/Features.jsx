import Slider from "../molecule/Slider";
import { icons } from "@/constants/icons";
import styles from "@/ui/organism/Features.module.css";

function Features() {
  return (
    <section className={styles.section}>
      <article className={styles.features}>
        <div className={styles.about}>
          <div className={styles.header}>
            <div>
              <p>؟</p>
              {icons.polygon}
            </div>
            <p>
              چرا <span>تورینو</span> ؟
            </p>
          </div>
          <div className={styles.description}>
            <h4>تور طبیعت گردی و تاریخی</h4>
            <p>
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
        </div>
        <Slider />
      </article>
    </section>
  );
}

export default Features;
