'use client';

import { useEffect } from 'react';
import { MdOutlineAccountCircle, MdLogout, MdLogin } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState, AppDispatch } from '@/store';
import { logout, initializeAuth } from '@/store/auth/authSlice';
import { fetchMe } from '@/store/auth/authThunk';

export default function UserProfile() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // بارگذاری اولیه authentication
    dispatch(initializeAuth());
    
    // اگر توکن وجود دارد ولی اطلاعات کاربر نیست، آن را دریافت کن
    if (isAuthenticated && !user && !loading) {
      dispatch(fetchMe());
    }
  }, [dispatch, isAuthenticated, user, loading]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    router.push('/auth');
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-text-secondary">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm">در حال بارگذاری...</span>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-3">
        <div className="items-center gap-2 text-white hidden sm:flex">
          <MdOutlineAccountCircle size={24} />
          <span className="text-sm font-medium">
            {user.username || user.phone_number}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:text-white hover:bg-background transition-colors"
          title="خروج"
        >
          <MdLogout size={20} />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
    >
      <MdLogin size={20} />
      <span>ورود</span>
    </button>
  );
}