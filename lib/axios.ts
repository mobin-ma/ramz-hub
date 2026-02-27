"use client";

import axios from "axios";
import { refreshTokenService } from "@/services/auth.service";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.ramzlight.com";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Add Access Token)
axiosInstance.interceptors.request.use(
  (config) => {
    // دریافت توکن از localStorage به جای store
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Refresh Token)
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem('refresh_token');

      if (!refreshToken) {
        // پاک کردن توکن‌ها و redirect به صفحه ورود
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token_type');
        
        // Redirect به صفحه auth
        if (typeof window !== 'undefined') {
          window.location.href = '/auth';
        }
        
        return Promise.reject(error);
      }

      try {
        const res = await refreshTokenService(refreshToken);

        const newAccessToken = res.data.access_token;
        const newRefreshToken = res.data.refresh_token;

        // ذخیره توکن‌های جدید
        localStorage.setItem('access_token', newAccessToken);
        localStorage.setItem('refresh_token', newRefreshToken);
        localStorage.setItem('token_type', res.data.token_type);

        processQueue(null, newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        
        // پاک کردن توکن‌ها و redirect به صفحه ورود
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token_type');
        
        // Redirect به صفحه auth
        if (typeof window !== 'undefined') {
          window.location.href = '/auth';
        }
        
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;