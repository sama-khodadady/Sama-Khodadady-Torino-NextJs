"use client";

import { icons } from "@/constants/icons";
import TourCard from "../molecule/TourCard";
import { useEffect, useState } from "react";
import styles from "@/ui/organism/Tours.module.css";

function Tours({ data }) {
  const [visible, setVisible] = useState(4);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.innerWidth <= 780 ? setShow(true) : setShow(false);
  }, [show]);

  const moreHandler = () => {
    setVisible((visible) => visible + 4);
  };

  return (
    <div className={styles.container}>
      <h1>همه تور ها</h1>
      <div className={styles.tours}>
        {!data.length ? (
          <h1 className={styles.empty}>هیچ تور ای یافت نشد!</h1>
        ) : !show ? (
          data.map((tour) => <TourCard key={tour.id} data={tour} />)
        ) : (
          data
            .slice(0, visible)
            .map((tour) => <TourCard key={tour.id} data={tour} />)
        )}
      </div>
      {!!data.length && (
        <button
          onClick={moreHandler}
          className={styles.moreButton}
          disabled={data.length <= 4}
        >
          مشاهده بیشتر
          {icons.arrowDown}
        </button>
      )}
    </div>
  );
}

export default Tours;
