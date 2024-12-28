import styles from "@/layouts/DashBoardLayout.module.css";
import DashboardSidebar from "@/ui/molecule/DashboardSidebar";

function DashBoardLayout({ children }) {
  return (
    <div className={styles.dashboardLayout}>
      <DashboardSidebar />
      <div>{children}</div>
    </div>
  );
}

export default DashBoardLayout;
