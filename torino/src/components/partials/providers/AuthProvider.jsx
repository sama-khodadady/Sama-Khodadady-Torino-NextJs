"use client";

import { useRouter } from "next/navigation";
import { useGetUser } from "@/services/queries";

function AuthProvider({ children }) {
  const { error } = useGetUser();
  const { push } = useRouter();
  if (error?.status === 401 || error?.status === 404) push("/");

  return children;
}

export default AuthProvider;
