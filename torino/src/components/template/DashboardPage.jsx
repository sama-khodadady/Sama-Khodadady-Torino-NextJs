"use client";

import { useGetUser } from "@/services/queries";
import PersonalData from "@/ui/molecule/PersonalData";
import AccountDetail from "@/ui/molecule/AccountDetail";
import styles from "@/template/DashboardPage.module.css";
import BankAccountData from "@/ui/molecule/BankAccountData";

function DashboardPage() {
  const { data } = useGetUser();

  return (
    <div className={styles.dashboard}>
      <AccountDetail profile={data?.data} />
      <PersonalData profile={data?.data} />
      <BankAccountData profile={data?.data} />
    </div>
  );
}

export default DashboardPage;
