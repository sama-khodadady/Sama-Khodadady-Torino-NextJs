import AuthProvider from "@/providers/AuthProvider";
import DashBoardLayout from "@/layouts/DashBoardLayout";

export const metadata = {
  title: "حساب کاربری",
};

function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <DashBoardLayout>{children}</DashBoardLayout>
    </AuthProvider>
  );
}

export default DashboardLayout;
