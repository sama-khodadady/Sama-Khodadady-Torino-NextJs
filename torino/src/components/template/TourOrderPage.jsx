"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useOrder } from "@/services/mutation";
import { formatBirthDate } from "@/utils/time";
import OrderForm from "@/ui/molecule/OrderForm";
import { separateFullName } from "@/utils/name";
import OrderSidebar from "@/ui/molecule/OrderSidebar";
import styles from "@/template/TourOrderPage.module.css";

function TourOrderPage({ tourId }) {
  const { mutate, isPending } = useOrder();
  const { push } = useRouter();

  const submitOrderHandler = (data) => {
    const birthDate = formatBirthDate(data.date);
    const { firstName, lastName } = separateFullName(data.fullName);
    const form = { ...data, firstName, lastName, birthDate };

    mutate(form, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        push("/dashboard");
      },
      onError: (error) => {
        console.log(error);
        if (error.status === 400) {
          toast.error(error.data.message);
          push("/");
        }
        if (error.status === 404) {
          toast.error(error.data.message);
          push(`/tours/${tourId}`);
        }
      },
    });
  };

  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <OrderForm mutate={mutate} submitOrderHandler={submitOrderHandler} />
        <OrderSidebar tourId={tourId} isPending={isPending} />
      </div>
    </div>
  );
}

export default TourOrderPage;
