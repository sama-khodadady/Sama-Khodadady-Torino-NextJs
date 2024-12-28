"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { icons } from "@/constants/icons";
import Profile from "@/ui/molecule/Profile";
import { usePathname } from "next/navigation";
import { navList } from "@/constants/constant";
import { useGetUser } from "@/services/queries";
import { useAuth } from "@/providers/AuthContext";
import styles from "@/ui/organism/Header.module.css";

function Header() {
  const [isSide, setIsSide] = useState(false);
  const { setIsOpen } = useAuth();
  const pathName = usePathname();
  const { data, error, refetch } = useGetUser();

  return (
    <header className={styles.header}>
      <div className={styles.items}>
        <div className={styles.logo}>
          <Image
            src="/images/Torino.png"
            width={146}
            height={44}
            quality={100}
            alt="torino-logo"
          />
          <h1 onClick={() => setIsSide(true)} className={styles.menu}>
            {icons.menu}
          </h1>
        </div>
        <div className={styles.navbar}>
          <ul>
            {navList.map((i, index) => (
              <li key={index}>
                <Link
                  href={i.href}
                  className={pathName === i.href ? styles.active : null}
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {data?.data && !error ? (
        <Profile mobile={data?.data?.mobile} refetch={refetch} />
      ) : (
        <button onClick={() => setIsOpen(true)}>
          {icons.profile}
          {icons.signin}
          <p>ورود | ثبت نام</p>
        </button>
      )}
      {isSide && <SidebarMenu setIsSide={setIsSide} pathName={pathName} />}
    </header>
  );
}

export default Header;

//sidebar menu for mobile design
const SidebarMenu = ({ setIsSide, pathName }) => {
  return (
    <div className={styles.sidebarMenu} onClick={() => setIsSide(false)}>
      <div className={styles.menu}>
        <ul>
          {navList.map((i, index) => (
            <li key={index}>
              <Link
                href={i.href}
                className={pathName === i.href ? styles.active : null}
              >
                {icons[i.icon]}
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
