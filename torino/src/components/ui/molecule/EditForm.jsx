"use client";

import toast from "react-hot-toast";
import { icons } from "@/constants/icons";
import { useForm } from "react-hook-form";
import { separateFullName } from "@/utils/name";
import BirthdayInput from "../atom/BirthdayInput";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "@/ui/molecule/EditForm.module.css";
import "react-multi-date-picker/styles/colors/green.css";
import { personalDataSchema } from "src/core/schema/schema";
import { useUpdatePersonaleData } from "@/services/mutation";
import { formatBirthDate, persianDateFormat } from "@/utils/time";

function EditForm({ setIsEdit, profile }) {
  const { mutate } = useUpdatePersonaleData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(personalDataSchema) });

  const submitHandler = (data) => {
    const birthDate = formatBirthDate(data.date);
    const { firstName, lastName } = separateFullName(data.fullName);
    const form = { ...data, firstName, lastName, birthDate };

    mutate(form, {
      onSuccess: (data) => {
        setIsEdit(false);
        toast.success(data.data.message);
      },
      onError: (error) => {
        toast.error(error.data.message);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.editForm}>
      <div className={styles.inputs}>
        <div className={styles.fullName}>
          <input
            {...register("fullName")}
            placeholder="نام و نام خانوادگی"
            defaultValue={
              !!profile?.firstName && !!profile?.lastName
                ? `${profile?.firstName}${profile?.lastName}`
                : ""
            }
          />
          {!!errors.fullName && (
            <span className={styles.error}>{errors.fullName.message}</span>
          )}
        </div>
        <div className={styles.nationalCode}>
          <input
            type="number"
            {...register("nationalCode")}
            placeholder="کدملی"
            defaultValue={!!profile?.nationalCode ? profile.nationalCode : ""}
          />
          {!!errors.nationalCode && (
            <span className={styles.error}>{errors.nationalCode.message}</span>
          )}
        </div>
        <BirthdayInput
          control={control}
          errors={errors}
          date={persianDateFormat(profile?.birthDate).simpleFormat}
        />
        <div className={styles.gender}>
          {icons.arrowDown}
          <div className={styles.labelLine}>جنسیت</div>
          <select {...register("gender")} value={profile?.gender}>
            <option value="female">زن</option>
            <option value="male">مرد</option>
          </select>
          {!!errors.gender && (
            <span className={styles.error}>{errors.gender.message}</span>
          )}
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          تایید
        </button>
        <button onClick={() => setIsEdit(false)} className={styles.cancel}>
          انصراف
        </button>
      </div>
    </form>
  );
}

export default EditForm;
