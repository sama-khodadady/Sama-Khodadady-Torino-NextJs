"use client";

import { formatCreated } from "@/utils/time";
import { shortenId, sp } from "@/utils/numbers";
import { useGetTransactions } from "@/services/queries";
import styles from "@/template/TransactionsPage.module.css";

function TransactionsPage() {
  const { data, isLoading } = useGetTransactions();
  console.log(data);
  return (
    <div className={styles.transaction}>
      <table>
        <thead>
          <tr>
            <th>تاریخ و ساعت</th>
            <th>مبلغ(تومان)</th>
            <th>نوع تراکنش</th>
            <th>شماره سفارش</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={4} className={styles.loading}>
                در حال بارگیری...
              </td>
            </tr>
          ) : !data?.data?.length ? (
            <tr>
              <td colSpan={4} className={styles.loading}>
                هیچ تراکنشی یافت نشد!
              </td>
            </tr>
          ) : (
            data?.data.map((item) => (
              <tr key={item.id}>
                <td>{formatCreated(item.createdAt)}</td>
                <td>{sp(item.amount)}</td>
                <td>{item.type}</td>
                <td>
                  <span>سفارش</span>
                  {shortenId(item.id)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsPage;
