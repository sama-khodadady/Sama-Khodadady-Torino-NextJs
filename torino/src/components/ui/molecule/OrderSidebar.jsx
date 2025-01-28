"use client";

import { e2p, sp } from "@/utils/numbers";
import { timeInterval } from "@/utils/time";
import { useGetBasket } from "@/services/queries";
import styles from "@/ui/molecule/OrderSidebar.module.css";

function OrderSidebar({ tourId, isPending }) {
  const { data } = useGetBasket(tourId);

  const days = timeInterval(data?.data?.startDate, data?.data?.endDate);
  const nights = days - 1;
  const price = sp(data?.data?.price);

  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <h1>{data?.data?.title} </h1>
        <span>{`${e2p(days)} روز و ${e2p(nights)} شب `}</span>
      </div>
      <div className={styles.price}>
        <h3> قیمت نهایی</h3>
        <p>
          <span>{price}</span> تومان
        </p>
      </div>
      <button form="order" type="submit" disabled={isPending}>
        {isPending ? "درحال انتقال..." : "ثبت و خرید نهایی"}
      </button>
    </div>
  );
}

export default OrderSidebar;
