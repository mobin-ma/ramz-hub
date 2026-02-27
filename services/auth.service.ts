import axiosInstance from "@/lib/axios";

/* ================= OTP ================= */

// Send OTP code
export const sendOtpService = (phoneNumber: string) => {
  return axiosInstance.post("/auth/logister", {
    phone_number: phoneNumber,
  });
};

// OTP code verification
export const verifyOtpService = (data: {
  phoneNumber: string;
  code: string;
}) => {
  return axiosInstance.post("/auth/verify", {
    phone_number: data.phoneNumber,
    code: data.code,
  });
};

/* ================= USERNAME / PASSWORD ================= */

// Login with username and password
export const loginWithPasswordService = (data: {
  username: string;
  password: string;
}) => {
  return axiosInstance.post("/auth/logister", {
    username: data.username,
    password: data.password,
  });
};

/* ================= USER ================= */

// Get user information
export const getMeService = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

/* ================= TOKEN ================= */

// Refresh Token
export const refreshTokenService = (refreshToken: string) => {
  return axiosInstance.post("/auth/refresh", {
    refresh_token: refreshToken,
  });
};