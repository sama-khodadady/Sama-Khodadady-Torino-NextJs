"use client";

import Link from "next/link";
import Image from "next/image";
import { e2p } from "@/utils/numbers";
import { usePathname } from "next/navigation";
import { featureImages, footerImages } from "@/constants/constant";
import styles from "@/ui/organism/Footer.module.css";

function Footer() {
  const pathName = usePathname();
  return (
    <footer
      className={` ${styles.footer} ${
        pathName !== "/" ? styles.footerNext : null
      }`}
    >
      {pathName === "/" && (
        <div className={styles.advantages}>
          <div className={styles.items}>
            {featureImages.map((img, index) => (
              <div key={index} className={styles.item}>
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                  quality={100}
                />
                <div>
                  <h3>{img.title}</h3>
                  <p>{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        className={`${styles.container} ${
          pathName !== "/" ? styles.containerNext : null
        }`}
      >
        <div className={styles.desc}>
          <div className={styles.torino}>
            <h4>تورینو</h4>
            <ul>
              <li>
                <Link href="/about-us">درباره ما</Link>
              </li>
              <li>
                <Link href="/contact-us">تماس با ما</Link>
              </li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div className={styles.services}>
            <h4>خدمات مشتریان</h4>
            <ul>
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد </li>
              <li>پرسش و پاسخ </li>
            </ul>
          </div>
        </div>
        <div className={styles.symbols}>
          <Image
            src="/images/Torino.png"
            width={146}
            height={44}
            alt="torino-logo"
            className={styles.logo}
          />
          <p>
            تلفن پشتیبانی : <span>{`${e2p("8574")}-${e2p("021")}`}</span>
          </p>
          <div>
            {footerImages.map((img) => (
              <Image
                key={img.id}
                src={img.src}
                width={img.width}
                height={img.height}
                alt={img.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.policy}>
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </footer>
  );
}

export default Footer;
