"use client";

import { icons } from "@/constants/icons";
import { shortenId, sp } from "@/utils/numbers";
import { useUserTours } from "@/services/queries";
import styles from "@/template/MyToursPage.module.css";
import { persianDateFormat, tourStatus } from "@/utils/time";

function MyToursPage() {
  const { data, isLoading } = useUserTours();
  console.log({ data, isLoading });
  return (
    <div className={styles.myTour}>
      {isLoading ? (
        <h1>در حال بارگیری...</h1>
      ) : !data?.data?.length ? (
        <h1>هیچ توری یافت نشد!</h1>
      ) : (
        data?.data.map((tour, index) => (
          <div key={index} className={styles.tourCard}>
            <div className={styles.details}>
              <div className={styles.status}>
                <span>
                  {icons.sun}
                  <p>{tour.title}</p>
                </span>
                <span>
                  {icons[tour.fleetVehicle]}
                  <p> سفر با {tour.fleetVehicle}</p>
                </span>
                <span>{tourStatus(tour.startDate, tour.endDate).status}</span>
              </div>
              <div className={styles.time}>
                <div>
                  <p>{`${tour.origin.name} به ${tour.destination.name}`} </p>
                  <p>. {persianDateFormat(tour.startDate).customFormat}</p>
                </div>
                <div>
                  <p>تاریخ برگشت </p>
                  <p>. {persianDateFormat(tour.endDate).customFormat}</p>
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <p className={styles.name}>
                شماره تور <span>{shortenId(tour.id)}</span>
              </p>
              <div className={styles.priceContainer}>
                <p className={styles.name}>مبلغ پرداخت شده</p>
                <p className={styles.amount}>
                  <span>{sp(tour.price)}</span> تومان
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyToursPage;
