import { e2p } from "@/utils/numbers";
import { icons } from "@/constants/icons";
import { persianDateFormat } from "@/utils/time";
import styles from "@/ui/molecule/TourFeatures.module.css";

function TourFeatures({ tour }) {
  return (
    <div className={styles.features}>
      <div>
        <span>
          {icons.routing}
          <p className={styles.name}>مبدا</p>
        </span>
        <p className={styles.value}>{tour.origin.name}</p>
      </div>
      <div>
        <span>
          {icons.calender}
          <p className={styles.name}>تاریخ رفت</p>
        </span>
        <p className={styles.value}>
          {persianDateFormat(tour.startDate).longFormat}
        </p>
      </div>
      <div>
        <span>
          {icons.thCalender}
          <p className={styles.name}>تاریخ برگشت</p>
        </span>
        <p className={styles.value}>{persianDateFormat(tour.endDate).longFormat}</p>
      </div>
      <div>
        <span>
          {icons.busSolid}
          <p className={styles.name}>حمل و نقل</p>
        </span>
        <p className={styles.value}>{tour.fleetVehicle}</p>
      </div>
      <div>
        <span>
          {icons.usersProfile}
          <p className={styles.name}>ظرفیت</p>
        </span>
        <p className={styles.value}> حداکثر {e2p(tour.availableSeats)} نفر</p>
      </div>
      <div>
        <span>
          {icons.security}
          <p className={styles.name}>بیمه</p>
        </span>
        <p className={styles.value}>{tour.insurance ? "دارد" : "ندارد"}</p>
      </div>
    </div>
  );
}

export default TourFeatures;
