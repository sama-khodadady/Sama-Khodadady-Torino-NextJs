"use client";

import Link from "next/link";
import { icons } from "@/constants/icons";
import { usePathname } from "next/navigation";
import { dashboardSidebarList } from "@/constants/constant";
import styles from "@/ui/molecule/DashboardSidebar.module.css";

function DashboardSidebar() {
  const pathName = usePathname();

  return (
    <div className={styles.dashboardSidebar}>
      {dashboardSidebarList.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={pathName === item.href ? styles.active : null}
        >
          <div>
            {icons[item.icon]}
            <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DashboardSidebar;
