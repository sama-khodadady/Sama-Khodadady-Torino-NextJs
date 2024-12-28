import Link from "next/link";
import Image from "next/image";
import { sp } from "@/utils/numbers";
import styles from "@/ui/molecule/TourCard.module.css";
import { persianDateFormat, timeInterval } from "@/utils/time";

function TourCard({ data }) {
  const { id, image, startDate, endDate, title, price, options, fleetVehicle } =
    data;

  return (
    <div className={styles.card}>
      <Image src={image} width={278.44} height={159} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <span className={styles.ellipsis}>
          {persianDateFormat(startDate).month} ماه .
          {timeInterval(startDate, endDate)} روزه - {fleetVehicle} -{options[1]}
          - {options[0]}
        </span>
      </div>
      <div className={styles.actions}>
        <button>
          <Link href={`/tours/${id}`}>رزرو</Link>
        </button>
        <p>
          <span>{sp(price)}</span> تومان
        </p>
      </div>
    </div>
  );
}

export default TourCard;
