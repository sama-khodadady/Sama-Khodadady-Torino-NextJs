import { icons } from "@/constants/icons";
import { convertIOSFormat } from "@/utils/time";
import DatePicker from "react-multi-date-picker";
import styles from "@/ui/molecule/Calender.module.css";
import "react-multi-date-picker/styles/colors/green.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function Calender({ setSearch }) {
  const changeHandler = (e) => {
    () => setValues();
    setSearch((search) => ({ ...search, date: convertIOSFormat(e) }));
  };

  return (
    <div className={styles.calender}>
      <label htmlFor="calendar">{icons.calenderRegular}</label>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        onChange={changeHandler}
        range
        dateSeparator=" تا "
        className="green"
        inputClass={styles.customInput}
        id="calendar"
        placeholder="تاریخ"
      />
    </div>
  );
}

export default Calender;
