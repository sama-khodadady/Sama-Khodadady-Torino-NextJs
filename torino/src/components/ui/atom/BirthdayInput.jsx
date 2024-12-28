import { icons } from "@/constants/icons";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import styles from "@/ui/atom/BirthdayInput.module.css";
import "react-multi-date-picker/styles/colors/green.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function BirthdayInput({ control, errors, date }) {
  return (
    <div className={styles.birthdate}>
      <label htmlFor="birthdate" className={styles.calender}>
        {icons.calenderRegular}
      </label>
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={value || date || ""}
            onChange={(date) => onChange(date)}
            className="green"
            inputClass={styles.customInput}
            id="birthdate"
            placeholder="تاریخ تولد"
          />
        )}
      />
      {!!errors.date && (
        <span className={styles.error}>{errors.date.message}</span>
      )}
    </div>
  );
}

export default BirthdayInput;
