"use client";

import Link from "next/link";
import { useState } from "react";
import { e2p } from "@/utils/numbers";
import { icons } from "@/constants/icons";
import { removeCookie } from "@/utils/cookie";
import styles from "@/ui/molecule/Profile.module.css";

function Profile({ mobile, refetch }) {
  const [show, setShow] = useState(false);

  //logout account handler
  const logoutHandler = () => {
    removeCookie("accessToken", "");
    removeCookie("refreshToken", "");
    refetch(["user-profile"]);
  };

  return (
    <div
      className={styles.profile}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <p>{icons.profile}</p>
      <p>{e2p(mobile)}</p>
      <p>{icons.arrowDown}</p>
      {show && (
        <div className={styles.section}>
          <div className={styles.items}>
            <div className={styles.title}>
              <span>{icons.profile}</span>
              <p>{e2p(mobile)}</p>
            </div>
            <div className={styles.actions}>
              <div className={styles.dashboard}>
                {icons.profileRegular}
                <Link href="/dashboard">اطلاعات حساب کاربری</Link>
              </div>
              <div onClick={logoutHandler} className={styles.logout}>
                {icons.logout}
                <p>خروج از حساب کاربری</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
