import "./globals.css";
import { yekan } from "@/utils/fonts";
import Layout from "@/layouts/Layout";
import { Toaster } from "react-hot-toast";
import SignInModal from "@/template/SignInModal";
import AuthProvider from "@/providers/AuthContext";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

export const metadata = {
  title: "تورینو",
  description:
    "شرکت خدمات مسافرتی تورینو. تورینو بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور.",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <TanstackQueryProvider>
          <AuthProvider>
            <Layout>{children}</Layout>
            <SignInModal />
          </AuthProvider>
        </TanstackQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
