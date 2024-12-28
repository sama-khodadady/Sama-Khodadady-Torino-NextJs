"use client";

import { icons } from "@/constants/icons";
import { useForm } from "react-hook-form";
import BirthdayInput from "../atom/BirthdayInput";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "@/ui/molecule/OrderForm.module.css";
import "react-multi-date-picker/styles/colors/green.css";
import { personalDataSchema } from "src/core/schema/schema";

function OrderForm({ submitOrderHandler }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(personalDataSchema) });

  return (
    <form
      id="order"
      onSubmit={handleSubmit(submitOrderHandler)}
      className={styles.form}
    >
      <h1>
        {icons.profile}
        مشخصات مسافر
      </h1>
      <div className={styles.inputs}>
        <div className={styles.fullName}>
          <input {...register("fullName")} placeholder="نام و نام خانوادگی" />
          {!!errors.fullName && (
            <span className={styles.error}>{errors.fullName.message}</span>
          )}
        </div>
        <div className={styles.nationalCode}>
          <input
            type="number"
            {...register("nationalCode")}
            placeholder="کدملی"
          />
          {!!errors.nationalCode && (
            <span className={styles.error}>{errors.nationalCode.message}</span>
          )}
        </div>
        <BirthdayInput control={control} errors={errors} />
        <div className={styles.gender}>
          {icons.arrowDown}
          <div className={styles.labelLine}>جنسیت</div>
          <select {...register("gender")}>
            <option value="female">زن</option>
            <option value="male">مرد</option>
          </select>
          {!!errors.gender && (
            <span className={styles.error}>{errors.gender.message}</span>
          )}
        </div>
      </div>
    </form>
  );
}

export default OrderForm;
