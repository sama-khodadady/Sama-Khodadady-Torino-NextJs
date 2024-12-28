import Image from "next/image";
import { Suspense } from "react";
import Tours from "@/ui/organism/Tours";
import Search from "@/ui/organism/Search";
import { getTours } from "@/services/httpReq";
import Features from "@/ui/organism/Features";
import styles from "@/template/HomePage.module.css";
import CallToAction from "@/ui/molecule/CallToAction";

async function HomePage({ queries }) {
  const { data } = await getTours(queries);

  return (
    <main className={styles.main}>
      <Image src="/images/banner.png" width={1440} height={350} alt="banner" />
      <div className={styles.banner}>
        <h1>
          <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
        </h1>
        <Suspense>
          <Search />
        </Suspense>
      </div>
      <Tours data={data} />
      <CallToAction />
      <Features />
    </main>
  );
}

export default HomePage;
