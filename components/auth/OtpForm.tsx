"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { verifyOtp, fetchMe, sendOtp } from "@/store/auth/authThunk";
import { RootState } from "@/store";

interface OtpFormProps {
  phone: string;
  onBack: () => void;
}

export default function OtpForm({ phone, onBack }: OtpFormProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error, isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(90);

  // Redirect to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code || code.length !== 5) {
      return;
    }

    try {
      await dispatch(verifyOtp({ phoneNumber: phone, code })).unwrap();
      await dispatch(fetchMe()).unwrap();
      // User will be redirected by useEffect
    } catch (error) {
      // Error is handled in Redux store
    }
  };

  const handleResendCode = async () => {
    try {
      await dispatch(sendOtp({ phoneNumber: phone })).unwrap();
      setTimeLeft(90);
      setCode("");
    } catch (error) {
      // Error is handled in Redux store
    }
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-white mb-2">تایید کد</h2>
        <p className="text-gray-400 text-sm mb-2">
          کد تایید به شماره {phone} ارسال شد
        </p>
        <button
          type="button"
          onClick={onBack}
          className="text-primary hover:underline text-sm"
        >
          تغییر شماره
        </button>
      </div>

      <form onSubmit={handleVerify} className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider ml-1" htmlFor="code">
            کد تایید
          </label>
          <input
            className="block w-full px-4 py-3 border border-border rounded-lg bg-background-dark/50 text-white text-center text-2xl tracking-widest placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
            id="code"
            placeholder="12345"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
            maxLength={5}
          />
          {code && code.length !== 5 && (
            <p className="text-red-400 text-xs mt-1">کد باید 5 رقم باشد</p>
          )}
        </div>

        <button
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-glow text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          type="submit"
          disabled={loading || code.length !== 5}
        >
          {loading ? 'در حال تایید...' : 'تایید کد'}
        </button>

        <button
          type="button"
          onClick={handleResendCode}
          disabled={loading || timeLeft > 0}
          className="w-full flex justify-center py-3 px-4 border border-border rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-background-dark/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {timeLeft > 0 ? `ارسال مجدد تا ${timeLeft} ثانیه` : 'ارسال مجدد کد'}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm text-center">{error}</p>
        </div>
      )}
    </div>
  );
}