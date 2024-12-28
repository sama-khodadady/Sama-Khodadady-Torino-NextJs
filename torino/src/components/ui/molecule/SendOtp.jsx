"use client";

import toast from "react-hot-toast";
import { e2p } from "@/utils/numbers";
import { useForm } from "react-hook-form";
import { useSendOtp } from "@/services/mutation";
import { useAuth } from "@/providers/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "src/core/schema/schema";
import styles from "@/ui/molecule/SendOtp.module.css";

function SendOtp({ setMobile, setStep, setCode }) {
  const { setIsOpen } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinSchema) });

  const { mutate, isPending } = useSendOtp();

  const sendHandler = (data) => {
    setMobile(data.mobile);
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        setCode(data.data.code);
        setStep(2);
      },
      onError: (error) => {
        // console.log(error);
        toast.error("مشکلی پیش آمده است لطفا از اتصال اینترنت خود مطمعن شوید!");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(sendHandler)} className={styles.form}>
      <button onClick={() => setIsOpen(false)} className={styles.cancel}>
        +
      </button>
      <h1>ورود به تورینو</h1>
      <span>شماره موبایل خود را وارد کنید</span>
      <input
        type="text"
        placeholder={e2p("4253***0912")}
        {...register("mobile")}
      />
      <div className={styles.error}>
        {!!errors.mobile && <span>{errors.mobile.message}</span>}
      </div>
      <button type="submit" className={styles.send}>
        {isPending ? "در حال ارسال..." : " ارسال کد تایید"}
      </button>
    </form>
  );
}

export default SendOtp;
