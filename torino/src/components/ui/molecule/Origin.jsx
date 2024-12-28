"use client";

import { useState } from "react";
import { icons } from "@/constants/icons";
import styles from "@/ui/molecule/Origin.module.css";
import { useAuth } from "@/providers/AuthContext";

function Origin({ cities, setSearch }) {
  const [show, setShow] = useState(false);
  const { origin, setOrigin } = useAuth();

  const clickHandler = (e, id) => {
    const { innerText } = e.target;
    setOrigin(innerText);
    setSearch((search) => ({ ...search, originId: id }));
  };

  return (
    <div
      className={styles.origin}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <label htmlFor="origin">{icons.location}</label>
      <input
        type="text"
        id="origin"
        name="origin"
        value={origin}
        placeholder="مبدا"
        readOnly
      />
      {show && (
        <div className={styles.cities}>
          <div>
            <p className={styles.title}>پرتردد</p>
            <ul>
              {cities.map((city) => (
                <li key={city.id} onClick={(e) => clickHandler(e, city.id)}>
                  {icons.location}
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Origin;
