import api from "@/config/api";
import { setCookie } from "@/utils/cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";

//hook for send OTP code request
const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};

//hook for check OTP code request
const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries(["user-profile"]);
  };
  return useMutation({ mutationFn, onSuccess });
};

//hook for get Order request
const useBasket = () => {
  const mutationFn = (TourId) => api.put(`basket/${TourId}`);
  return useMutation({ mutationFn });
};

//hook for submit order request
const useOrder = () => {
  // const queryClient = useQueryClient();
  const mutationFn = (form) => api.post("order", form);
  // const onSuccess = () => {
  //   queryClient.invalidateQueries({ queryKey: ["transactions"] });
  // };
  return useMutation({ mutationFn });
};

//hook for update user profile details
const useUpdateUserAccount = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.put("user/profile", { ...data });
  const onSuccess = () => {
    queryClient.invalidateQueries(["user-profile"]);
  };
  return useMutation({ mutationFn, onSuccess });
};

//hook for update user personal data
const useUpdatePersonaleData = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.put("user/profile", data);
  const onSuccess = () => {
    queryClient.invalidateQueries(["user-profile"]);
  };
  return useMutation({ mutationFn, onSuccess });
};

//hook for update user bank data
const useUpdateBankData = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.put("user/profile", data);
  const onSuccess = () => {
    queryClient.invalidateQueries(["user-profile"]);
  };
  return useMutation({ mutationFn, onSuccess });
};

export {
  useSendOtp,
  useCheckOtp,
  useBasket,
  useOrder,
  useUpdateUserAccount,
  useUpdatePersonaleData,
  useUpdateBankData,
};
