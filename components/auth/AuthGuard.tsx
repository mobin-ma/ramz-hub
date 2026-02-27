'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { initializeAuth } from '@/store/auth/authSlice';
import { fetchMe } from '@/store/auth/authThunk';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, loading, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // بارگذاری اولیه authentication
    dispatch(initializeAuth());
  }, [dispatch]);

  useEffect(() => {
    // اگر توکن وجود دارد ولی اطلاعات کاربر نیست، آن را دریافت کن
    if (isAuthenticated && !user && !loading) {
      dispatch(fetchMe());
    }
  }, [dispatch, isAuthenticated, user, loading]);

  useEffect(() => {
    // فقط اگر کاربر در صفحه auth است و احراز هویت شده، به داشبورد redirect کن
    if (pathname === '/auth' && isAuthenticated && !loading) {
      router.push('/');
    }
  }, [isAuthenticated, loading, pathname, router]);

  return <>{children}</>;
}
