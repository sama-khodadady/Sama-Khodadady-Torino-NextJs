"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { e2p } from "@/utils/numbers";
import { icons } from "@/constants/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateBankData } from "@/services/mutation";
import { bankAccountSchema } from "src/core/schema/schema";
import styles from "@/ui/molecule/BankAccountData.module.css";

function BankAccountData({ profile }) {
  const [isEdit, setIsEdit] = useState(false);
  const { mutate, isPending } = useUpdateBankData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bankAccountSchema) });

  const submitHandler = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
      },
      onError: (error) => {
        toast.error(error?.data?.message);
      },
    });
    setIsEdit(false);
  };

  return (
    <div className={styles.bank}>
      <h1>{isEdit ? "ویرایش اطلاعات حساب بانکی" : "اطلاعات حساب بانکی"}</h1>
      {isEdit ? (
        <form
          onSubmit={handleSubmit(submitHandler)}
          className={styles.bankForm}
        >
          <div className={styles.inputs}>
            <div className={styles.shabaCode}>
              <input
                type="text"
                {...register("shaba_code")}
                placeholder="شماره شبا"
                defaultValue={!!profile?.shaba_code ? profile?.shaba_code : ""}
              />
              {!!errors.shaba_code && (
                <span className={styles.error}>
                  {errors.shaba_code.message}
                </span>
              )}
            </div>
            <div className={styles.debiCard}>
              <input
                type="number"
                {...register("debitCard_code")}
                placeholder="شماره کارت"
                defaultValue={
                  !!profile?.debitCard_code ? profile?.debitCard_code : ""
                }
              />
              {!!errors.debitCard_code && (
                <span className={styles.error}>
                  {errors.debitCard_code.message}
                </span>
              )}
            </div>
            <div className={styles.accountID}>
              <input
                type="number"
                {...register("accountIdentifier")}
                placeholder="شماره حساب"
                defaultValue={
                  !!profile?.accountIdentifier ? profile?.accountIdentifier : ""
                }
              />
              {!!errors.accountIdentifier && (
                <span className={styles.error}>
                  {errors.accountIdentifier.message}
                </span>
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
      ) : (
        <div className={styles.bankData}>
          <div className={styles.shabaCode}>
            <p>شماره شبا</p>
            <span>
              {!!profile?.shaba_code ? e2p(profile?.shaba_code) : "--"}
            </span>
          </div>
          <div className={styles.debitCard}>
            <p>شماره کارت</p>
            <span>
              {!!profile?.debitCard_code ? e2p(profile?.debitCard_code) : "--"}
            </span>
          </div>
          <div className={styles.accountID}>
            <p>شماره حساب</p>
            <span>
              {!!profile?.accountIdentifier
                ? e2p(profile?.accountIdentifier)
                : "--"}
            </span>
          </div>
          <button onClick={() => setIsEdit(true)} className={styles.edit}>
            {icons.edit}
            ویرایش اطلاعات
          </button>
        </div>
      )}
    </div>
  );
}

export default BankAccountData;
