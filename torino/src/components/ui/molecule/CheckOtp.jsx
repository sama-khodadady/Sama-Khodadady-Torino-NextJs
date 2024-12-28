import toast from "react-hot-toast";
import OtpInput from "react18-input-otp";
import { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useAuth } from "@/providers/AuthContext";
import { useCheckOtp } from "@/services/mutation";
import { e2p, securePhone } from "@/utils/numbers";
import styles from "@/ui/molecule/CheckOtp.module.css";

function CheckOtp({ code, setCode, mobile, setStep }) {
  const { setIsOpen } = useAuth();
  const [timer, setTimer] = useState({ minute: 9, seconds: 59 });
  const { mutate, isPending } = useCheckOtp();

  useEffect(() => {
    const interval = setInterval(() => {
      timer.seconds > 0 &&
        setTimer((timer) => ({ ...timer, seconds: timer.seconds - 1 }));

      timer.seconds === 0
        ? timer.minute === 0
          ? clearInterval(interval)
          : setTimer((timer) => ({ minute: timer.minute - 1, seconds: 59 }))
        : null;
    }, 1000);
    if (timer.minute === 0 && timer.seconds === 0) setStep(1);

    return () => {
      clearInterval(interval);
    };
  }, [timer.seconds]);

  const checkOtpHandler = (e) => {
    e.preventDefault();
    mutate(
      { mobile, code },
      {
        onSuccess: () => {
          setStep(1);
          setIsOpen(false);
          toast.success("با موفقیت وارد شدید");
        },
        onError: (error) => {
          console.log(error.status);
          if (error.status === 400) toast.error(error.data.message);
        },
      }
    );
  };

  return (
    <form className={styles.form}>
      <button onClick={() => setStep(1)} className={styles.back}>
        <GoArrowLeft />
      </button>
      <h1>کد تایید را وارد کنید.</h1>
      <p className={styles.number}>
        کد تایید به شماره <span>{securePhone(mobile)}</span> ارسال شد
      </p>
      <div>
        <OtpInput
          value={code}
          onChange={(otp) => setCode(otp)}
          numInputs={6}
          inputStyle={styles.otpInput}
        />
      </div>
      <p className={styles.timer}>
        <span>
          {`${e2p(`0${timer.minute}`)}:${
            timer.seconds < 10 ? e2p("0") : ""
          }${e2p(timer.seconds)}`}
        </span>
        تا ارسال مجدد کد
      </p>

      <button onClick={checkOtpHandler} className={styles.login}>
        <p>{isPending ? "درحال ورود..." : "ورود به تورینو"}</p>
      </button>
    </form>
  );
}

export default CheckOtp;
