import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

//hook for get user data
const useGetUser = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-profile"];
  return useQuery({ queryKey, queryFn });
};

//hook for get all tours
const useGetTours = () => {
  const queryFn = () => api.get("tour");
  const queryKey = ["tours"];
  return useQuery({ queryKey, queryFn });
};

//hook for get user basket
const useGetBasket = (tourId) => {
  const queryFn = () => api.get("basket");
  const queryKey = ["basket", tourId];
  return useQuery({ queryKey, queryFn });
};

//hook for get user transactions
const useGetTransactions = () => {
  const queryFn = () => api.get("user/transactions");
  const queryKey = ["transactions"];
  return useQuery({ queryKey, queryFn });
};

//jook for get user tours
const useUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];
  return useQuery({ queryKey, queryFn });
};

export {
  useGetUser,
  useGetTours,
  useGetBasket,
  useGetTransactions,
  useUserTours,
};
