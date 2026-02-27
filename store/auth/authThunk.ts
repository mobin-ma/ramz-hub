import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tokens, User } from "@/types/authTypings";
import { sendOtpService, verifyOtpService, loginWithPasswordService, getMeService } from "@/services/auth.service";

// Send OTP code
export const sendOtp = createAsyncThunk<
  void,
  { phoneNumber: string },
  { rejectValue: string }
>("auth/sendOtp", async ({ phoneNumber }, { rejectWithValue }) => {
  try {
    const response = await sendOtpService(phoneNumber);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.message || "ارسال کد با خطا مواجه شد");
  }
});

// OTP code verification
export const verifyOtp = createAsyncThunk<
  Tokens,
  { phoneNumber: string; code: string },
  { rejectValue: string }
>("auth/verifyOtp", async (data, { rejectWithValue }) => {
  try {
    const res = await verifyOtpService(data);
    
    // ذخیره توکن‌ها در localStorage
    localStorage.setItem('access_token', res.data.access_token);
    localStorage.setItem('refresh_token', res.data.refresh_token);
    localStorage.setItem('token_type', res.data.token_type);
    
    return {
      access_token: res.data.access_token,
      refresh_token: res.data.refresh_token,
      token_type: res.data.token_type,
    };
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.message || "کد وارد شده نادرست است");
  }
});

// Login with username
export const loginWithPassword = createAsyncThunk<
  Tokens,
  { username: string; password: string },
  { rejectValue: string }
>("auth/loginWithPassword", async (data, { rejectWithValue }) => {
  try {
    const res = await loginWithPasswordService(data);
    
    // ذخیره توکن‌ها در localStorage
    localStorage.setItem('access_token', res.data.access_token);
    localStorage.setItem('refresh_token', res.data.refresh_token);
    localStorage.setItem('token_type', res.data.token_type);
    
    return {
      access_token: res.data.access_token,
      refresh_token: res.data.refresh_token,
      token_type: res.data.token_type,
    };
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.message || "نام کاربری یا رمز عبور اشتباه است");
  }
});

// Get user information
export const fetchMe = createAsyncThunk<User, void, { rejectValue: string }>(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      return await getMeService();
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "خطا در دریافت اطلاعات کاربر");
    }
  }
);