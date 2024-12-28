"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { e2p } from "@/utils/numbers";
import { icons } from "@/constants/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userAccountSchema } from "src/core/schema/schema";
import { useUpdateUserAccount } from "@/services/mutation";
import styles from "@/ui/molecule/AccountDetail.module.css";

function AccountDetail({ profile }) {
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userAccountSchema) });

  const { mutate } = useUpdateUserAccount();

  const submitHandler = (data) => {
    setIsEdit(false);
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.data.message);
      },
      onError: (error) => {
        toast.error(error.data.message);
      },
    });
  };

  return (
    <div className={styles.account}>
      <h1>اطلاعات حساب کاربری</h1>
      {isEdit ? (
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <div className={styles.mobile}>
            <input
              type="text"
              defaultValue={!!profile?.mobile ? profile?.mobile : ""}
              placeholder="موبایل"
              {...register("mobile")}
            />
            {!!errors.mobile && <span>{errors.mobile.message}</span>}
          </div>
          <div className={styles.email}>
            <input
              type="text"
              defaultValue={!!profile?.email ? profile?.email : ""}
              placeholder="آدرس ایمیل"
              {...register("email")}
            />
            {!!errors.email && <span>{errors.email.message}</span>}
          </div>
          <button type="submit">تایید</button>
        </form>
      ) : (
        <div className={styles.accountInfo}>
          <div className={styles.mobile}>
            <p> شماره موبایل</p>
            <span>{!!profile?.mobile ? e2p(profile?.mobile) : "--"}</span>
          </div>
          <div className={styles.email}>
            <p> ایمیل</p>
            <span>{!!profile?.email ? profile?.email : "--"}</span>
          </div>
          <button onClick={() => setIsEdit(true)}>
            {icons.edit}
            افزودن
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountDetail;
