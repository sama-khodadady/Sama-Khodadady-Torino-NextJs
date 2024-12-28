import axios from "axios";
import { getCookie, setCookie } from "@/utils/cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    // console.log(request);
    if (request.url !== "tour") {
      const accessToken = getCookie("accessToken");
      if (accessToken)
        request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log({ error });
    const orginialRequest = error.config;
    if (
      (error?.response?.status === 401 || error?.response?.status === 403) &&
      !orginialRequest._retry
    ) {
      orginialRequest._retry = true;

      const res = await getNewTokens();
      console.log(res);
      if (res?.response?.status === 200) {
        console.log("ok");
        setCookie("accessToken", res?.response?.data.accessToken, 30);
        // setCookie("refreshToken", res?.response?.data.refreshToken, 360);
        return api(orginialRequest);
      } else {
        console.log("else");
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(error?.response);
  }
);

export default api;

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
      {
        refreshToken,
      }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};
