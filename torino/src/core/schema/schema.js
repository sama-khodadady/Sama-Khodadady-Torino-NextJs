import { e2p } from "@/utils/numbers";
import { object, string } from "yup";

//use mobile & email validation schema
const userAccountSchema = object({
  mobile: string()
    .required("شماره موبایل خود را وارد کنید!")
    .matches(
      /^(\+98|0)?9\d{9}$/,
      `شماره موبایل باید به شکل ${e2p("09")} یا ${e2p("98+")} باشد!`
    ),
  email: string()
    .email("ایمیل معتبر نمیباشد!")
    .required("ایمیل خود را وارد کنید!"),
});

// user personal data validation schema
const personalDataSchema = object({
  fullName: string()
    .trim("نام و نام خانوادکی خود را وارد کنید")
    .required("نام و نام خانوادگی خود را وارد کنید!"),
  gender: string().required("لطفا جنسیت را انتخاب کنید"),
  date: string().required("تاریخ تولد خود را انتخاب کنید"),
  nationalCode: string()
    .trim("کد ملی خود را وارد کنید!")
    .length(10, `کد ملی باید ${e2p("10")} رقمی باشد`)
    .required("کد ملی خود را وارد کنید!"),
});

//use bank account data validation schema
const bankAccountSchema = object({
  shaba_code: string()
    .trim("لطفا شماره شبا را وارد کنید")
    .length(24, `شماره کارت باید ${e2p("24")} رقمی باشد`)
    .required("لطفا شماره شبا را وارد کنید"),
  debitCard_code: string()
    .trim("لطفا شماره کارت را وارد کنید")
    .length(16, `شماره کارت باید ${e2p("16")} رقمی باشد`)
    .required("لطفا شماره کارت را وارد کنید"),
  accountIdentifier: string()
    .trim("لطفا شماره حساب را وارد کنید")
    .min(12, ` شماره حساب حداقل باید ${e2p("12")} رقمی باشد`)
    .max(16, ` شماره حساب حداقل باید ${e2p("16")} رقمی باشد`)
    .required("لطفا شماره حساب را وارد کنید"),
});

//user mobile for signin validation schema
const signinSchema = object({
  mobile: string()
    .trim()
    .required("شماره موبایل خود را وارد کنید!")
    .matches(
      /^(\+98|0)?9\d{9}$/,
      `شماره موبایل باید به شکل ${e2p("09")} یا ${e2p("98+")} باشد!`
    ),
});

export {
  userAccountSchema,
  personalDataSchema,
  bankAccountSchema,
  signinSchema,
};
