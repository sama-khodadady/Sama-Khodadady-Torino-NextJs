import Image from "next/image";
import { e2p, sp } from "@/utils/numbers";
import { icons } from "@/constants/icons";
import { getTour } from "@/services/httpReq";
import { timeInterval } from "@/utils/time";
import OrderButton from "@/ui/atom/OrderButton";
import { tourFeatures } from "@/constants/constant";
import TourFeatures from "@/ui/molecule/TourFeatures";
import styles from "@/template/TourDetailPage.module.css";

async function TourDetailPage({ tourId }) {
  const { data } = await getTour(tourId);
  const days = timeInterval(data.startDate, data.endDate);
  const nights = days - 1;

  return (
    <div className={styles.tour}>
      <div className={styles.container}>
        <div className={styles.details}>
          <Image src={data.image} width={397} height={265} alt={data.title} />
          <div className={styles.desc}>
            <div className={styles.title}>
              <h1>{data.title}</h1>
              <span className={styles.days}>{`${e2p(days)} روز و ${e2p(
                nights
              )} شب `}</span>
              <div className={styles.feature}>
                {tourFeatures.map((i) => (
                  <span key={i.id}>
                    {icons[i.icon]}
                    <p>{i.title}</p>
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.actions}>
              <p>
                <span>{sp(data.price)}</span> تومان
              </p>
              <OrderButton tourId={data.id} />
            </div>
          </div>
        </div>
        <TourFeatures tour={data} />
      </div>
    </div>
  );
}

export default TourDetailPage;
