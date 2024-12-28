import localFont from "next/font/local";

//primary font [yekan]
export const yekan = localFont({
  src: [
    {
      path: "../../../public/fonts/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/YekanBakh-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/YekanBakh-Fat.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

//secondary font [vazir]
export const vazir = localFont({
  src: [
    {
      path: "../../../public/fonts/Vazirmatn-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Vazirmatn-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Vazirmatn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Vazirmatn-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

//complementary font [iransans]
export const iranSans = localFont({
  src: "../../../public/fonts/Iranian Sans.ttf",
  weight: "400",
  style: "normal",
});
