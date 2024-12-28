import { useState } from "react";
import { icons } from "@/constants/icons";
import { useAuth } from "@/providers/AuthContext";
import styles from "@/ui/molecule/Destination.module.css";

function Destination({ cities, setSearch }) {
  const [show, setShow] = useState(false);
  const { destination, setDestination } = useAuth();

  const clickHandler = (e, id) => {
    const { innerText } = e.target;
    setDestination(innerText);
    setSearch((search) => ({ ...search, destinationId: id }));
  };

  return (
    <div
      className={styles.destination}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <label htmlFor="destination">{icons.globalSearch}</label>
      <input
        type="text"
        id="destination"
        name="destination"
        placeholder="مقصد"
        value={destination}
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

export default Destination;
