"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useBasket } from "@/services/mutation";
import styles from "@/ui/atom/OrderButton.module.css";

function OrderButton({ tourId }) {
  const { replace } = useRouter();
  const { mutate, isPending } = useBasket(tourId);

  const orderHandler = () => {
    mutate(tourId, {
      onSuccess: (data) => {
        replace(`/tours/${tourId}/order`);
        toast.success(data.data.message);
      },
      onError: (error) => {
        toast.error("لطفا وراد حساب کاربری خود شوید!");
      },
    });
  };
  return (
    <button onClick={orderHandler} className={styles.button}>
      {isPending ? "...در حال پردازش" : "رزرو و خرید"}
    </button>
  );
}

export default OrderButton;
